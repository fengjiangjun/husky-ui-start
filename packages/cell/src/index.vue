<template>
  <a class='husky-cell'
     :href="href">
    <span class="husky-cell-mask"
          v-if="isLink"></span>
    <div class='husky-cell-left'>
      <slot name="left"></slot>
    </div>
    <div class="husky-cell-wrapper">
      <div class="husky-cell-title">
        <slot name="icon">
          <i v-if="icon"
             class="huskyui"
             :class="'huskyui-' + icon"></i>
        </slot>
        <div>
          <span class="husky-cell-text"
                v-text="title"></span>
          <span class="husky-cell-babel"
                v-if="label"
                v-text="label"></span>
        </div>
      </div>
      <div class='husky-cell-value'
           :class="{'is-link':isLink}">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
      <i v-if="isLink"
         class="husky-cell-allow-right"></i>
    </div>
    <div class="husky-cell-right">
      <slot name='right'></slot>
    </div>
  </a>
</template>

<script>
export default {
  name: "hy-cell",
  data () {
    return {
    };
  },
  props: {
    to: [String, Object],
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },

  components: {},

  computed: {
    href () {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;

        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick);
        });
        return resolved.fullPath || resolved.path;
      }
      return this.to;
    }
  },

  mounted () { },

  methods: {
    hhandleClick ($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
}

</script>
<style lang='css' >
@import "../../../src/assets/style/index.css";
@component-namespace husky {
  @component cell {
    background-color: #fff;
    box-sizing: border-box;
    color: inherit;
    min-height: 48px;
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    @descendent title {
      -webkit-box-flex: 1;
      flex: 1;
      display: flex;
      align-items: center;
    }
    @descendent text {
      vertical-align: middle;
    }
    @descendent value {
      color: #888;
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      @when link {
        margin-right: 24px;
      }
    }

    @descendent allow-right::after {
      border: 2px solid #c8c8cd;
      border-bottom-width: 0;
      border-left-width: 0;
      content: " ";
      top: 50%;
      right: 20px;
      position: absolute;
      width: 5px;
      height: 5px;
      -webkit-transform: translateY(-50%) rotate(45deg);
      transform: translateY(-50%) rotate(45deg);
    }
    @descendent wrapper {
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#d9d9d9),
        color-stop(50%, #d9d9d9),
        color-stop(0, transparent)
      );
      background-image: linear-gradient(
        180deg,
        #d9d9d9,
        #d9d9d9 50%,
        transparent 0
      );
      background-size: 120% 1px;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-origin: content-box;
      -webkit-box-align: center;
      align-items: center;
      box-sizing: border-box;
      display: -webkit-box;
      display: flex;
      font-size: 16px;
      line-height: 1;
      min-height: inherit;
      overflow: hidden;
      padding: 0 10px;
      width: 100%;
    }
    @descendent mask {
      &::after {
        background-color: #000;
        content: " ";
        opacity: 0;
        position: absolute 0;
      }
    }
    @descendent left {
      position: absolute;
      height: 100%;
      left: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    @descendent right {
      position: absolute;
      height: 100%;
      right: 0;
      top: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
    @descendent babel {
      color: #888;
      display: block;
      font-size: 12px;
      margin-top: 6px;
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
  @descendent back:before {
    content: "\E600";
  }
  @descendent more:before {
    content: "\E601";
  }
}
</style>