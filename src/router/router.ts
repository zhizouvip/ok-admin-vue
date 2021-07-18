import { Component } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
import {
  TimerOutline,
  HomeOutline,
  PartlySunnyOutline,
  CloudyNightOutline,
  StarOutline,
  ColorPaletteOutline,
  WarningOutline
} from '@vicons/ionicons5';
import multiMenu from './modules/multiMenu.ts'; // 多级菜单

import routerComponent from './utils/routerComponent.ts';
import routerReload from './utils/routerReload.vue';
import routerGuard from './utils/routerGuard.ts';

// meta菜单设置的选项说明
export type IMeta = {
  title?: string; // 页面标题
  tagHidden?: boolean; // 是否需要显示在tab上
  keepAlive?: boolean; // 是否缓存页面
  hidden?: boolean; // 是否不显示在左侧菜单栏上
  icon?: Component; // 菜单图标
  affix?: boolean; // 初始在tags是否一直悬挂不被关闭
  href?: string; // 跳转到外部链接的地址(设置了此项点击将会跳转到其他网站)
};

// 是否是白天 5-17
const isDayTime = 4 < new Date().getHours() && new Date().getHours() < 18;

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard/control',
    component: routerReload
  },
  {
    path: '/dashboard',
    component: Layout as unknown as Component,
    redirect: '/dashboard/control',
    meta: {
      title: 'Dashboard', // 页面标题
      icon: TimerOutline // 图标
    },
    children: [
      {
        path: 'control',
        name: 'control',
        component: routerComponent(() => import('@/views/control/index.vue')),
        meta: {
          title: '控制台', // 页面标题
          keepAlive: true, // 是否缓存页面
          icon: HomeOutline, // 图标
          affix: true //在tags是否一直悬挂不被关闭
        }
      },
      {
        path: 'workplace',
        name: 'workplace',
        component: routerComponent(() => import('@/views/workplace/index.vue')),
        meta: {
          title: '工作台',
          keepAlive: true,
          icon: isDayTime ? PartlySunnyOutline : CloudyNightOutline
        }
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    component: Layout as unknown as Component,
    redirect: '/form/basic-form',
    meta: {
      title: '表单',
      icon: ColorPaletteOutline
    },
    children: [
      {
        path: 'basic-form',
        name: 'basic-form',
        component: routerComponent(() => import('@/views/form/basic-form.vue')),
        meta: {
          title: '基础表单'
        }
      },
      {
        path: 'advanced-form',
        name: 'advanced-form',
        component: routerComponent(() => import('@/views/form/advanced-form.vue')),
        meta: {
          title: '高级表单'
        }
      },
      {
        path: 'step-form',
        name: 'step-form',
        component: routerComponent(() => import('@/views/form/advanced-form.vue')),
        meta: {
          title: '分步表单'
        }
      },
      {
        path: 'detail',
        name: 'detail',
        component: routerComponent(() => import('@/views/form/advanced-form.vue')),
        meta: {
          title: '表单详情'
        }
      }
    ]
  },
  {
    path: '/exception',
    name: 'exception',
    component: Layout as unknown as Component,
    redirect: '/exception/404',
    meta: {
      title: '异常页',
      icon: WarningOutline
    },
    children: [
      {
        path: '403',
        name: '403',
        component: routerComponent(() => import('@/views/exception/403.vue')),
        meta: {
          title: '403'
        }
      },
      {
        path: '404',
        name: '404',
        component: routerComponent(() => import('@/views/exception/404.vue')),
        meta: {
          title: '404'
        }
      },
      {
        path: '500',
        name: '500',
        component: routerComponent(() => import('@/views/exception/500.vue')),
        meta: {
          title: '500'
        }
      }
    ]
  },

  {
    path: '/user',
    component: Layout as unknown as Component,
    children: [
      {
        path: '',
        name: 'user',
        component: routerComponent(() => import('@/views/user/index.vue')),
        meta: {
          title: '个人中心',
          icon: StarOutline
        }
      }
    ]
  },
  multiMenu
];

const constantRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouter.concat(asyncRoutes),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

// 路由守卫
routerGuard(router);

export default router;
