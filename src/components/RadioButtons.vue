<template lang="pug">
label.radio(:for="button.id") 
  input.radio__input(
    type="radio" 
    :value="button.id"
    name="models"
    @change="$emit('update:modelValue', $event.target.value)" 
    :id="button.id"
    )
  .radio__radio 
  | {{ button.title }}
</template>
<script>
export default {
  name: 'RadioButtons',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    button: {
      type: Object,
      default: () => {},
    },
  },
  emits: ['update:modelValue'],
}
</script>
