import { createApp } from "vue";
import App from "./App.vue";

// PrimeVue
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";

// CSS PrimeVue (ajuste conforme seu preset)
import "primeicons/primeicons.css";

// Seu CSS do portfólio
import "./styles/portfolio.css";

createApp(App)
  .use(PrimeVue)
  .use(ToastService)
  .mount("#app");
