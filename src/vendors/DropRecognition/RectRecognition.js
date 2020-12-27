import ConnectedAreaRecognition from "./ConnectedAreaRecognition";
export default class RectRecognition {
  constructor(ImageData) {
    let height = ImageData.length;
    let width = ImageData[0].length;
    this.ImageData = ImageData;
    this.Node = new Set();
    /* 粗检测关卡掉落信息区域 */
    let YAxis = Array(height).fill(0);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        YAxis[y] += ImageData[y][x][0] + ImageData[y][x][1] + ImageData[y][x][2];
      }
      YAxis[y] /= 3;
    }
    let DataAreaSpilt = -1;
    for (let y = 1; y < height; y++) {
      if ((YAxis[y - 1] - YAxis[y])/width > 11.4) {
        let cancel = false;
        for (let x = 0; x < width; x++) {
          if (ImageData[y][x].reduce((a, b) => a + b) / 3 > 100) {
            cancel = true;
            break;
          }
        }
        if (cancel) continue;
        DataAreaSpilt = y;
        break;
      }
    }
    this.DataAreaSpilt = DataAreaSpilt;
    let BinarizationMatrix = this.Binarization(width, height, ImageData);
    let ConnectedArea = new ConnectedAreaRecognition(BinarizationMatrix, this.Node);
    let mergedRects = this.AutomergeRect(
      ConnectedArea.GetAllConnectedArea(Result => {
        Result.update({
          top: Result.top + DataAreaSpilt,
          bottom: Result.bottom + DataAreaSpilt
        });
        if (Result.point > 100) {
          delete Result.point;
          return Result;
        }
      })
    );
    this.Bound(mergedRects);
    this.GetDropType(mergedRects.Right, ImageData);
    this.mergedRects = mergedRects;
    delete this.DataAreaSpilt;
    delete this.Node;
    delete this.ImageData;
  }
  // 识别边界
  Bound(Rects) {
    this.Stage = Rects.Stage;
    this.Items = [];
    for (let Rect of Rects.Right) {
      if (Math.abs(Rect.height / Rect.width - 1) < 0.2 && Rect.height > 50 && Rect.width > 50) {
        this.Items.push(Rect);
      }
    }
    this.Items.sort((a, b) => a.left - b.left);
  }
  GetDropType(Rects) {
    let top = this.Items.reduce((a, b) => a + b.bottom, 0) / this.Items.length;
    let DropType = [];
    for (let Rect of Rects) {
      if (Rect.top > top && Rect.width / Rect.height > 3) {
        DropType.push({
          left: Rect.left,
          right: Rect.right,
          top:Rect.top,
          bottom:Rect.bottom
        });
      }
    }
    this.DropType=DropType.sort((a,b)=>a.left - b.left)
  }
  Binarization(width, height, ImageData) {
    let Matrix = [];
    for (let y = this.DataAreaSpilt, ry = 0; y < height; y++) {
      Matrix.push([]);
      for (let x = 0; x < width; x++) {
        Matrix[ry][x] = (ImageData[y][x][0] + ImageData[y][x][1] + ImageData[y][x][2]) / 3 < 75 ? false : true;
        if (Matrix[ry][x]) {
          this.Node.add(x * 10000 + ry);
        }
      }
      ry++;
    }
    return Matrix;
  }
  sortRect(Rect1, Rect2) {
    let y = Rect1.top - Rect2.top,
      x = Rect1.left - Rect2.left;
    if (y == 0) {
      return x;
    } else {
      return y;
    }
  }
  /**
   * 合并边界距离在一定范围内的连通区
   * @param {*} Rects
   */
  AutomergeRect(Rects) {
    // 搜索出中间的竖线 以它为参考
    let MiddleLine = { top: 1, bottom: 0 };
    for (let i = 0; i < Rects.length; i++) {
      if (Rects[i].bottom - Rects[i].top > MiddleLine.bottom - MiddleLine.top) {
        MiddleLine = Rects[i];
      }
    }
    let MiddleX = (MiddleLine.right + MiddleLine.left) / 2;
    let LeftRect = [],
      RightRect = [];
    for (let Rect of Rects) {
      if (Rect.right < MiddleX) {
        if (this.ISChar(Rect)) {
          LeftRect.push(Rect);
        }
      }

      if (Rect.left > MiddleX) {
        RightRect.push(Rect);
      }
    }
    LeftRect.sort(this.sortRect);
    let StageRect = LeftRect.shift();
    for (let Rect of LeftRect) {
      let [left, right, top, bottom] = StageRect.direction(Rect);
      if ((right || left) && !top && !bottom) {
        StageRect.merge(Rect);
      } else {
        break;
      }
    }
    let Merge = (Rects, q) => {
      for (let i = 0; i < Rects.length; i++) {
        for (let j = i + 1; j < Rects.length; j++) {
          if (Rects[i].distance(Rects[j]) < q) {
            Rects[i].merge(Rects[j]);
            delete Rects.splice(j, 1);
            i--;
            break;
          }
        }
      }
      return Rects;
    };
    return {
      Stage: StageRect,
      Right: Merge(RightRect, 10),
      Middle: MiddleLine
    };
  }
  ISChar(Rect) {
    let C = 0;
    for (let y = 0; y < Rect.height; y++) {
      for (let x = 0; x < Rect.width; x++) {
        let [R, G, B] = this.ImageData[y + Rect.top][x + Rect.left];
        let A = 255;
        let D = (Math.abs(R - A) + Math.abs(G - A) + Math.abs(B - A)) / 3;
        if (D < 30) {
          C++;
        }
      }
    }
    return C / (Rect.width * Rect.height) > 0.1;
  }
}
