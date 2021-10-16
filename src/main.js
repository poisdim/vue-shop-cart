import {createApp} from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'

import {store} from "./store/store";

createApp(App).use(store).mount('#app');