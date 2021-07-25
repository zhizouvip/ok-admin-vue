import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import NaiveUi from './naiveui/index';
import globalComponents from './plugins/globalComponents.ts';

import './assets/css/app.scss';

const app = createApp(App);
// 注册全局NaiveUI组件
app.use(NaiveUi);

// 注册全局自定义组件
app.use(globalComponents);

// 注册vuex状态管理
app.use(store);

// 注册路由
app.use(router);

// 挂载
app.mount('#app');
