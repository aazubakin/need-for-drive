<template lang="pug">
.breadcrumbs-container
  .breadcrumbs
    .breadcrumbs-items-container
      router-link.breadcrumbs__item(
        :to="item.link" 
        v-for="item in breadcrumbs" 
        :key="item.id"
        :class="{ 'breadcrumbs__item--disabled': !item.activeClass }"
        ) {{ item.title }}
</template>
<script>
export default {
  name: 'BreadCrumbsBlock',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
