<template>
  <div class="side-nav">
    <div class="mobile-switch-lang">
      <span :class="{ active: $vantLang === 'zh-CN' }"
            @click="switchLang('zh-CN')">
        中文
      </span>
      <span :class="{ active: $vantLang === 'en-US' }"
            @click="switchLang('en-US')">
        EN
      </span>
    </div>

    <h1 class="vant-title">
      <img src="https://img.yzcdn.cn/vant/logo.png">
      <span>Vant</span>
    </h1>
    <h2 class="vant-desc">{{ description }}</h2>
    <template v-for="item in navList">
      <mobile-nav v-for="(group, index) in item.children"
                  :group="group"
                  :base="$vantLang"
                  :key="index" />
    </template>
  </div>
</template>

<script>
import docConfig from '../doc-config';
import MobileNav from './mobile-nav.vue';
import { setLang } from '../utils/lang';
console.log(222)
export default {
  components: {
    MobileNav
  },
  created () {
    console.log('demo-list')
  }, data () {
    console.log(11111)
    return {
      docConfig
    };
  },
  computed: {
    navList () {
      let result = (this.docConfig[this.$vantLang].nav || []).filter(item => item.showInMobile);
      console.log('result', result);
      return result;
    },
    description () {
      return this.$vantLang === 'zh-CN' ? '轻量、可靠的移动端 Vue 组件库' : 'Mobile UI Components built on Vue';
    }
  },
  methods: {
    switchLang (lang) {
      const from = lang === 'zh-CN' ? 'en-US' : 'zh-CN';
      this.$router.push(this.$route.path.replace(from, lang));
      setLang(lang);
    }
  }
};
</script>

<style >
@import "../../src/assets/style/theme.less";
.side-nav {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 46px 20px 20px;
  background-color: @whiteColor;
  & img {
    width: 36px;
  }
  & .vant-title,
  & .vant-desc {
    padding-left: @paddingMd;
    font-weight: normal;
    user-select: none;
  }
}
</style>