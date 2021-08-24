import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'

const app = createApp(App).use(router)

axios.defaults.baseURL = 'http://localhost:5000/';
app.config.globalProperties.axios=axios
app.mount('#app')
