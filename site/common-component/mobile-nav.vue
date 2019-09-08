<template>
  <div class="mobile-nav">
    <h5>{{group.name}}</h5>
    <router-link :key="index"
                 :to="'/'+base + item.path"
                 class="mobile-sub-nav"
                 v-for="(item,index) in group.children">
      {{item.name}}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    base: String,
    group: Object
  },
  created () {
  },
  data () {
    console.log(this.$vantLang);
    return {
      active: []
    };
  }
};
</script>

<style>
.mobile-nav {
  &__item {
    margin-bottom: 16px;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 1px 5px #ebedf0;
  }
  &__icon {
    font-size: 24px;
    & img {
      width: 100%;
    }
  }
  & .van-collapse-item__content {
    padding: 0;
  }
  & .van-collapse-item__title {
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    border-radius: 2px;
  }
}
</style>