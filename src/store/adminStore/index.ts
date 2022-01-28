import { defineStore } from 'pinia'
import { IState, ILayConfig } from './index.d'
export default defineStore('adminStore', {
  state: (): IState => ({
    keepAlives: [],
    layTags: [],
    layConfig: {
      sidebarInverted: true,
      headerInverted: false,
      collapsed: false,
      tagShow: true
    }
  }),
  actions: {
    SET_LAYTAGS(key: IState['layTags']) {
      this.layTags = key
    },
    SET_LAYCONFIG: function (config: ILayConfig) {
      this.layConfig[config.key] = config.value
    },
    SET_LAYCONFIGS(config: IState['layConfig']) {
      this.layConfig = config
    },
    ADD_KEEPALIVES(routeName: string) {
      if (this.keepAlives.indexOf(routeName) < 0) {
        this.keepAlives.push(routeName)
      }
    },
    DEL_KEEPALIVES(routeName: string) {
      const indexKeepAlives = this.keepAlives.indexOf(routeName)
      if (indexKeepAlives >= 0) {
        this.keepAlives.splice(indexKeepAlives, 1)
      }
    }
  },
  getters: {
    keepAlivesGetter(): IState['keepAlives'] {
      return this.keepAlives
    },
    layTagsGetter(): IState['layTags'] {
      return this.layTags
    },
    layConfigGetter(): IState['layConfig'] {
      return this.layConfig
    }
  }
})
