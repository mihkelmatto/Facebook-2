import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vueform from '@vueform/vueform'
import vueformConfig from '../vueform.config'

createApp(App).use(store).use(router).use(Vueform, vueformConfig).mount('#app')
