
<template>
  <div :class="['site-demo', { 'site-demo-fixed': isFixed }]">
    <iframe ref="iframe"
            :src="src"
            :style="style"
            frameborder="0" />
  </div>
</template>
<script>
export default {
  name: 'site-demo',
  props: {
    src: String
  },
  data () {
    return {
      top: window.scrollY,
      windowHeight: window.innerHeight
    }
  },
  computed: {
    isFixed () {
      return this.top > 60;
    },
    style () {
      const height = Math.min(640, this.windowHeight - 90);
      return {
        height: height + 'px'
      };
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.top = window.scrollY;
    });
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  }
}
</script>

<style >
.site-demo {
  width: 360px;
  height: 100%;
  background: #fafafa;
  right: 0;
  &-fixed {
    position: fixed;
    top: 0;
  }
  & iframe {
    width: 100%;
  }
}
</style>