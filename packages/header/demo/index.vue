<!--  -->
<template>
  <div class='header-demo'>
    <hy-header title="固定在顶部"></hy-header>
    <hy-header title="多个按钮">
      <router-link to="/"
                   slot="left">
        <hy-button icon="back">返回</hy-button>
        <hy-button @click="handleClose">关闭</hy-button>
      </router-link>
      <hy-button icon="more"
                 slot="right"></hy-button>
    </hy-header>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted () { },

  methods: {}
}

</script>
<style lang='css'>
.header-demo .husky-header {
  margin-bottom: 30px;
}
</style>