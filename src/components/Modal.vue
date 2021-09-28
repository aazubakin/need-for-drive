<template lang="pug">
transition(name="modal" mode="fade")
  .modal-mask-main
    .modal-mask-secondary
      .modal-mask-secondary__btn(@click="$emit('close')")
      a.language-btn(href="#" alt="language") Eng
      .modal-wrapper
        .modal-container
          .modal-body
            slot(name="body") dedfault body

        //- .modal-footer
        //-   slot(name="footer") default footer
        //-     button.modal-default-button(@click="$emit('close')") OK
</template>
<script>
export default {
  name: 'Modal',
}
</script>
