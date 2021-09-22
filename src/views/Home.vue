<template lang="pug">
.home
  side-bar
  .main-container
    header-block
    home-content
    footer-block
  slider-block
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
import FooterBlock from '@/components/FooterBlock.vue'
import HomeContent from '@/components/HomeContent.vue'
import SliderBlock from '@/components/SliderBlock.vue'

export default {
  name: 'Home',
  components: {
    SideBar,
    HeaderBlock,
    FooterBlock,
    HomeContent,
    SliderBlock,
  },
}
</script>
