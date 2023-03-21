import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/style.css";
import VCalendar from "v-calendar";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

// Vue.config.productionTip = false;
// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: "vc", // Use <vc-calendar /> instead of <v-calendar />
  // ...other defaults
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
