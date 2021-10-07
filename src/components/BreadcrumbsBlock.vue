<template lang="pug">
.breadcrumbs-container
  .breadcrumbs
    .breadcrumbs-items-container
      router-link.breadcrumbs__item(:to="item.link" v-for="item in breadcrumbs" :key="item.id") {{ item.title }}
</template>
<script>
import { breadcrumbs } from '@/utils/mocks'
export default {
  name: 'BreadCrumbsBlock',
  setup() {
    return {
      breadcrumbs,
    }
  },
}
</script>
