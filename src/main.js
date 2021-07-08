import { createApp } from "vue";
import App from "./App";
import router from "./router";
import VueFirestore from "vue-firestore";

createApp(App).use(router, VueFirestore).mount("#app");
