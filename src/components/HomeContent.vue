<template lang="pug">
main.main
  .main-title 
    .main-title__title--up {{ titleUp }}
    h1.main-title__title--below {{ titleBelow }}
  h3.main__subtitle {{ subtitle }}
  a.btn.btn__book(href="#" alt="booking") {{ btnBook }}
</template>
<script>
export default {
  name: 'HomeContent',
  data() {
    return {
      titleUp: 'Кашеринг',
      titleBelow: 'Need for drive',
      subtitle: 'Поминутная аренда авто твоего города',
      btnBook: 'Забронировать',
    }
  },
}
</script>
