export default class DropTypeRecognition {
  constructor(DropType, Items, ImageData) {
    this.OutputDropType = DropType;
    this.DropType = [
      {
        name: "FIXED_DROP",
        color(R, G, B) {
          return R > 200 && Math.abs(G - 200) < 20 && B < 120;
        },
        index: 0,
        have: false
      },
      {
        name: "LUCKY_DROP",
        color(R, G, B) {
          return Math.abs(R - 250) < 5 && Math.abs(G - 100) < 10 && B < 50;
        },
        index: 1,
        have: false
      },
      {
        name: "NORMAL_DROP",
        color(R, G, B) {
          return Math.abs(R - 175) + Math.abs(G - 175) + Math.abs(B - 175) < 20;
        },
        index: 2,
        have: false
      },
      {
        name: "SPECIAL_DROP",
        color(R, G, B) {
          return Math.abs(R - 240) < 5 && Math.abs(G - 100) < 10 && B < 50;
        },
        index: Infinity,
        have: false
      },
      {
        name: "EXTRA_DROP",
        color(R, G, B) {
          return G > R && G > B && B < 150 && R > 200 && G > 200;
        },
        index: 4,
        have: false
      }
    ];
    this.NowIndex = -1;
    this.getDropType(DropType, ImageData);
    this.setItemType(Items);
    delete this.DropType;
  }
  RGBDiff(rgb1, rgb2) {
    return rgb1.map((v, i) => Math.abs(v - rgb2[i])).reduce((a, b) => a + b);
  }
  setItemType(Items) {
    for (let Rect of Items) {
      for (let type of this.OutputDropType) {
        let [left, right] = Rect.direction(type);
        if (!left && !right) {
          Rect.type = type.type;
        }
      }
    }
  }
  CompareType(ImageData, Rect) {
    let Type = this.DropType.filter(a => {
      return a.index > this.NowIndex || (a.index == this.NowIndex && !a.have);
    });
    let XCenter = (Rect.left + Rect.right) >> 1;
    for (let y = Rect.top; y <= Rect.bottom; y++) {
      let rgb = ImageData[y][XCenter];
      for (let type of Type) {
        if (type.color(...rgb)) {
          if(Number.isFinite(type.index)){
            this.NowIndex = type.index;
          }
          type.have = true;
          return type.name;
        }
      }
    }
    return "ALL_DROP";
  }
  getDropType(DropType, ImageData) {
    for (let Type of DropType) {
      Type.type = this.CompareType(ImageData, Type);
    }
  }
}
