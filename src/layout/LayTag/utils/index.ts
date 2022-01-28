import { RouteMeta } from 'vue-router'
import { watch } from 'vue'
import router, { asyncRoutes } from '@/router/router'

export type Tag = {
  name: string
  fullPath: string
  meta: RouteMeta
}

/**路由路径处理 */
const handlePath = function (superPath: string, rePath: string): string {
  if (/^\//.test(rePath)) {
    // 如果rePath第一个字符是/的时候
    return rePath
  } else if (/\/$/.test(superPath)) {
    // 如果superPath最后一个字符是/的时候
    return superPath + rePath
  } else {
    return rePath ? superPath + '/' + rePath : superPath
  }
}

/**处理悬挂的初始判断 */
function componentBool(routeComponent: any): boolean {
  /**(查找所有根路由的组件都是Layout)*/
  if (routeComponent.component && routeComponent.component.name === 'Layout') {
    /**处理affix悬挂 不处理多级路由*/
    return routeComponent.children && routeComponent.children.length
  }
  return false
}
/**tags监听*/
export const tagsEffect = function (tags: Array<Tag>): void {
  const route = router.currentRoute

  /**tags初始化 处理affix悬挂 */
  asyncRoutes.forEach((item: any) => {
    componentBool(item) &&
      item.children?.forEach((citem: any) => {
        if (citem.meta && citem.meta.affix) {
          const fullPath = handlePath(item.path, citem.path)
          const itemCommp = typeof citem.component === 'function' ? citem.component() : citem

          tags.push({
            fullPath,
            name: itemCommp.name, // 内部处理了解构
            meta: citem.meta
          })
        }
      })
  })

  /**监听路由变化 */
  watch(
    route,
    (to) => {
      if (to.meta && to.meta.tagHidden) return
      const isTag = tags.some((tag) => tag.fullPath === to.fullPath)
      const matched = to.matched
      if (!isTag && matched.length) {
        const commp = matched[matched.length - 1].components.default
        // tag 不存在时
        tags.push({
          name: commp.name || '',
          fullPath: to.fullPath,
          meta: to.meta
        })
      } else {
        // tag 已存在时
      }
    },
    {
      immediate: true
    }
  )
}

/** @description tags水平滚动条动态处理 */
export const tagsScroll = function (superBox: HTMLDivElement, tagConent: HTMLDivElement) {
  const layActive = tagConent.querySelector('.tag-active') as HTMLDivElement // 当前选中的tag
  if (!layActive) return

  const superWidth = superBox.offsetWidth, // 可视宽度
    layActiveWidth = layActive.offsetWidth // 当前选中的元素的宽度
  // tagWidth = tagConent.offsetWidth // 内容的总宽度

  const diffValue = superBox.scrollLeft - layActive.offsetLeft // 滚动条和当前元素位置的差值
  const showDistance = superWidth - layActiveWidth // 当前元素位置可现实的位置

  if (superBox.scrollLeft > layActive.offsetLeft) {
    // 元素在左边不可见的情况
    const adjacentElement = layActive.previousSibling as HTMLDivElement | null // 获取当前元素的上一个相邻元素
    if (adjacentElement && adjacentElement.nodeType === 1) {
      superBox.scrollLeft = layActive.offsetLeft - adjacentElement.offsetWidth
    } else {
      superBox.scrollLeft = 0 // 最左边
    }
  } else if (Math.abs(diffValue) > showDistance) {
    // 元素在右边不可见的情况
    superBox.scrollLeft = layActive.offsetLeft
  }
}
