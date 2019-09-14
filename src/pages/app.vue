<template>
  <div class='site-wrapper'>
    <site-header></site-header>
    <div class='content'>

      <site-nav :navConfig="nav"></site-nav>
      <site-doc>

        <router-view></router-view>
      </site-doc>

      <site-demo src="https://m.baidu.com"></site-demo>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nav: [{
        name: '主题',
        children: [{          name: '', path: '/intro', children: [{
            name: '介绍', path: '/intro'
          },
          {
            name: '快速上手', path: '/intro'
          }, {
            name: '更新日志', path: '/intro'
          }]        }]
      }, {
        name: '组件',
        children: [
          {
            name: '基础组件',
            children: [
              {
                name: 'Button 按钮',
                path: '/intro'
              }, {
                name: 'Cell 单元格',
                path: '/intro'
              }
            ]
          }, {
            name: '表单组件',
            children: [
              {
                name: 'Checkbox 复选框',
                path: '/intro'
              },
              {
                name: 'Field 输入框',
                path: '/intro'
              }
            ]
          }
        ]
      }]
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