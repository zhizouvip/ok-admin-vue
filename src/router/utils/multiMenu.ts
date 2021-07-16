import { OptionsOutline } from '@vicons/ionicons5';
import Layout from '@/layout/index.vue';
import IFrameView from '@/layout/IFrameView.vue';
import { RouterView } from 'vue-router';
import { Component, createBlock, createVNode } from 'vue';
const componentLinkView = (src: string) => {
  return {
    render() {
      return createVNode(IFrameView, { src });
    }
  };
};
export default {
  path: '/multi',
  component: Layout as unknown as Component,
  meta: {
    title: '多级菜单',
    icon: OptionsOutline
  },
  children: [
    {
      path: 'menu-one',
      name: 'menu-one',
      component: componentLinkView('https://v3.cn.vuejs.org/'),
      meta: {
        title: 'VUE3官网'
      }
    },
    {
      path: 'menu-naive-ui',
      name: 'menu-naive-ui',
      component: componentLinkView('https://www.naiveui.com/zh-CN/os-theme'),
      meta: {
        title: 'NaiveUI官网'
      }
    },
    {
      path: 'menu-gitee',
      name: 'menu-gitee',
      component: componentLinkView('https://gitee.com/zhizous'),
      meta: {
        title: '码云地址'
      }
    },
    {
      path: 'menu-three',
      name: 'menu-three',
      component: RouterView,
      meta: {
        title: '菜单项'
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
              ]);
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
              return createBlock('div', {}, '菜单3.2');
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
              return createVNode('div', {}, '菜单3.3');
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
                  ]);
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
                  return createBlock('div', {}, '菜单3.4.2');
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
                  return createVNode('div', {}, '菜单3.4.3');
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
};
