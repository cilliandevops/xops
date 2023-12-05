// core
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

// css
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import 'virtual:uno.css'


const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
      for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
      }
app.use(ElementPlus)
app.use(router)
app.mount('#app')