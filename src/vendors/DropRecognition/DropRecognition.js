import RectRecognition from "./RectRecognition";
import StageRecognition from "./StageRecognition";
import ItemRecognition from "./ItemRecognition";
import RecognitionData from "./Data/RecognitionData";
import TypeGroup from "./TypeGroup";
//import DropTypeRecognition from "./DropTypeRecognition";
export default class DropRecognition {
  constructor(img) {
    this.Image = img;
    this.Canvas = document.createElement("canvas");
    //document.body.appendChild(this.Canvas);
    this.Canvas.width = img.width;
    this.Canvas.height = img.height;
    this.ctx = this.Canvas.getContext("2d");
    this.ctx.drawImage(img, 0, 0);
    this.ctx.fillStyle = "#00ff00";
    this.ctx.strokeStyle = "#00ff00";
    this.rawImageData = this.ctx.getImageData(0, 0, img.width, img.height);
    this.matrixImageData = [[]];
    this.BoundData = {};
    this.Stage = {};
    this.Items = [];
    this.TypeGroups = [];
    for (let index = 0, x = 0, y = 0; index < this.rawImageData.data.length; index += 4) {
      this.matrixImageData[y][x] = [
        this.rawImageData.data[index],
        this.rawImageData.data[index + 1],
        this.rawImageData.data[index + 2]
      ];
      if (++x == img.width) {
        x = 0;
        if (++y != img.height) this.matrixImageData.push([]);
      }
    }
    this.RectRecognition();
    if (this.Debug) {
      for (let Rect of this.BoundData.mergedRects.Right) {
        this.ctx.strokeRect(Rect.left, Rect.top, Rect.width, Rect.height);
      }
      this.ctx.strokeStyle = "#ff0000";
      this.ctx.strokeRect(
        this.BoundData.Stage.left,
        this.BoundData.Stage.top,
        this.BoundData.Stage.width,
        this.BoundData.Stage.height
      );
    }
    this.detectStage();
    //this.detectFurniture();
    this.detectItem();
    console.log(this);
    delete this.ctx;
    delete this.Canvas;
    delete this.matrixImageData;
    delete this.rawImageData;
    delete this.Image;
  }
  /**
   * 识别图像边界
   */
  RectRecognition() {
    this.BoundData = new RectRecognition(this.matrixImageData);
  }
  detectFurniture() {
    let DetectType = ["LUCKY_DROP", "SPECIAL_DROP", "ALL_DROP"];
    if (this.BoundData.Items.length < 3) return;
    for (let Rect of this.BoundData.Items) {
      if (DetectType.includes(Rect.type)) {
        let OtherItems = this.BoundData.Items.filter(a => a != Rect);
        let AreaDiff =
          OtherItems.reduce((a, OtherItem) => {
            return a + Math.abs(OtherItem.area - Rect.area);
          }, 0) / OtherItems.length;
        if (AreaDiff > 1000) {
          Rect.type = "LUCKY_DROP";
          Rect.AreaDiff = AreaDiff;
        } else if (Rect.type == "LUCKY_DROP") {
          Rect.type == "SPECIAL_DROP";
        }
      }
    }
  }
  detectItem() {
    for (let Bound of this.BoundData.DropType) {
      this.TypeGroups.push(new TypeGroup(Bound));
    }
    let DropList = [];
    if (DropRecognition.Stage[this.Stage.Code] && DropRecognition.Stage[this.Stage.Code].dropInfos) {
      for (let Drop of DropRecognition.Stage[this.Stage.Code].dropInfos) {
        if (Drop.itemId && Drop.dropType != "furni") {
          let FindItem=DropList.find((a)=>a.ItemId==Drop.itemId);
          if(FindItem) {
            FindItem.Types.push(Drop.dropType);
            FindItem.Range[Drop.dropType]=[Drop.lower,Drop.upper];
          } else {
            let idx=DropList.push({ItemId:Drop.itemId,Range:{},Types:[Drop.dropType]})-1;
            DropList[idx].Range[Drop.dropType]=[Drop.lower,Drop.upper];
          }
        }
      }
    }
    // 补充声望/龙门币
    DropList.push({ItemId:4001,Range:{},Types:["FIXED_DROP"]})
    DropList.push({ItemId:"EXP_PLAYER",Range:{},Types:["FIXED_DROP"]})
    console.log(DropList)
    for (let Rect of this.BoundData.Items) {
      let NowItem = new ItemRecognition(this.getImageMatrix(Rect.left, Rect.top, Rect.right, Rect.bottom), Rect);
      NowItem.Type = this.TypeGroups.find(a => a.inGroup(Rect));
      let a=NowItem.CompareItem(DropList);
      console.log(a)
      NowItem.Type.Items.push(NowItem);
      this.Items.push(NowItem);
    }
  }
  getImageMatrix(x1, y1, x2, y2) {
    let Matrix = [];
    for (let y = y1; y <= y2; y++) {
      let ry = Matrix.push([]) - 1;
      for (let x = x1, rx = 0; x <= x2; x++, rx++) {
        Matrix[ry][rx] = [].concat(this.matrixImageData[y][x]);
      }
    }
    return Matrix;
  }
  detectStage() {
    [this.Stage.Code, this.Stage.Confidence] = StageRecognition(
      this.getImageMatrix(
        this.BoundData.Stage.left,
        this.BoundData.Stage.top,
        this.BoundData.Stage.right,
        this.BoundData.Stage.bottom
      )
    );
  }
  static CheckDataComplete() {
    if (ItemRecognition.ItemSourceHash && DropRecognition.Stage) {
      for (let v of Object.values(DropRecognition.Stage)) {
        if (v.dropInfos) {
          for (let i of v.dropInfos) {
            if (i.ItemId && !ItemRecognition.ItemSourceHash[i.ItemId]) {
              throw new Error("Data Error");
            }
          }
        }
      }
    }
  }
  static init(dataName, Data) {
    switch (dataName) {
      case "Stage":
        DropRecognition.Stage = Data;
        DropRecognition.CheckDataComplete();
        break;
      case "ItemHashs":
        var Reader = new FileReader();
        Reader.onload = () => {
          Data = RecognitionData.Decode(new Uint8Array(Reader.result));
          DropRecognition.ActivityItem = [];
          var newdata = {};
          for (let [k, v] of Object.entries(Data)) {
            if (/(ACTIVITY|VOUCHER_MGACHA)/.test(v.type)) DropRecognition.ActivityItem.push(k);
            newdata[k] = v.hash;
          }

          ItemRecognition.init(newdata);
          DropRecognition.CheckDataComplete();
        };
        Reader.readAsArrayBuffer(Data);

        break;
    }
  }
}
