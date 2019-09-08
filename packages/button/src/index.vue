<template>
  <button :type="nativeType"
          class="husky-button"
          :class="['husky-button--' + type, 'husky-button--' + size, {
      'is-disabled': disabled,
      'is-plain': plain
    }]"
          @click="handleClick"
          :disabled="disabled">
    <span class="husky-button-icon"
          v-if="icon || $slots.icon">
      <slot name="icon">
        <i v-if="icon"
           class="huskyui"
           :class="'huskyui-' + icon"></i>
      </slot>
    </span>
    <label class="husky-button-text">
      <slot></slot>
    </label>
  </button>
</template>

<script>
if (process.env.NODE_ENV === 'component') {
  require('husky-ui/packages/font/style.css');
}
/**
 * mt-header
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .huskyui-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <mt-button size="large" icon="back" type="primary">按钮</mt-button>
 */
export default {
  name: 'hy-button',
  methods: {
    handleClick (evt) {
      this.$emit('click', evt);
    }
  },
  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1;
      }
    }
  }
};
</script>

<style lang="css">
@import "../../../src/assets/style/theme.less";
@component-namespace husky {
  @component button {
    appearance: none;
    border-radius: 4px;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    display: block;
    font-size: 18px;
    height: 41px;
    outline: 0;
    overflow: hidden;
    position: relative;
    text-align: center;
    &::after {
      background-color: #000;
      content: " ";
      opacity: 0;
      position: absolute 0 0 0 0;
    }
    &:not(.is-disabled):active::after {
      opacity: 0.4;
    }
    @descendent icon {
      vertical-align: middle;
      display: inline-block;
    }
    @modifier default {
      color: #656b79;
      background-color: #eee;
      @when plain {
        border: 1px solid #5a5a5a;
        background-color: transparent;
        box-shadow: none;
        color: #5a5a5a;
      }
    }
    @modifier primary {
      color: #fff;
      background-color: @buttonPrimaryColor;
      @when plain {
        border: 1px solid @buttonPrimaryColor;
        background-color: transparent;
        color: @buttonPrimaryColor;
      }
    }
    @modifier danger {
      color: #fff;
      background-color: @buttonDangerColor;
      @when plain {
        border: 1px solid @buttonDangerColor;
        background-color: transparent;
        color: @buttonDangerColor;
      }
    }
    @modifier large {
      display: block;
      width: 100%;
    }
    @modifier normal {
      display: inline-block;
      padding: 0 12px;
    }
    @modifier small {
      display: inline-block;
      font-size: 14px;
      padding: 0 12px;
      height: 33px;
    }
    @when disabled {
      opacity: 0.6;
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