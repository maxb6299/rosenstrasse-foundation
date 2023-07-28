import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(vue3GoogleLogin, {
  clientId: `477777850658-pj298j9fdvlmtk12nct9pr3qa6cvs4c5.apps.googleusercontent.com`,
});

app.mount("#app");
