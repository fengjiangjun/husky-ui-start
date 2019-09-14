<!--  -->
<template>
  <div class='header-demo'>
    <hy-header title="固定在顶部"
               fixed></hy-header>
    <div class="husky-demo-bottom">
      <hy-header title="多个按钮">
        <router-link to="/"
                     slot="left">
          <hy-button icon="back"
                     type="primary">返回</hy-button>
        </router-link>
        <hy-button icon="more"
                   slot="right"
                   type="primary"></hy-button>
      </hy-header>
      <hy-header title="标题过长会隐藏哦哈哈哈哈">
        <router-link to="/"
                     slot="left">
          <hy-button icon="back"
                     type="primary">返回</hy-button>
        </router-link>
        <hy-button icon="more"
                   slot="right"
                   type="primary"></hy-button>
      </hy-header>
      <hy-header title="左侧仅文字">
        <router-link to="/"
                     slot="left">
          <hy-button type="primary">返回</hy-button>

        </router-link>
      </hy-header>
      <hy-header title="右侧仅文字">
        <router-link to="/"
                     slot="right">
          <hy-button type="primary">分享</hy-button>

        </router-link>
      </hy-header>
      <hy-header title="仅图标">
        <router-link to="/"
                     slot="left">
          <hy-button type="primary"
                     icon="back"></hy-button>

        </router-link>
        <router-link to="/"
                     slot="right">
          <hy-button type="primary"
                     icon="more"></hy-button>

        </router-link>
      </hy-header>
    </div>
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
.husky-demo-bottom {
  margin-top: 30px;
}
</style>