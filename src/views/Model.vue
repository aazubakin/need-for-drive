<template lang="pug">
.model
  .model-container
    .radio-block
      radio-buttons(v-for="btn in radioModel" v-model="checkedValue" :button="btn")
    .model-container-cars
      .model-cars
        car-model(@chooseCar="getCar")
  .model-order 
    .model-order__title Ваш заказ:
    .model-order-point
      .model-order-point__title Пункт выдачи
      .model-order-point__dots
      .model-order-point-address 
        .model-order-point-address__city Ульяновск
        .model-order-point-address__street Наримова 42
    .model-order-point(v-if="modelCar")
      .model-order-point__title Модель 
      .model-order-point__dots
      .model-order-point-address 
        .model-order-point-address__city {{ modelCar.title }}
    .model-order-price 
      .model-order-price__title Цена: 
      .model-order-price__range от 8 000 до 12 000 &#8381;
    .model-order__btn
      router-link.btn.btn__order(:to="{ name: 'Additional' }" :class="{ 'btn--disabled': !modelCar }") Доплнительно
</template>
<script>
import RadioButtons from '@/components/RadioButtons'
import CarModel from '@/components/CarModel'
import { ref, reactive } from 'vue'
import { radioModel } from '@/utils/mocks'
export default {
  name: 'ModelPage',
  components: {
    RadioButtons,
    CarModel,
  },
  setup() {
    const checkedValue = ref('')
    const modelCar = ref(null)
    const getCar = (model) => {
      modelCar.value = model
    }
    return {
      checkedValue,
      radioModel,
      getCar,
      modelCar,
    }
  },
}
</script>
