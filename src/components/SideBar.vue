<template lang="pug">
.aside
  .menu-btn
    .menu-btn-burger(@click="showModal = true")
      .menu-btn__item(v-show="!showModal")
    a.language-btn(href="#" alt="language") Eng
  modal(v-if="showModal" @close="showModal = false")
    template(v-slot:body)
      ul
        li(v-for="item in listMenu" :key="item.id")
          .modal__item {{ item.title }}
      TelegramIcon
      FacebookIcon
      InstagramIcon
</template>
<script>
import FacebookIcon from '@/components/icons/FacebookIcon'
import TelegramIcon from '@/components/icons/TelegramIcon'
import InstagramIcon from '@/components/icons/InstagramIcon'
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'
import { listMenu } from '@/utils/mocks'
export default {
  name: 'SideBar',
  components: {
    Modal,
    FacebookIcon,
    TelegramIcon,
    InstagramIcon,
  },
  setup() {
    const showModal = ref(false)
    return {
      showModal,
      listMenu,
    }
  },
}
</script>
