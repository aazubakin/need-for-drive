<template lang="pug">
footer.footer
  .footer__copyright {{ copyrightText }}
  .footer__phone {{ phone }} 
</template>
<script>
export default {
  name: 'FooterBlock',
  data() {
    return {
      copyrightText: '© 2016-2019 «Need for drive»',
      phone: '8 (495) 234-22-44',
    }
  },
}
</script>
