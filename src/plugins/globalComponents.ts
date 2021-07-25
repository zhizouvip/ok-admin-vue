/**
 * 注册全局组件
 * 组件设置了name则使用name作为组件名，否则以文件名作为组件名
 */

import { App } from 'vue';
const tsxComp = import.meta.globEager('../components/global/**/*.tsx'); // 获取指定目录包括子级目录所有的tsx文件
const vueComp = import.meta.globEager('../components/global/**/*.vue'); // 获取指定目录包括子级目录所有的vue文件

export default {
  install: function (_app: App) {
    let name = '';
    for (let key in tsxComp) {
      name = tsxComp[key].default.name || key.substr(key.lastIndexOf('/') + 1);
      name = name.replace('.tsx', '');
      _app.component(name, tsxComp[key].default);
    }
    for (let key in vueComp) {
      name = vueComp[key].default.name || key.substr(key.lastIndexOf('/') + 1);
      name = name.replace('.vue', '');
      _app.component(name, vueComp[key].default);
    }
  }
};
