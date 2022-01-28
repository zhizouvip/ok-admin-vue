import theme, { IThemeType } from '@/setting/theme'
import { defineStore } from 'pinia'
export default defineStore('themeStore', {
  state: (): typeof theme => ({
    isDarkTheme: theme.isDarkTheme,
    appTheme: theme.appTheme,
    appThemeList: theme.appThemeList
  }),
  actions: {
    SET_APPTHEME(theme: IThemeType) {
      this.appTheme = theme
    },
    SET_ISDARKTHEME(isDarkTheme: boolean) {
      this.isDarkTheme = isDarkTheme
    }
  },
  getters: {
    isDarkThemeGetter(): boolean {
      return this.isDarkTheme
    },
    appThemeGetter(): IThemeType {
      return this.appTheme
    },
    appThemeListGetter: (store) => {
      return store.appThemeList
    }
  }
})
