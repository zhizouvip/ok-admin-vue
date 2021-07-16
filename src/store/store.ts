import { createStore } from 'vuex';

/**引入当前modules件中的所有的ts文件 */
const files = import.meta.globEager('./modules/*.ts');
const modules: any = {};
for (const key in files) {
  modules[key.replace(/(\.\/modules\/|\.ts)/g, '')] = files[key].default;
}

export default createStore({
  modules,
  state: {
    current: 5
  },
  mutations: {
    SET_CURRENT: (state: any, val: string) => {
      state.current += parseInt(val);
    }
  },
  actions: {}
});
