import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";

createApp(App).use(router).mount("#app");
app.use(vue3GoogleLogin, {
  clientId: `477777850658-pj298j9fdvlmtk12nct9pr3qa6cvs4c5.apps.googleusercontent.com`,
});
