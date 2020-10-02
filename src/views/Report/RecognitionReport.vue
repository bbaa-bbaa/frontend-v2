<template>
  <v-stepper
    v-model="step"
    :alt-labels="!small"
    class="transparent elevation-0 full-width pa-4"
    style="min-height: calc(100vh - 108px)"
  >
    <v-stepper-header
      class="bkop-light elevation-4"
      style="border-radius: 4px"
    >
      <v-stepper-step
        :complete="step > 1"
        step="1"
      >
        {{ $t("report.recognition.step.first") }}
      </v-stepper-step>

      <v-divider />

      <v-stepper-step
        :complete="step > 2"
        step="2"
      >
        {{ $t("report.recognition.step.second") }}
      </v-stepper-step>

      <v-divider />

      <v-stepper-step step="3">
        {{ $t("report.recognition.step.third") }}
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <input
          ref="fileinput"
          type="file"
          multiple
          style="display: none"
          accept="image/png,image/jpeg,image/bmp,image/webp"
          @change="UpdateFile"
          @input="UpdateFile"
        >
        <v-row>
          <v-col>
            <v-alert
              color="orange darken-3"
              border="left"
              class="mx-auto"
              style="width: 80%"
            >
              <ol>
                <li>{{ $t("report.recognition.tip") }}</li>
                <li>{{ $t("report.recognition.tip2") }}</li>
                <li>{{ $t("report.notices.rule_3") }}</li>
                <li>{{ $t("report.notices.rule_4") }}</li>
              </ol>
            </v-alert>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              block
              @click="fileinput.click()"
            >
              {{
                ImageFiles.length == 0
                  ? $t("report.recognition.file")
                  : $t("report.recognition.filechosen", [ImageFiles.length])
              }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              block
              @click="startRecognition"
            >
              {{ $t("report.recognition.start") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-row>
          <v-col>
            <v-progress-linear
              :value="((QueueIndex + 1) / ImageFiles.length) * 100"
              height="20"
            >
              {{ QueueIndex + 1 }} / {{ ImageFiles.length }}
            </v-progress-linear>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-alert type="info">
              {{ $t("report.recognition.wip") }}
            </v-alert>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-row
          align="center"
          justify="center"
          no-gutters
          class="my-2"
        >
          <v-col
            cols="12"
            sm="4"
            md="4"
            lg="4"
            xl="4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-chess-rook</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="monospace">
                  {{ allTime }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t("report.recognition.result.stagetime") }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col
            cols="12"
            sm="4"
            md="4"
            lg="4"
            xl="4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-treasure-chest</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="monospace">
                  {{ allDropsCount }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t("report.recognition.result.drops") }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col
            cols="12"
            sm="4"
            md="4"
            lg="4"
            xl="4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-brain</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="monospace">
                  {{ allSanity }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t("report.recognition.result.sanity") }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <v-row
          align="start"
          justify="start"
        >
          <v-col
            v-for="([StageCode,Stage],index) in StageCombineData"
            :key="StageCode"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            class="align-self-stretch"
          >
            <v-card class="card-item">
              <v-card-text>
                <div class="title d-flex justify-center">
                  <span
                    v-ripple
                    class="font-weight-bold headline d-flex align-center cursor-pointer card-item-title__clickable clickable-hover"
                    style="margin-left: -8px; margin-top: -8px; padding: 4px 8px; border-radius: 4px;"
                  >
                    {{ StageCode }}
                    <v-icon
                      class="ml-2"
                      small
                    >
                      mdi-link
                    </v-icon>
                  </span>
                  <v-spacer />
                  <small style="margin-top: -4px">#{{ index + 1 }}</small>
                </div>
                <div class="display-1 text-center monospace font-weight-bold my-2">
                  {{ Stage.Time }} <small class="title">{{ $t('planner.calculation.times') }}</small>
                </div>
                <div class="d-flex flex-wrap justify-start">
                  <div
                    v-for="[ItemId,Count] in Object.entries(Stage.Items)"
                    :key="ItemId"
                    class="d-inline-flex mx-2 my-1 cursor-pointer"
                  >
                    <v-badge
                      bottom
                      overlap
                      bordered
                      label
                      color="indigo"
                      :offset-x="24"
                      :offset-y="20"
                      :content="`×${Count}`"
                    >
                      <Item
                        :item="getItem(ItemId)"
                      />
                    </v-badge>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Item from "@/components/global/Item";
import CDN from "@/mixins/CDN";
import Theme from "@/mixins/Theme";
import get from "@/utils/getters";
import axios from "axios";
import { DropRecognition, FontLoaded } from "@/vendors/DropRecognition";
export default {
  name: "RecognitionReport",
  components: { Item },
  mixins: [Theme, CDN],
  data: () => ({
    step: 0,
    OriginalRecognitionResult: [],
    QueueIndex: 0,
    Stages: [],
    ImageFiles: [],
    ImageURI: [],
  }),
  computed: {
    fileinput() {
      return this.$refs.fileinput;
    },
    small() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    TrustedResult() {
      return this.OriginalRecognitionResult.filter((a) => a.trust);
    },
    ResultByStage() {
      let Result = {};
      for (let Stage of this.OriginalRecognitionResult) {
        if (!Result[Stage.Stage.Code]) {
          Result[Stage.Stage.Code] = [];
        }
        Result[Stage.Stage.Code].push(Stage);
      }
      return Result;
    },
    StageCombineData() {
      let Result = {};
      for (let [StageCode, Data] of Object.entries(this.ResultByStage)) {
        if (!Result[StageCode]) {
          Result[StageCode] = {
            Items: {},
            Time: 0,
          };
        }
        for (let Stage of Data) {
          Result[StageCode].Time++;
          for (let Item of Stage.Items) {
            if (Item.ItemId && Item.Count) {
              if (!Result[StageCode].Items[Item.ItemId]) {
                Result[StageCode].Items[Item.ItemId] = 0;
              }
              Result[StageCode].Items[Item.ItemId] += Item.Count;
            }
          }
        }
      }
      return Object.entries(Result);
    },
    allTime(){
      return this.TrustedResult.length;
    },
    allDropsCount(){
      return this.TrustedResult.reduce((prev,now)=>{
        return prev+now.Items.reduce((p,n)=>{
          if(n.Count){
            return p+n.Count;
          }
          return p;
        },0)
      },0);
    },
    allSanity(){
      return this.TrustedResult.reduce((prev,now)=>{
        return prev+this.Stages[now.Stage.Code].apCost;
      },0)
    }
  },
  mounted() {
    // Load data
    let stages = {};
    let stageArray = get.stages.all();
    for (let stage of stageArray) {
      stages[stage.code] = stage;
    }
    DropRecognition.init("Stage", stages);
    this.Stages = stages;
    FontLoaded.then(() => {
      axios.get("/Items.dHash", { responseType: "blob" }).then((Hashs) => {
        DropRecognition.init("ItemHashs", Hashs.data);
        this.step = 1;
      });
    });
  },
  methods: {
    getItem(ItemId){
      return get.items.byItemId(ItemId, false, false) || {}
    },
    UpdateFile() {
      for (let URI of this.ImageURI) {
        URL.revokeObjectURL(URI);
      }
      this.ImageURI = [];
      this.ImageFiles = [...this.$refs.fileinput.files].filter((a) =>
        /image\/.*/.test(a.type)
      );
      for (let [k, Img] of this.ImageFiles.entries()) {
        this.ImageURI[k] = URL.createObjectURL(Img);
      }
    },
    startRecognition() {
      if (this.ImageFiles.length == 0) return;
      this.step = 2;
      this.RecognitionOne();
    },
    IsTrust(RecognitionResult) {
      if (RecognitionResult.Stage.Confidence < 0.75) return false;
      if (
        RecognitionResult.Items.some((Item) => {
          if (!Item.Confidence) return false;
          if (Item.Confidence.ItemId && Item.Confidence.ItemId < 0.65)
            return true;
          if (
            Item.Confidence.Count && !isNaN(Item.Confidence.Count) &&
            Item.Confidence.Count.some((NumConf) => NumConf < 0.6)
          )
            return true;
          return false;
        })
      )
        return false;
      return true;
    },
    RecognitionOne() {
      this.$nextTick(function () {
        let NowIndex = this.QueueIndex;
        let NowImage = new Image();
        NowImage.onload = function () {
          try {
            let RecognitionInterface = new DropRecognition(NowImage);
            RecognitionInterface.idx = NowIndex;
            this.OriginalRecognitionResult.push(RecognitionInterface);
            RecognitionInterface.trust = this.IsTrust(
              this.OriginalRecognitionResult[NowIndex]
            );
            if (++NowIndex < this.ImageURI.length) {
              this.RecognitionOne(this.QueueIndex++);
            } else {
              this.step = 3;
            }
          } catch (e) {
            this.OriginalRecognitionResult[NowIndex] = {
              error: e,
              trust: false,
              idx: NowIndex,
            };
            throw e;
          }
        }.bind(this);
        NowImage.src = this.ImageURI[NowIndex];
      });
    },
  },
};
</script>

<style scoped>
.theme--light .zoneTitle {
  color: #fff;
}

.v-table {
  background: transparent !important;
}

.round {
  border-radius: 4px;
}
.image-box {
  margin: 0 auto;
  max-width: 100%;
  overflow-x: auto;
  text-align: center;
}
@media screen and (max-width: 699px) {
  .csc {
    max-height: 500px;
  }
}
@media screen and (min-width: 700px) {
  .csc {
    width: 100%;
  }
}
 .card-item {
    border: 2px solid #4350b0;
    height: 100%
  }
  .card-item-title__clickable {
    margin-left: -8px;
    margin-top: -8px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: initial;
    flex: inherit;
    position: relative;
  }
</style>
