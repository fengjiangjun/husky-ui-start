<template>
  <div class='site-wrapper'>
    <site-header></site-header>
    <div class='content'>

      <site-nav :navConfig="nav"></site-nav>
      <site-doc>
        <router-view></router-view>
      </site-doc>

      <site-demo :src="url"></site-demo>
    </div>
  </div>
</template>
<script>
import docConfig from '../doc-config'
export default {
  data () {
    return {
      nav: docConfig[this.$vantLang].nav,
      url: window.location.protocol + '//' + window.location.host + '/mobile.html#/button'
    }
  }
}
</script>
<style>
.site-wrapper {
  height: 100%;
}
.content {
  height: 100%;
  display: flex;
}
</style>