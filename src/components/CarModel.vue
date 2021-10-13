<template lang="pug">
.model-car(
  v-for="model in modelCars" 
  @click="chooseCar(model)"
  :class="{ 'model-car-active': model.id === activeId }"
  )
  .model-car-name
    .model-car-name__title {{ model.title }}
    .model-car-name__price {{ model.rangePrice }} &#8381;
  .model-car-image
    img.model-car-image__item(:src="model.img" alt="Car")
</template>
<script>
import { modelCars } from '@/utils/mocks'
import { ref } from 'vue'
export default {
  name: 'CarModel',
  emits: ['chooseCar'],

  setup(props, { emit }) {
    const activeId = ref(0)

    const chooseCar = (model) => {
      activeId.value = model.id
      emit('chooseCar', model)
    }

    return {
      activeId,
      modelCars,
      chooseCar,
    }
  },
}
</script>
