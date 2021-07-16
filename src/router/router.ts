import { Component } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
import { NewspaperOutline, WarningOutline } from '@vicons/ionicons5';
import { StarBorderRound } from '@/icon/material-icon/index.ts';
import routerComponent from './utils/routerComponent.ts';
import multiMenu from './utils/multiMenu.ts';
import routerGuard from './utils/routerGuard.ts';

export type IMeta = {
  title?: string; // 页面标题
  tagHidden?: boolean; // 是否需要显示在tab上
  keepAlive?: boolean; // 是否缓存页面
  icon?: Component; // 菜单图标
  affix?: boolean; // 在tags是否一直悬挂不被关闭
  hidden?: boolean; // 是否不显示在菜单栏上
};

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout as unknown as Component,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: routerComponent(() => import('@/views/home/home.vue')),
        meta: {
          title: '首页', // 页面标题
          keepAlive: true, // 是否缓存页面
          icon: StarBorderRound, // 图标
          affix: true //在tags是否一直悬挂不被关闭
        }
      }
    ]
  },

  {
    path: '/control',
    component: Layout as unknown as Component,
    children: [
      {
        path: '',
        name: 'control',
        component: routerComponent(() => import('@/views/control/control.vue')),
        meta: {
          title: '控制台',
          keepAlive: true,
          icon: StarBorderRound
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
        component: routerComponent(() => import('@/views/user/user.vue')),
        meta: {
          title: '个人中心',
          icon: StarBorderRound
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
      icon: NewspaperOutline
    },
    children: [
      {
        path: 'basic-form',
        name: 'basic-form',
        component: routerComponent(() => import('@/views/form/basic-form.vue')),
        meta: {
          title: '基础表单',
          icon: StarBorderRound
        }
      },
      {
        path: 'advanced-form',
        name: 'advanced-form',
        component: routerComponent(() => import('@/views/form/advanced-form.vue')),
        meta: {
          title: '高级表单',
          icon: StarBorderRound
        }
      },
      {
        path: 'step-form',
        name: 'step-form',
        component: routerComponent(() => import('@/views/form/advanced-form.vue')),
        meta: {
          title: '分步表单',
          icon: StarBorderRound
        }
      },
      {
        path: 'detail',
        name: 'detail',
        component: routerComponent(() => import('@/views/form/advanced-form.vue')),
        meta: {
          title: '表单详情',
          icon: StarBorderRound
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
  multiMenu
];

const constantRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue'),
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
