<template lang="pug">
.order-page(v-if="route.name !== 'Home'")
  side-bar
  .pages-container
    .pages-container-wrapper
      header-block
      .page-container
        router-view(v-slot="{ Component }")
          keep-alive
            component(:is="Component")
    BreadcrumbsBlock
router-view(v-else)
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
import BreadcrumbsBlock from '@/components/BreadcrumbsBlock.vue'
import { useRouter, useRoute } from 'vue-router'
import { watch } from 'vue'
import Location from '@/views/Location.vue'

export default {
  name: 'Layout',
  components: {
    Location,
    SideBar,
    HeaderBlock,
    BreadcrumbsBlock,
  },
  setup() {
    const route = useRoute()

    watch(
      () => route.name,
      () => {
        // Do something here...
      },
      { immediate: true }
    )

    return { route }
  },
}
</script>
