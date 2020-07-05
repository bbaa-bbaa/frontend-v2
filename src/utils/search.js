import PinyinEngine from "pinyin-engine"
import store from "@/store";

export default {
  engine: null,
  ready () {
    this.engine = new PinyinEngine(store.getters['data/content']({id: "items"}), ["name"])
  },
  query (keyword) {
    if (!this.engine) return {error: "Engine not initialized. Call search.ready() before querying for engine results."}
    return this.engine.query(keyword)
  }
}