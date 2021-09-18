<template lang="pug">
.hello
  h1 {{ msg }}
  a.btn(href="#") Ok
  div
    a.btn.btn--disabled(href="#") Ok
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
