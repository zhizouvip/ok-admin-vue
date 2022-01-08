import { TrailSignOutline } from '@vicons/ionicons5'
import Layout from '@/layout/index.vue'
import IFrameView from '@/layout/IFrameView.vue'
import { RouterView, RouteRecordRaw } from 'vue-router'
import { Component, createBlock, createVNode } from 'vue'
import { reloadComponent } from '../utils/routerComponent.ts'
const componentLinkView = (src: string) => {
  return reloadComponent(createVNode(IFrameView, { src }))
}

export default {
  path: '/multi',
  component: Layout as unknown as Component,
  meta: {
    title: '工具',
    icon: TrailSignOutline
  },

  children: [
    {
      path: 'menu-one',
      name: 'menu-one',
      meta: {
        title: '外部链接',
        href: 'https://gitee.com/zhizous'
      }
    },
    {
      path: 'frame',
      name: 'frame',
      component: RouterView,
      meta: {
        title: '内嵌网页'
      },
      children: [
        {
          path: 'ok-admin-vue',
          name: 'ok-admin-vue',
          component: componentLinkView('http://www.zhizous.cn/'),
          meta: {
            title: 'ok-admin-vue'
          }
        },
        {
          path: 'vue3',
          name: 'vue3',
          component: componentLinkView('https://v3.cn.vuejs.org/'),
          meta: {
            title: 'VUE3官网'
          }
        },
        {
          path: 'naive-ui',
          name: 'naive-ui',
          component: componentLinkView('https://www.naiveui.com/zh-CN/os-theme'),
          meta: {
            title: 'NaiveUI官网'
          }
        },
        {
          path: 'gitee',
          name: 'gitee',
          component: componentLinkView('https://gitee.com/zhizous'),
          meta: {
            keepAlive: true, // 是否缓存页面
            title: '码云地址'
          }
        }
      ]
    },
    {
      path: 'menu-three',
      name: 'menu-three',
      component: RouterView,
      meta: {
        title: '多级菜单'
      },
      children: [
        {
          path: 'menu-three-one',
          name: 'menu-three-one',
          component: {
            render() {
              return createBlock('div', {}, [
                createVNode('span', { a: 'asf' }, '菜单3.1'),
                createVNode('div', {}, '有点搞头')
              ])
            }
          },
          meta: {
            title: '菜单3.1'
          }
        },
        {
          path: 'menu-three-two',
          name: 'menu-three-two',
          component: {
            render() {
              return createBlock('div', {}, '菜单3.2')
            }
          },
          meta: {
            title: '菜单3.2'
          }
        },
        {
          path: 'menu-three-three',
          name: 'menu-three-three',
          component: {
            render() {
              return createVNode('div', {}, '菜单3.3')
            }
          },
          meta: {
            title: '菜单3.3'
          }
        },
        {
          path: 'menu-three-four',
          name: 'menu-three-four',
          component: RouterView,
          meta: {
            title: '菜单3.4'
          },
          children: [
            {
              path: 'menu-three-four-one',
              name: 'menu-three-four-one',
              component: {
                render() {
                  return createBlock('div', {}, [
                    createVNode('span', { a: 'asf' }, '菜单3.4.1'),
                    createVNode('div', {}, '有点搞头')
                  ])
                }
              },
              meta: {
                title: '菜单3.4.1'
              }
            },
            {
              path: 'menu-three-four-two',
              name: 'menu-three-four-two',
              component: {
                render() {
                  return createBlock('div', {}, '菜单3.4.2')
                }
              },
              meta: {
                title: '菜单3.4.2'
              }
            },
            {
              path: 'menu-three-four-three',
              name: 'menu-three-four-three',
              component: {
                render() {
                  return createVNode('div', {}, '菜单3.4.3')
                }
              },
              meta: {
                title: '菜单3.4.3'
              }
            }
          ]
        }
      ]
    }
  ]
} as RouteRecordRaw
