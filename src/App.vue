<template lang="pug">
.order-page(v-if="route.name !== 'Home'")
  side-bar
  .pages-container
    .pages-container-wrapper
      header-block
      .page-container
        router-view(v-slot="{ Component }" @locationData="show")
          keep-alive
            component(:is="Component")
    BreadcrumbsBlock(:breadcrumbs="breadCrumbs")
router-view(v-else)
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
import BreadcrumbsBlock from '@/components/BreadcrumbsBlock.vue'
import { useRouter, useRoute } from 'vue-router'
import { watch, ref, reactive } from 'vue'
import Location from '@/views/Location.vue'
import { breadcrumbs } from '@/utils/mocks'

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

    const breadCrumbs = reactive(breadcrumbs)

    const show = (isData) => {
      breadCrumbs.map((elem) => {
        if (elem.name !== 'location') elem.activeClass = isData[elem.name]
      })
    }

    return { route, show, breadCrumbs }
  },
}
</script>
