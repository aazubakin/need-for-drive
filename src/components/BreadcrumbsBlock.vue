<template lang="pug">
.breadcrumbs-container
  .breadcrumbs
    .breadcrumbs-items-container
      router-link.breadcrumbs__item(
        :to="item.link" 
        v-for="item in breadcrumbs" 
        :key="item.id"
        @click="activeTab(item)"
        :class="getClassObject(item)"
        ) {{ item.title }}
</template>
<script>
import { ref, reactive, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  name: 'BreadCrumbsBlock',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const route = useRoute()

    const routeObj = props.breadcrumbs.reduce(
      (prev, cur) => ({ ...prev, [cur.name]: cur }),
      {}
    )
    const activeId = ref(1)
    const activeTab = (item) => {
      activeId.value = item.id
    }

    const getClassObject = (item) => {
      return {
        'breadcrumbs__item--disabled': !item.openLink,
        'breadcrumbs__item-active': activeId.value === item.id,
        'breadcrumbs__item-previous': activeId.value > item.id,
      }
    }

    // watch(
    //   () => route.name,
    //   () => {
    //     activeId.value = routeObj[route.name.toLowerCase()].id
    //   }
    // )

    return {
      activeId,
      activeTab,
      getClassObject,
    }
  },
}
</script>
