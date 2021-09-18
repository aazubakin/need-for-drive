<template>
  <div class="home">
    <side-bar></side-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar.vue";

export default {
  name: "Home",
  components: {
    SideBar,
  },
};
</script>
