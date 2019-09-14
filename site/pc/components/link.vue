<template>
  <router-link v-if="item.path"
               :to="'/'+base + item.path">{{itemName}}</router-link>
  <a v-else-if="item.link"
     :href="item.link">{{itemName}}</a>
  <a v-else>{{itemName}}</a>
</template>

<script>
export default {
  name: 'doc-nav-link',
  props: {
    base: String,
    item: Object,
    className: String
  },
  computed: {
    itemName () {
      return this.item.name
    }
  },
  created () {
    console.error('rot', this.base, this.item);
  }
}
</script>