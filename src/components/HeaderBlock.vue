<template lang="pug">
header.header
  router-link.header__title(:to="{ name: 'Home' }") {{ title }}
  .header-city 
    .header-city__icon
      img(src="@/assets/icons/Group.svg")
    .header-city__title {{ city }}
</template>
<script>
export default {
  name: 'HeaderBlock',
  data() {
    return {
      title: 'Need for drive',
      city: 'Ульяновск',
    }
  },
}
</script>
