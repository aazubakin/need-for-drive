<template lang="pug">
swiper.swiper(
  :navigation="true"
  slides-per-view="1"
  :pagination="{ clickable: true }"
  @swiper="onSwiper"
  @slideChange="onSlideChange"
  )
  swiper-slide.swiper-slide(
    v-for="slide in slides"
    :key="slide.id"
  )
    img.swiper-slide__img(src="@/assets/img/Background.jpg")
    .swiper-slide__content
      h2.swiper-slide__content--title {{ slide.title }}
      p.swiper-slide__content--paragraph {{ slide.text }}
      a.btn.btn__slide(href="#") {{ slide.btnText }}
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
// install Swiper modules
SwiperCore.use([Navigation, Pagination])
export default {
  name: 'Slider',
  // props: {
  //   title: {
  //     type: String,
  //     required: true
  //   },
  //   text: {
  //     type: String,
  //     required: true
  //   }
  // }
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = [
      {
        id: 1,
        title: 'Бесплатная парковка',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        btnText: 'Подробнее',
        img: '@/assets/img/Background.jpg',
      },
      {
        id: 2,
        title: 'Бесплатная парковка - 1',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        btnText: 'Подробнее',
        img: '@/assets/img/Background.jpg',
      },
      {
        id: 3,
        title: 'Бесплатная парковка - 2',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        btnText: 'Подробнее',
        img: '@/assets/img/Background.jpg',
      },
      {
        id: 4,
        title: 'Бесплатная парковка - 3',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        btnText: 'Подробнее',
        img: '@/assets/img/Background.jpg',
      },
      {
        id: 5,
        title: 'Бесплатная парковка',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        btnText: 'Подробнее',
        img: '@/assets/img/Background.jpg',
      },
    ]
    return {
      slides,
    }
  },
}
</script>
