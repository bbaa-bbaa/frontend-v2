<i18n>
  {
    "zh": {
      "bulletin": {
        "bulletin_0": "1月16日海外版正式上线，为了避免数据混淆，请只上传国服的掉落。",
        "bulletin_1": "专用于海外版的素材统计站是否开放正在计划中。",
        "bulletin_2": "全站翻译已经完成，感谢Syaro和方舟航海図的帮助！"
      }
    },
    "en": {
      "bulletin": {
        "bulletin_0": "Arknights EN server was officially released on 1/16. In order not to mess up the data, please only submit drop data from CN server.",
        "bulletin_1": "We are considering whether to open another website for overseas servers.",
        "bulletin_2": "The translation of the entire website has been finished. Thanks Syaro and 方舟航海図 for their efforts!"
      }
    },
    "ja": {
      "bulletin": {
        "bulletin_0": "1月16日に海外版が正式にリリースされます。データの混雑を避けるために、当サイトでは大陸版のドロップデータのみをアップロードして下さい。",
        "bulletin_1": "海外版のドロップまとめサイトを開設するかは現時点では思案中のみとなっています。",
        "bulletin_2": "Webサイトの翻訳は全て完了しました。Syaroと方舟航海図のご協力に感謝します！"
      }
    },
    "ko": {
      "bulletin": {
        "bulletin_0": "명일방주 해외서버가 1/16일에 오픈하였습니다. 데이터의 혼란을 방지하기 위해, 중국 서버의 보고서만 작성하여 주십시오.",
        "bulletin_1": "저희는 해외서버를 위한 웹 사이트 개설을 검토하고 있습니다.",
        "bulletin_2": "웹 사이트 전체의 번역이 끝났습니다. Syaro님과 方舟航海図님의 노력에 감사드립니다!"
      }
    }
  }
</i18n>

<template>
  <v-card
    elevation="5"
    class="bkop-light pa-6 animation-blink"
  >
    <h1 class="headline font-weight-black">
      {{ $t('menu.about.bulletin') }}
    </h1>
    <v-row>
      <v-col
        cols="12"
        class="subtitle-1 line-height-wide font-weight-bold"
        style="word-break: normal"
      >
        <span>{{ $t('bulletin.bulletin_0') }}</span>
        <br>
        <span>{{ $t('bulletin.bulletin_1') }}</span>
        <br>
        <span>{{ $t('bulletin.bulletin_2') }}</span>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Bulletin'
}
</script>

<style scoped>
.line-height-wide {
  line-height: 1.8;
}

.animation-blink {
  animation-play-state: running;
}

.animation-blink:hover{
  animation-play-state: paused !important;
}

.theme--light .animation-blink {
  background: repeating-linear-gradient(
      -45deg,
      rgba(240, 240, 240, 0.98),
      rgba(240, 240, 240, 0.98) 45px,
      rgba(255, 255, 255, 0.9) 45px,
      rgba(255, 255, 255, 0.9) 90px
  ) !important;
  animation: light-blink 3s infinite alternate ease-in-out;
}

.theme--dark .animation-blink {
  background: repeating-linear-gradient(
      -45deg,
      rgba(61, 61, 61, 0.98),
      rgba(61, 61, 61, 0.98) 45px,
      rgba(46, 46, 46, 0.9) 45px,
      rgba(46, 46, 46, 0.9) 90px
  ) !important;
  animation: dark-blink 3s infinite alternate ease-in-out;
}

@keyframes light-blink {
  from {
    text-shadow: 0 0 0 rgba(0, 0, 0, .2);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .5), 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  }
  to {
    text-shadow: 0 0 5px rgba(0, 0, 0, .2);
    box-shadow: 0 0 0 3px rgba(0, 0, 0, .5), 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  }
}

@keyframes dark-blink {
  from {
    text-shadow: 0 0 0 rgba(255, 255, 255, .3);
    box-shadow: 0 0 0 1px rgba(255, 255, 255, .5), 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  }
  to {
    text-shadow: 0 0 5px rgba(255, 255, 255, .3);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .5), 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  }
}
</style>
