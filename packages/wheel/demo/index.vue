<template>
  <hy-wheel
    :width="220"
    :prizeList="prizeList"
    :prizeName="prizeName"
    :rotTimes="totalTimes"
    :onStart="onStart"
    :onFinish="onFinish"
  ></hy-wheel>
</template>
<script>
export default {
  data() {
    return {
      prizeList: [
        {
          name: "H&M100元优惠券",
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/nIQUKeYBbJWliGJVhVmx.png"
        },
        {
          name: "2元话费券",
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/HkrVjjjuxZPUMCUbPazb.png"
        },
        {
          name: "45元飞猪出行券",
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/cDctUxwBLPCszQHRapYV.png"
        },
        {
          name: "H&M10元优惠券",
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/FAmIWZAWpUwlRFKqQDLz.png"
        },
        {
          name: "2元流量券",
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/cuGomeXzMyeeZMjvVjBj.png"
        },
        {
          name: "未中奖",
          img:
            "https://zos.alipayobjects.com/rmsportal/dwhgPyWAcXuvJAWlSSgU.png"
        }
      ],
      prizeName: "2元话费券",
      totalTimes: 2,
      curTimes: 0,
      result: ""
    };
  },
  methods: {
    setData(value) {
      for (var i in value) {
        this[i] = value[i];
      }
    },
    onStart(name, times) {
      // 转盘开始转动
      this.setData({
        result: `第${times}次抽奖中，请稍候...`,
        curTimes: times++
      });
    },
    /*
    @param name 获奖项名字
    @param times 当前转动次数
  */
    onFinish(name, times) {
      // 转盘结束转动
      // alert(name);
      let result =
        name === "未中奖" ? "很遗憾，差点就中奖了" : `恭喜你，获得${name}`;
      prizeName: this.prizeList[Math.floor(Math.random() * 6)].name;
      alert(result);
      /*
      this.setData({
        result:
          name === "未中奖" ? "很遗憾，差点就中奖了" : `恭喜你，获得${name}`,
        prizeName: this.prizeList[Math.floor(Math.random() * 6)].name
      });*/
    }
  }
};
</script>
<style></style>