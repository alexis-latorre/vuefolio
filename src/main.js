import * as Vue from "vue";
import * as Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import App from "./App";
import store from "./store";

const app = Vue.createApp(App);
app.config.globalProperties.$backendUrl = "https://wl1th.sse.codesandbox.io";

app.use(Vuex);
app.use(store);
app.use(VueAxios, axios);
app.use(router);

app.mount("#app");
