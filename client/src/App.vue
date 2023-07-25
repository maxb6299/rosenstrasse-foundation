<template>
  <div class="main">
    <NavigationBar></NavigationBar>
    <router-view />
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  components: {
    SiteFooter,
    NavigationBar,
  },

  created() {
    document.title = "Rosenstrasse Foundation";
  },
};
</script>

<style lang="scss">
@import "@/assets/_shared.scss";

#app {
  color: black;
  font-family: "Crimson Pro";
  font-size: 16px;
  font-weight: 300;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
  padding-top: 92px;
  padding-bottom: 0px;
}
</style>
