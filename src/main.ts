import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import { createPinia } from "pinia"
import 'ant-design-vue/dist/antd.css'
import '@/style/common.css'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Antd)
app.mount('#app')