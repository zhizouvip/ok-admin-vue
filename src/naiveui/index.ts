import { App } from 'vue';
import { NButton, NIcon, NForm, NInput } from 'naive-ui';

// 这里添加经常使用的全局NaiveUI组件
export default {
  install(_app: App) {
    _app.component('NButton', NButton);
    _app.component('NIcon', NIcon);
    _app.component('NForm', NForm);
    _app.component('NInput', NInput);
  }
};
