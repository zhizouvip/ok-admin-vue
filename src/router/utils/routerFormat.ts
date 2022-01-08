/**
 * dist 将多级路由分成二级路由
 */
import { RouteRecordRaw } from 'vue-router'
function handlePath(superPath: string, rePath: string): string {
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

function handleRouter(
  router: RouteRecordRaw,
  fullPath: string,
  newRouter?: RouteRecordRaw
): RouteRecordRaw {
  newRouter = newRouter || ({} as RouteRecordRaw)

  if (router.component && router.component.name === 'Layout') {
    newRouter = {
      path: fullPath,
      name: router.name,
      component: router.component,
      redirect: router.redirect,
      meta: router.meta,
      children: []
    } as RouteRecordRaw
  } else {
    newRouter.children = newRouter.children || []
    newRouter.children.push({
      path: fullPath,
      name: router.name,
      component: router.component,
      redirect: router.redirect,
      meta: router.meta
    } as RouteRecordRaw)
  }
  if (router.children && router.children.length) {
    router.children.forEach((routerItem: any) => {
      const newFullPath = handlePath(fullPath, routerItem.path)
      handleRouter(routerItem, newFullPath, newRouter)
    })
  }
  return newRouter
}

export default function (routers: Array<RouteRecordRaw>): Array<RouteRecordRaw> {
  const arr: Array<RouteRecordRaw> = []
  routers.forEach((router: any) => {
    if (router.children && router.children.length) {
      arr.push(handleRouter(router, router.path))
    } else {
      arr.push(router)
    }
  })
  return arr
}
