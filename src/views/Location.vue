<template lang="pug">
.location
  .location-container
    form.form
      .form-city
        label.form__label() Город
        input.form__input(type="text" placeholder="Начните вводить город..." v-model="city")
      .form-point
        label.form__label Пункт выдачи
        input.form__input(type="text" placeholder="Начните вводить пункт..." v-model="point")
    .location-container-map
      .map__title Выбрать на карте:
      .googleMap(ref="map")
  .location-order 
    .location-order__title Ваш заказ:
    .location-order-point
      .location-order-point__title Пункт выдачи
      .location-order-point__dots
      .location-order-point-address 
        .location-order-point-address__city Ульяновск
        .location-order-point-address__street Наримова 42
    .location-order-price 
      .location-order-price__title Цена: 
      .location-order-price__range от 8 000 до 12 000 &#8381;
    .location-order__btn
      router-link.btn.btn__order(:to="{ name: 'Model' }" :class="{ 'btn--disabled': !isData }") Выбрать модель

</template>
<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
import BreadcrumbsBlock from '@/components/BreadcrumbsBlock.vue'
import { ref, onMounted, computed } from 'vue'
import { addScript, showMap } from '@/services/map.service'
export default {
  name: 'Location',
  components: {
    SideBar,
    HeaderBlock,
    BreadcrumbsBlock,
  },
  emits: ['locationData'],
  setup(props, { emit }) {
    addScript()
    const map = ref(null)

    onMounted(() => {
      showMap(map.value, 55.75, 37.61)
    })

    const point = ref('')
    const city = ref('')

    const isData = computed(() => {
      emit('locationData', {
        model: point.value.length > 0 && city.value.length > 0,
        currentTab: 'location',
      })
      return point.value.length > 0 && city.value.length > 0
    })

    return {
      map,
      point,
      city,
      isData,
    }
  },
}
</script>
