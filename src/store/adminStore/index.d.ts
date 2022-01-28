/** @interface adminStore */
export type IState = {
  /** @name 缓存的路由名字  */
  keepAlives: Array<string>
  /** @name tags内容 */
  layTags: Array<any>
  /** @name layout配置 */
  layConfig: {
    /** @name 侧边栏是否暗色主题 */
    sidebarInverted: boolean
    /** @name 顶部栏是否暗色主题 */
    headerInverted: boolean
    /** @name 是否收缩菜单 */
    collapsed: boolean
    /** @name 是否显示tag */
    tagShow: boolean
  }
}

export type ILayConfig = {
  key: keyof IState['layConfig']
  value: boolean
}
