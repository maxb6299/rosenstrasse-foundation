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
import { useAuthenticateStore } from "@/store/AuthenticateStore.js";
import cookieHelper from '@/_helpers/cookie.js'

export default {
  components: {
    SiteFooter,
    NavigationBar,
  },

  setup() {
    document.title = "Rosenstrasse Foundation";

    const authenticateStore = useAuthenticateStore();
    authenticateStore.checkAuthentication(); //
    return { authenticateStore }
  },


  async created() {
    await this.authenticateStore.checkAuthentication();
    if (!this.authenticateStore.getAuthentication) {
      // signs out
      cookieHelper.deleteCookie('id_token');
      this.authenticateStore.checkAuthentication();
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/_shared.scss";

#app {
  color: black;
  font-family: "Crimson Pro";
  font-size: 24px;
  font-weight: 300;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
  padding-bottom: 0px;
}
</style>
