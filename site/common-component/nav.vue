<template>
  <div class="site-nav"
       :style="style">
    <div v-for="item in navConfig"
         class="item">
      <Link :item="item">
      </Link>
      <div>
        <div class="sub-item"
             v-for="subItem in item.children">
          <Link :item="subItem"
                v-if="subItem.name!=''">
          </Link>
          <div v-if="subItem.children && subItem.children.length > 0">
            <div class="sub-sub-item"
                 v-for="subSubItem in subItem.children">
              <Link :item="subSubItem">{{subSubItem.name}}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Link from './link.vue';
export default {
  name: 'site-nav',
  data () {
    return {
      top: 60
    }
  },
  props: {
    navConfig: Array
  },
  created () {
    window.addEventListener('scroll', this.onScroll);
    console.log('nav', this.navConfig);
  },
  computed: {
    style () {
      return 'top:' + this.top + 'px'
    }
  },
  components: {
    Link
  },
  methods: {
    onScroll (e) {
      const { pageYOffset } = window;
      this.top = Math.max(0, 60 - pageYOffset);
    }
  }
}
</script>

<style>
@import "../assets/style/theme.less";
.site-nav {
  width: 210px;
  position: fixed;
  top: 60px;
  bottom: 0;
  background: #fafafa;
  overflow-y: scroll;
  padding-top: 25px;
  padding-bottom: 75px;
  & a {
    text-decoration: none;
    display: block;
    margin: 0;
    padding: 10px 10px 10px 30px;
    color: #455a64;
    font-size: 16px;
    line-height: 24px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    color: @mainColor;
  }
  & .item > a {
    font-weight: bold;
  }
  & .sub-item > a {
    font-size: 13px;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(244, 67, 54, 0.3);
  }
}
</style>