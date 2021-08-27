import { defineStore } from 'pinia';

type TypeConfig = {
  key: 'sidebarInverted' | 'headerInverted' | 'collapsed' | 'tagShow';
  value: boolean;
};

export default defineStore('adminStore', {
  state: () => ({
    keepAlives: [] as Array<String>, //缓存的路由名字
    layTags: [], // tags
    layConfig: {
      sidebarInverted: true, // 侧边栏是否暗色主题
      headerInverted: false, // 顶部栏是否暗色主题
      collapsed: false, // 是否收缩菜单
      tagShow: true // 是否显示tag
    }
  }),
  actions: {
    SET_LAYTAGS(key: any) {
      this.layTags = key;
    },
    SET_LAYCONFIG: function (config: TypeConfig) {
      this.layConfig[config.key] = config.value;
    },
    SET_LAYCONFIGS(config: any) {
      this.layConfig = config;
    },
    ADD_KEEPALIVES(routeName: string) {
      if (this.keepAlives.indexOf(routeName) < 0) {
        this.keepAlives.push(routeName);
      }
    },
    DEL_KEEPALIVES(routeName: string) {
      const indexKeepAlives = this.keepAlives.indexOf(routeName);
      if (indexKeepAlives >= 0) {
        this.keepAlives.splice(indexKeepAlives, 1);
      }
    }
  },
  getters: {
    keepAlivesGetter: (state) => {
      return state.keepAlives;
    },
    layTagsGetter: (state) => {
      return state.layTags;
    },
    layConfigGetter: (state) => {
      return state.layConfig;
    }
  }
});
