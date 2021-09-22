<template lang="pug">
swiper.swiper(:navigation="true")
  swiper-slide.swiper-slide(
    v-for="slide in slides"
    :key="slide.id"
  )
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
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
  data() {
    return {
      slides: [
        {
          id: 1,
          title: 'Бесплатная парковка',
          text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
          btnText: 'Подробнее',
        },
        {
          id: 2,
          title: 'Бесплатная парковка',
          text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
          btnText: 'Подробнее',
        },
        {
          id: 3,
          title: 'Бесплатная парковка',
          text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
          btnText: 'Подробнее',
        },
        {
          id: 4,
          title: 'Бесплатная парковка',
          text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
          btnText: 'Подробнее',
        },
        {
          id: 5,
          title: 'Бесплатная парковка',
          text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
          btnText: 'Подробнее',
        },
      ],
    }
  },
}
</script>
