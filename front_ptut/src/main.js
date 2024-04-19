/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import {createVuetify} from "vuetify";
import router from "./router";

const vuetify = createVuetify();
const app = createApp(App)
app.use(router);
app.use(vuetify)
registerPlugins(app)
app.mount('#app')
