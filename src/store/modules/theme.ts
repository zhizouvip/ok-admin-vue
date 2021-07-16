import theme from '@/setting/theme.ts';

const state: any = {
  appTheme: theme.appTheme,
  appThemeList: theme.appThemeList
};

const mutations = {
  SET_APPTHEME: (state: any, theme: string) => {
    state.appTheme = theme;
  }
};

const actions = {};

const getters = {
  appThemeGetter: (state: any, getters: any, rootState: any) => {
    return state.appTheme;
  },
  appThemeListGetter: (state: any, getters: any, rootState: any) => {
    return state.appThemeList;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
