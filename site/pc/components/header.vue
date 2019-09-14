<template>
  <div class="site-header">
    <div class='site-header-left'>
      <div class="site-header-left1">
        <img src="https://img.yzcdn.cn/vant/logo.png"
             class='site-header-logo' />
        <span class='site-header-name'>Husky</span>
      </div>
      <input placeholder='搜索文档...'
             class='site-header-search' />
    </div>
    <div class='site-header-right'>

      <img src='https://b.yzcdn.cn/vant/logo/github.svg'
           class='site-header-img' />
      <div class='site-header-edition'>2.7.1</div>
      <div class='site-header-en'>EN</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'site-header'
}
</script>

<style >
@import "../../../src/assets/style/common.less";
@component-namespace site {
  @component header {
    box-sizing: border-box;
    padding: 0 30px;
    width: 100%;
    height: 60px;
    background: @mainColor;
    display: flex;
    justify-content: space-between;
    color: #f8f8f8;
    @descendent left {
      display: flex;
    }
    @descendent logo {
      width: 26px;
      height: 26px;
      margin-right: 10px;
    }
    @descendent search {
      outline: none;
      border: none;
      background: @mainColor;
      margin-left: 140px;
      width: 200px;
      height: 60px;
      padding: 0;
      &::-webkit-input-placeholder {
        color: #fff;
      }
    }
    @descendent name {
      font-size: 22px;
    }
    @descendent left1 {
      display: flex;
      align-items: center;
    }
    @descendent right {
      display: flex;
      align-items: center;
    }
    @descendent img {
      width: 26px;
      heigth: 26px;
      margin-left: 20px;
    }
    @descendent edition {
      width: 63px;
      height: 26px;
      color: #fff;
      font-size: 14px;
      margin-left: 20px;
      padding-left: 10px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      box-sizing: border-box;
      line-height: 24px;
      text-align: center;
    }
    @descendent en {
      width: 40px;
      height: 26px;
      line-height: 24px;
      margin-left: 20px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      box-sizing: border-box;
      padding: 0 10px;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>