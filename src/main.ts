import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router'
import NaiveUi from './naiveui/index'
import globalComponents from './plugins/globalComponents'

import './assets/css/app.scss'

const app = createApp(App)
// 注册全局NaiveUI组件
app.use(NaiveUi)

// 注册全局自定义组件
app.use(globalComponents)

// 注册pinia状态管理
const pinia = createPinia()
app.use(pinia)

// 注册路由
app.use(router)

// 挂载
app.mount('#app')
