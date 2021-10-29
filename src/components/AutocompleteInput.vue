<template lang="pug">
label.form__label() {{ label }}
input.form__input(
  type="text" 
  :value="modelValue"
  :placeholder="placeholder" 
  @input="onInput" 
 )
ul.form-city__autocomplete(v-show="results.length && modelValue")
  li.form-city__autocomplete-result(
    v-for="item in results"
    :key="item.name"
    @click="choose(item)"
  ) {{ isCity ? item.name : item.address }}
</template>
<script>
import { ref, onMounted, computed, reactive } from 'vue'
export default {
  name: 'AutocompleteInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    isCity: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  emits: ['update:modelValue', 'choose'],
  setup(props, { emit }) {
    let results = ref([])
    const filterResults = () => {
      if (props.isCity) {
        results.value = props.items.filter(
          (item) =>
            item.name.toLowerCase().indexOf(props.modelValue.toLowerCase()) > -1
        )
      } else {
        results.value = props.items.filter(
          (item) =>
            item.address.toLowerCase().indexOf(props.modelValue.toLowerCase()) >
            -1
        )
      }
    }
    const choose = (item) => {
      emit('choose', item)
      results.value = []
    }
    const onInput = (event) => {
      filterResults()
      emit('update:modelValue', event.target.value)
    }

    return {
      onInput,
      results,
      choose,
    }
  },
}
</script>
