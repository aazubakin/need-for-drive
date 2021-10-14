<template lang="pug">
.breadcrumbs-container
  .breadcrumbs
    .breadcrumbs-items-container
      router-link.breadcrumbs__item(
        :to="item.link" 
        v-for="item in breadcrumbs" 
        :key="item.id"
        @click="activeTab(item.id)"
        :class="getClassObject(item)"
        ) {{ item.title }}
</template>
<script>
import { ref, reactive } from 'vue'
export default {
  name: 'BreadCrumbsBlock',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const activeId = ref(1)
    const activeTab = (id) => {
      activeId.value = id
    }

    const getClassObject = (item) => {
      return {
        'breadcrumbs__item--disabled': !item.openLink,
        'breadcrumbs__item-active': activeId.value === item.id,
        'breadcrumbs__item-previous': activeId.value > item.id,
      }
    }

    return {
      activeId,
      activeTab,
      getClassObject,
    }
  },
}
</script>
