import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 注册element-plus
app.use(ElementPlus)

app.use(createPinia())
app.use(router)

app.mount('#app')
