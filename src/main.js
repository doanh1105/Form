import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";

// bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
