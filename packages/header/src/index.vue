<!--  -->
<template>
  <div class='husky-header'
       :class="{'is-fixed':fixed}">
    <div class="husky-header-button is-left"
         @click="onLeft">
      <slot name="left"></slot>
    </div>
    <h1 v-text="title"
        class='husky-header-title'></h1>
    <div class="husky-header-button is-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "hy-header",
  data () {
    return {
    };
  },
  props: {
    fixed: Boolean,
    title: String,
    onLeft: Function
  },

  components: {},

  computed: {},

  mounted () { },

  methods: {}
}

</script>
<style lang='css' >
@import "../../../src/assets/style/index.css";
@component-namespace husky {
  @component header {
    -webkit-box-align: center;
    align-items: center;
    background-color: #26a2ff;
    box-sizing: border-box;
    color: #fff;
    display: -webkit-box;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    @when fixed {
      top: 0;
      right: 0;
      left: 0;
      position: fixed;
      z-index: 1;
    }
    @descendent title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: inherit;
      font-weight: 400;
      -webkit-box-flex: 1;
      flex: 1;
    }
    @descendent button {
      -webkit-box-flex: 0.5;
      flex: 0.5;
      @when left {
        text-align: left;
      }
      @when right {
        text-align: right;
      }
    }
  }
}
</style>