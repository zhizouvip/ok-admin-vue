const state: any = {
  keepAlives: [], //缓存的路由名字
  layTags: [], // tags
  layConfig: {
    sidebarInverted: true, // 侧边栏是否暗色主题
    headerInverted: false, // 顶部栏是否暗色主题
    collapsed: false // 是否收缩菜单
  }
};

const mutations = {
  SET_LAYTAGS: (state: any, key: any) => {
    state.layTags = key;
  },
  SET_LAYCONFIG: function <T>(state: any, config: { key: string; value: T }) {
    state.layConfig[config.key] = config.value;
  },
  SET_LAYCONFIGS: (state: any, config: any) => {
    state.layConfig = config;
  },
  ADD_KEEPALIVES: (state: any, routeName: string) => {
    if (state.keepAlives.indexOf(routeName) < 0) {
      state.keepAlives.push(routeName);
    }
  },
  DEL_KEEPALIVES: (state: any, routeName: string) => {
    const indexKeepAlives = state.keepAlives.indexOf(routeName);
    if (indexKeepAlives >= 0) {
      state.keepAlives.splice(indexKeepAlives, 1);
    }
  }
};

const actions = {};

const getters = {
  keepAlivesGetter: (state: any, getters: any, rootState: any) => {
    return state.keepAlives;
  },
  layTagsGetter: (state: any, getters: any, rootState: any) => {
    return state.layTags;
  },
  layConfigGetter: (state: any, getters: any, rootState: any) => {
    return state.layConfig;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
