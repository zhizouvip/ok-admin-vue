/**
 * 路由守卫
 */

import type { Router } from 'vue-router';
import useAdminStore from '../../store/adminStore.ts';

// 添加keepAlive缓存
function addKeepAlive(route: any) {
  const adminStore = useAdminStore();
  if (route.meta && route.meta.keepAlive) {
    adminStore.ADD_KEEPALIVES(route.matched[route.matched.length - 1].components.default.name);
  }
}

export default function routerGuard(router: Router) {
  /**前置守卫*/
  router.beforeEach(async (to, from, next) => {
    next();
  });

  /**后置守卫*/
  router.afterEach((to, from, failure) => {
    addKeepAlive(to); // 添加keepAlive缓存
  });
}
