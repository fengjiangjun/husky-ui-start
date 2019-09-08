<template>
  <router-link v-if="item.path"
               :to="item.path">{{itemName}}</router-link>
  <a v-else-if="item.link"
     :href="item.link">{{itemName}}</a>
  <a v-else>{{itemName}}</a>
</template>

<script>
export default {
  name: 'doc-nav-link',
  props: {
    root: String,
    item: Object,
    className: String
  },
  computed: {
    itemName () {
      return this.item.name
    }
  }
}
</script>