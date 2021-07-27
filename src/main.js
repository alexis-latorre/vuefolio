import { createApp } from "vue";
import App from "./App";
import router from "./router";
import VueFirestore from "vue-firestore";

let app = createApp(App);

app.use(router, VueFirestore);

app.mount("#app");
