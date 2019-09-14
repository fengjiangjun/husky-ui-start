<!--  -->
<template>
  <div class="husky-search">
    <div class="husky-searchbar">
      <div class="husky-searchbar-inner">
        <i class='huskyui huskyui-search'></i>
        <input :placeholder="placeholder"
               class="husky-searchbar-core"
               type="search"
               @click="visible = true"
               v-model="currentValue">
        </input>
      </div>
      <a class="husky-searchbar-cancel"
         v-text="cancel"
         @click="visible = false,currentValue = ''"
         v-show="visible"></a>
    </div>
    <div class='husky-search-list'
         v-show="show || currentValue">
      <div class="husky-search-list-warp">
        <slot>
          <hy-cell v-for="(item,index) in result"
                   :key="index"
                   :title="item"></hy-cell>
        </slot>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'hy-search',
  data () {
    return {
      visible: false,
      currentValue: this.value,
    };
  },

  props: {
    placeholder: {
      default: '搜索'
    },
    cancel: {
      default: '取消'
    },
    value: String,
    show: Boolean,
    result: Array,

  },
  watch: {
    currentValue (val) {
      this.$emit('input', val);
    },
    value (val) {
      this.currentValue = val;
    }
  },
  components: {},

  computed: {},

  mounted () { },

  methods: {
  }
}

</script>
<style lang='css' >
@import "../../../src/assets/style/index.css";

@component-namespace husky {
  @component search {
    height: 100%;
    height: 100vh;
    overflow: hidden;
  }
  @component searchbar {
    position: relative;
    background-color: #d9d9d9;
    box-sizing: border-box;
    padding: 8px 10px;
    z-index: 1;
    align-items: center;
    display: flex;

    @descendent inner {
      background-color: #fff;
      border-radius: 2px;
      -webkit-box-flex: 1;
      flex: 1;
      height: 28px;
      padding: 4px 6px;
      align-items: center;
      display: flex;
    }
    @descendent core {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      outline: 0;
    }
    @descendent cancel {
      color: #26a2ff;
      margin-left: 10px;
      text-decoration: none;
    }
    @decsendent list {
      overflow: auto;
      padding-top: 44px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: absolute;
    }
  }
}
@component huskyui {
  font-family: huskyui !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  @descendent search {
    font-size: 12px;
    color: #d9d9d9;
  }

  @descendent search:before {
    content: "\E604";
  }
}
</style>