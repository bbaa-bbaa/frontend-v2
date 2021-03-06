import recognizerHash from '@/models/recognizer_hash'
import store from '@/store'
import JSZip from 'jszip'
import reduce from 'lodash/reduce'
// import pick from "lodash/pick";
import uniq from 'lodash/uniq'
// import Jimp from 'jimp'

// function addCanvas (canvas, url, small = false) {
//   // canvas.style.height = small ? '80px' : '264px'
//   // if (!small) canvas.style.float = 'left'
//   canvas.setAttribute('data-title', new Date().toLocaleString())
//   canvas.setAttribute('data-url', url)
//   const s = document.getElementById('canvases')
//   if (s) s.prepend(canvas)
// }

async function image2wasmHeapOffset (blob, name) {
  const Module = window.Module
  console.time(`writeToWasmHeap_${name}`)
  const imageData = await new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = function (event) {
      resolve(event.target.result)
    }
    reader.readAsArrayBuffer(blob)
  })
  const uint8 = new Uint8Array(imageData)

  const numBytes = uint8.length
  const dataPtr = Module._malloc(numBytes)
  const dataOnHeap = new Uint8Array(Module.HEAPU8.buffer, dataPtr, numBytes)
  dataOnHeap.set(uint8)
  console.timeEnd(`writeToWasmHeap_${name}`)

  return {
    offset: dataOnHeap.byteOffset,
    length: numBytes,
    blobUrl: URL.createObjectURL(blob)
  }
}

class Recognizer {
  async initialize (server) {
    console.groupCollapsed('Initialization logs for recognition ')

    // Lazy load of recognize.js and recognize.wasm
    if (!window.Module) {
      console.log('load module')
      var script = document.createElement('script')
      script.src = '/recognize.js'
      document.head.appendChild(script)
      console.log('script', script)
      await new Promise((resolve, reject) => {
        script.onload = function () {
          resolve()
          console.log('recognize.js loaded')
        }
      })
      await new Promise((resolve, reject) => {
        window.Module.onRuntimeInitialized = () => {
          console.log('recognize.wasm loaded')
          resolve()
        }
      })
    } else {
      console.log('recognize.js and recognize.wasm have already been loaded')
    }
    const Module = window.Module

    this.wasm = {
      recognize: Module.cwrap('recognize', 'string', ['number', 'number']),
      preload_json: Module.cwrap('preload_json', 'void', [
        'string',
        'string',
        'string',
        'string'
      ]),
      preload_tmpl: Module.cwrap('preload_templ', 'void', ['string', 'number'])
      // free_buffer: Module.cwrap('free_buffer', 'void', ['number'])
    }

    console.log('preloading json')

    const preloads = {
      stages: reduce(
        store.getters['data/content']({ id: 'stages' }),
        (obj, item) => {
          return {
            ...obj,
            [item.code]: {
              stageId: item.stageId,
              drops: uniq(
                reduce(
                  item.dropInfos,
                  (array, dropInfo) => {
                    if (dropInfo.itemId && dropInfo.itemId !== 'furni') {
                      return [...array, dropInfo.itemId]
                    } else {
                      return [...array]
                    }
                  },
                  item.recognitionOnly ? [...item.recognitionOnly] : []
                )
              )
            }
          }
        },
        {}
      ),
      // items: reduce(
      //   store.getters["data/content"]({ id: "items" }),
      //   (obj, item) => {
      //     return {
      //       ...obj,
      //       [item["itemId"]]: {},
      //     };
      //   },
      //   {
      //     4006: {},
      //   }
      // ),
      items: {}, // TODO: wil be fixed in WASM v3
      hash: recognizerHash
    }

    this.wasm.preload_json(
      JSON.stringify(preloads.stages),
      JSON.stringify(preloads.items),
      JSON.stringify(preloads.hash),
      server
    )

    console.log('json preloaded')

    console.log('starting to preload item icons')

    await fetch('/items.zip')
      .then((response) => {
        if (response.status >= 200 && response.status < 400) {
          return Promise.resolve(response.blob())
        } else {
          return Promise.reject(new Error(response.statusText))
        }
      })
      .then((zip) => JSZip.loadAsync(zip))
      .then(async (zip) => {
        const ImageBuffer = []
        zip.forEach((relativePath, file) => {
          ImageBuffer.push(new Promise((resolve, reject) => {
            const item = file.name.split('.')[0]
            console.log('adding', item, 'to preloaded item icon')
            file.async('blob').then(async (blob) => {
              const { offset, length } = await image2wasmHeapOffset(blob, file.name)
              this.wasm.preload_tmpl(item, offset, length)
            }).then(resolve)
          }))
        })
        return Promise.all(ImageBuffer)
      })
    console.groupEnd()
    return this
  }

  async recognize (files, resultCb) {
    for (const file of files) {
      console.groupCollapsed('Recognition logs for', file.name)
      console.log('start recognizing file', file.name)
      console.time(file.name)
      const data = await image2wasmHeapOffset(file)
      console.log('finished writing file to wasm heap. starting recognition')
      console.timeLog(file.name)
      const start = performance.now()
      const result = this.wasm.recognize(data.offset, data.length, 0)
      const duration = performance.now() - start
      console.log('recognized with result', result, 'executing callback')
      console.timeLog(file.name)
      const parsedResult = JSON.parse(result) || { errors: [], drops: [] }
      console.debug('recognition result', parsedResult)
      resultCb({
        file,
        blobUrl: data.blobUrl,
        duration,
        result: parsedResult
      })
      console.log('callback executed. freeing buffer with offset', data.offset)
      console.timeLog(file.name)
      // this.wasm.free_buffer(data.offset)
      console.log('buffer freed. timer ended')
      console.timeEnd(file.name)
      console.groupEnd()
    }
  }
}

export default Recognizer
