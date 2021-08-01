import theme from '@/setting/theme.ts';

const state: any = {
  isDarkTheme: theme.isDarkTheme, // 是否是暗夜主题
  appTheme: theme.appTheme, // 当前主题色
  appThemeList: theme.appThemeList // 主题色列表
};

const mutations = {
  SET_APPTHEME: (state: any, theme: string) => {
    state.appTheme = theme;
  },
  SET_ISDARKTHEME: (state: any, isDarkTheme: boolean) => {
    state.isDarkTheme = isDarkTheme;
  }
};

const actions = {};

const getters = {
  isDarkThemeGetter: (state: any, getters: any, rootState: any) => {
    return state.isDarkTheme;
  },
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
