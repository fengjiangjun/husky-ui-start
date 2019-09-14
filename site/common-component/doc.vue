<template>
  <div class="site-doc">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'site-doc'
}
</script>

<style >
@import "../assets/style/common.less";
.site-doc {
  height: 100%;
  height: 2000px;
  background: #f0f1f2;
  flex: 1;
  margin-left: 210px;
  position: relative;
  padding: 0 0 75px;

  & .card {
    margin-bottom: 24px;
    padding: 24px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 8px 12px #ebedf0;
  }
  & a {
    color: @docBlue;
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    color: @docBlack;
    font-weight: normal;
    line-height: 1.5;
    &[id] {
      cursor: pointer;
    }
  }
  & h1 {
    margin: 0 0 30px;
    font-size: 30px;
    cursor: default;
  }
  & h2 {
    margin: 45px 0 20px;
    font-size: 22px;
  }
  & h3 {
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 17px;
  }
  & h4 {
    margin: 24px 0 12px;
    font-weight: 500;
    font-size: 15px;
  }
  & h5 {
    margin: 24px 0 12px;
    font-weight: 500;
    font-size: 14px;
  }
  & p {
    color: @docTextColor;
    font-size: 14px;
    line-height: 26px;
  }
  & table {
    width: 100%;
    margin-top: 12px;
    color: @docTextColor;
    font-size: 13px;
    line-height: 1.5;
    border-radius: 6px;
    border-collapse: collapse;
    & th {
      padding: 8px 10px;
      font-weight: 500;
      text-align: left;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }
    & td {
      padding: 8px;
      border-top: 1px solid @docCodeBackgroundColor;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }
    & code {
      padding: 0 8px;
      font-size: 13px;
      font-family: inherit;
      word-break: keep-all;
    }
    & em {
      color: @docFuchsia;
      font-size: 12px;
      font-family: @docCodeFontFamily;
      font-style: normal;
    }
  }
  & ul li,
  & ol li {
    position: relative;
    margin: 5px 0 5px 10px;
    padding-left: 15px;
    color: @docTextColor;
    font-size: 14px;
    line-height: 22px;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      width: 6px;
      height: 6px;
      margin-top: 8px;
      border: 1px solid @docDarkGrey;
      border-radius: 50%;
      content: "";
    }
  }
  & hr {
    margin: 30px 0;
    border: 0 none;
    border-top: 1px solid #eee;
  }
  & p > code,
  & li > code,
  & table code {
    display: inline;
    margin: 2px 3px;
    padding: 2px 5px;
    background-color: #f0f2f5;
    box-shadow: none;
  }
  & section {
    padding: 30px;
    overflow: hidden;
  }
  & blockquote {
    margin: 20px 0 0;
    padding: 16px;
    color: rgba(52, 73, 94, 0.8);
    font-size: 14px;
    background-color: #ecf9ff;
    border-left: 5px solid #50bfff;
    border-radius: 4px;
  }
  & img {
    width: 100%;
    margin: 15px 0;
    box-shadow: 0 2px 4px #ebedf0;
  }
  &--changelog {
    & strong {
      display: block;
      margin: 12px 0;
      font-weight: 500;
      font-size: 15px;
    }
    & h3 {
      font-size: 20px;
      & + p code {
        margin: 0;
      }
      & a {
        color: inherit;
      }
    }
  }
}
</style>