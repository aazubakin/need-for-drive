<template lang="pug">
.location
  .location-container
    form.form
      .form-city
        AutocompleteInput(
          label="Город" 
          placeholder="Начните вводить город..." 
          :items="cities.data" 
          v-model="city"
          :isCity="true"
          @choose="chooseCity"
          )
      .form-point
        AutocompleteInput(
          label="Пункт выдачи"
          placeholder="Начните вводить пункт..." 
          :items="points.data" 
          v-model="point"
          @choose="choosePoint"
        )
    .location-container-map
      .map__title Выбрать на карте:
      .googleMap(ref="map")
  .location-order 
    .location-order__title Ваш заказ:
    .location-order-point
      .location-order-point__title Пункт выдачи
      .location-order-point__dots
      .location-order-point-address 
        .location-order-point-address__city {{ city }}
        .location-order-point-address__street {{ point }}
    .location-order-price 
      .location-order-price__title Цена: 
      .location-order-price__range от 8 000 до 12 000 &#8381;
    .location-order__btn
      router-link.btn.btn__order(:to="{ name: 'Model' }" :class="{ 'btn--disabled': !isData }") Выбрать модель

</template>
<script>
// @ is an alias to /src
import AutocompleteInput from '@/components/AutocompleteInput.vue'
import { ref, onMounted, computed } from 'vue'
import { addScript, showMap, getLatLng } from '@/services/map.service'
import { loadData, urls } from '@/services/api.service'
export default {
  name: 'Location',
  components: {
    AutocompleteInput,
  },
  emits: ['locationData'],
  setup(props, { emit }) {
    const cities = ref({})
    const points = ref('')
    loadData(urls.cities).then((resp) => (cities.value = resp))

    addScript()
    const map = ref(null)
    const point = ref('')
    const city = ref('')

    const chooseCity = async (item) => {
      city.value = item.name
      //Загружаем пункты выдачи выбранного города
      loadData(urls.points, { cityId: item.id }).then(
        (resp) => (points.value = resp)
      )
      const coords = await getLatLng(item.name)
      showMap(map.value, coords)
    }
    onMounted(() => {
      showMap(map.value, { lat: 55.75, lng: 37.61 })
    })

    const choosePoint = async (item) => {
      point.value = item.address
      //Загружаем пункты выдачи выбранного города
      // const coords = await getLatLng(item.name)
      // showMap(map.value, coords)
    }
    onMounted(() => {
      showMap(map.value, { lat: 55.75, lng: 37.61 })
    })

    const isData = computed(() => {
      emit('locationData', {
        model: point.value.length > 5 && city.value.length > 2,
        currentTab: 'location',
      })
      return point.value.length > 5 && city.value.length > 2
    })

    return {
      map,
      points,
      point,
      city,
      isData,
      cities,
      chooseCity,
      choosePoint,
      // changedCity,
    }
  },
}
</script>
