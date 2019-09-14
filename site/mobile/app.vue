<template>
  <div class='husky-app'>
    <hy-header :onLeft="onBack">
      <i slot="left"
         class="huskyui huskyui-back"></i>
    </hy-header>
    <router-view></router-view>
  </div>
</template>

<style>
html,
body {
  background-color: #fafafa;
  -webkit-overflow-scrolling: touch;
  user-select: none;
  margin: 0;
}
a {
  color: inherit;
}
.page-back {
  display: inline-block;
  position: absolute 12px * * 10px;
  width: 40px;
  height: 40px;
  text-align: center;
  & i {
    font-size: 24px;
    line-height: 40px;
  }
}
</style>

<script type="text/babel">
export default {
  computed: {
    visible () {
      return ['/', '/header', '/search'].indexOf(this.$route.path) < 0;
    }
  },
  methods: {
    onBack () {
      history.back();
    }
  }
};
</script>

<style>
.husky-app > .husky-header {
  background-color: #fff !important;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 6px;

  background-color: transparent;
}
:hover::-webkit-scrollbar-thumb {
}

.husky-app .huskyui-back {
  font-size: 24px;
  color: #969799;
  cursor: pointer;
}
</style>