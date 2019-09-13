import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import UI from "@lib";
import observer from "../public/js/observer";
import VueTouch from "vue-touch";

Vue.use(VueTouch, { name: "v-touch" });
Vue.use(UI);

Vue.config.productionTip = false;

Vue.prototype.$observer = observer;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
