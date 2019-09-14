<template>
  <div class="wheel-container" :style="{width:width +'px',height:width+'px'}">
    <div
      class="wheel-list"
      :style="{background: 'url('+bgImg+') 0% 0% / 100% 100% no-repeat',transform:'rotate('+ (degValue || initDeg) +'deg)'}"
    >
      <div v-for="(item,index) in prizeList" :key="index">
        <div class="wheel-item">
          <div
            class="wheel-img"
            :style="{width:prizeWidth,paddingTop:prizePaddingTop,transform:'rotate('+(index+0.5)/6+'turn)',transformOrigin:itemTransformOrigin}"
          >
            <img :src="item.img" style="width:100%;height:auto" />
          </div>
        </div>
      </div>
    </div>
    <div class="wheel-btn">
      <img :src="btnImg" class="img" @click="start" />
    </div>
  </div>
</template>

<script>
export default {
  name: "hy-wheel",
  data() {
    return {
      degValue: 0, // 旋转角度
      prizeWidth: 0, // 奖项背景图宽度计算值
      prizePaddingTop: 0, // 奖项上边距计算值
      itemTransformOrigin: "" // 奖项旋转原点计算值
    };
  },
  props: {
    width: {
      type: Number,
      default: 300
    }, // 画布大小，默认单位 px
    initDeg: {
      type: Number,
      default: 0
    }, // 初始旋转角度
    rotTimes: {
      type: Number,
      default: 1
    }, // 抽奖机会次数
    prizeList: {
      type: Array,
      default: []
    }, // 奖品列表
    prizeName: {
      type: String,
      default: ""
    }, // 获奖项名字
    prizeWidthProp: Number, // 奖项宽度
    prizePaddingTopProp: Number, // 奖项距离圆弧的内边距
    bgImg: {
      type: String,
      default:
        "https://gw.alipayobjects.com/zos/rmsportal/YIunNQVWkFRxUTaUNhOZ.png" // 背景图
    },
    btnImg: {
      type: String,
      default:
        "https://gw.alipayobjects.com/zos/rmsportal/JHenAywYHZTLbbrnkIFN.png" // 按钮图
    },
    onStart: Function, // 开始回调
    onFinish: Function, // 结束回调
    onTimesUp: { type: Function, default: () => {} } // 次数用尽的回调
  },

  mounted() {
    let widthNum = this._getNum(this.width);
    let widthUnit = this._getUnit(this.width);
    let prizeWidth = this.prizeWidthProp;
    let paddingTop = this.prizePaddingTopProp;
    this.setData({
      degValue: this.initDeg,
      itemTransformOrigin: "50% " + 0.5 * widthNum + widthUnit,
      prizeWidth: isNaN(prizeWidth) ? this._calculatePrizeWidth() : prizeWidth,
      prizePaddingTop: isNaN(paddingTop)
        ? this._calculatePrizePaddingTop()
        : paddingTop
    });
    this.count = 6; // 奖品个数
    this.rotNum = 0; // 当前是第几次抽奖
    this.onRunning = false; // 是否正在抽奖
  },
  methods: {
    setData(value) {
      for (var i in value) {
        this[i] = value[i];
      }
    },
    init() {},
    getIndexByName(name) {
      let list = this.prizeList;
      for (let i = 0; i < this.count; i++) {
        if (list[i] && list[i].name === name) return i;
      }
      return -1;
    },
    start(e) {
      if (this.onRunning) return;
      if (this.rotNum >= this.rotTimes) {
        this.onTimesUp();
        return;
      }
      if (!this.prizeName) {
        throw new Error("请传入抽奖结果名称：prizeName");
      }
      let index = this.getIndexByName(this.prizeName);
      if (index === -1) {
        throw new Error(
          "抽奖结果名称与抽奖列表配置项不匹配，未找到名称为" +
            this.prizeName +
            "的奖项"
        );
      }
      this.rotNum += 1;
      this.onRunning = true;
      let degree = (index + (index + 1)) * (360 / (this.count * 2));
      let degValue = 360 * this.count * this.rotNum - degree;
      //this.setData({ degValue: degValue });
      this.degValue = degValue;
      this.onStart(this.prizeName, this.rotNum);
      setTimeout(() => {
        this.done();
      }, 6000);
    },
    done() {
      this.onRunning = false;
      this.onFinish(this.prizeName, this.rotNum);
    },
    _getNum(s) {
      // 获取像素选项数值
      return parseFloat(s);
    },
    _getUnit(s) {
      // 获取像素选项单位
      s += "";
      return (s.match(/[a-z]+$/) || [])[0] || "px";
    },
    _calculatePrizeWidth() {
      // 等边三角形内接正方形边长: (4 - 2 * 根号3) * 边长
      let widthNum = this._getNum(this.width);
      let widthUnit = this._getUnit(this.width);
      return (4 - 2 * Math.sqrt(3)) * 0.5 * widthNum + widthUnit;
    },
    _calculatePrizePaddingTop() {
      // 等边三角形一边的中点离过该边两点的圆弧的距离: 边长 - 边长 * (根号3 / 2)
      let widthNum = this._getNum(this.width);
      let widthUnit = this._getUnit(this.width);
      return 0.5 * widthNum - 0.25 * widthNum * Math.sqrt(3) + widthUnit;
    }
  }
};
</script>

<style>
.wheel-container {
  position: relative;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
}
.wheel-list {
  position: absolute;
  border-radius: 50%;
  width: inherit;
  height: inherit;
  transition: all 6s ease;
  -webkit-transition: all 6s ease;
}

.wheel-item {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.wheel-img {
  position: relative;
  display: block;
  margin: 0 auto;
  text-align: center;
}

.wheel-img img {
  display: block;
  width: 100%;
  height: 100%;
}

.wheel-btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wheel-btn .img {
  width: 30%;
}
</style>