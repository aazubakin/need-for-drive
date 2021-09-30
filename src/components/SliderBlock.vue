<template lang="pug">
swiper.swiper(
  :navigation="true"
  slides-per-view="1"
  :pagination="{ clickable: true }"
  )
  swiper-slide.swiper-slide(
    v-for="slide in slides"
    :key="slide.id"
  )
    .swiper-slide__background
    img.swiper-slide__img(:src="slide.img")
    .swiper-slide__content
      h2.swiper-slide__content--title {{ slide.title }}
      p.swiper-slide__content--paragraph {{ slide.text }}
      a.btn(href="#" :class="slide.btnClass") Подробнее
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
// install Swiper modules
SwiperCore.use([Navigation, Pagination])
import { slides } from '@/utils/mocks'
export default {
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      slides,
    }
  },
}
</script>
