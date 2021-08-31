import * as Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import App from "./App";

const app = Vue.createApp(App);
app.config.globalProperties.$backendUrl = "https://wl1th.sse.codesandbox.io";

app.use(VueAxios, axios);
app.use(router);

app.mount("#app");
