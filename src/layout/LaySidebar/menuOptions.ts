/**
 * 功能：处理路由菜单
 */

import { Component, h } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { NIcon, MenuOption, MenuGroupOption } from 'naive-ui';
import { asyncRoutes } from '../../router/router';

// 如果是网址那么返回地址，否则返回空字符串
const regular =
  /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i;
function getURL(meta: any): string {
  if (!meta || !meta.href) return '';
  if (regular.test(meta.href)) {
    return meta.href;
  } else {
    return '';
  }
}

// 存储菜单
let menusOption: Array<MenuOption | MenuGroupOption> = [];

// 图标
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

//路由路径处理
function handlePath(superPath: string, rePath: string): string {
  if (/^\//.test(rePath)) {
    // 如果rePath第一个字符是/的时候
    return rePath;
  } else if (/\/$/.test(superPath)) {
    // 如果superPath最后一个字符是/的时候
    return superPath + rePath;
  } else {
    return rePath ? superPath + '/' + rePath : superPath;
  }
}

/* 核心代码
 * 递归处理菜单
 **/
function handleMenu(
  rrr: RouteRecordRaw,
  fullPath: string,
  menu?: MenuOption
): MenuOption | MenuGroupOption | undefined {
  // 如果菜单色设置了隐藏那么不处理
  if (rrr.meta && rrr.meta.hidden) return menu;

  // 菜单路径的处理
  const newPath: string = getURL(rrr.meta) || handlePath(fullPath, rrr.path);

  // 菜单标题
  const label = rrr.meta ? (rrr.meta.title as string) : (rrr.name as string);

  menu = {
    label: label,
    key: newPath
  };

  if (rrr.meta && rrr.meta.icon) {
    menu.icon = renderIcon(rrr.meta.icon as Component);
  }

  if (rrr.children && rrr.children.length) {
    menu.children = [] as Array<MenuGroupOption>;
    rrr.children.forEach((item) => {
      if (!item.meta?.hidden) {
        const menuTemp = handleMenu(item, newPath);
        menuTemp && menu?.children?.push(menuTemp);
      }
    });
    // 当最后的children的长度为0的时候返回undefined
    if (menu.children.length === 0) return undefined;
  }
  return menu;
}

export const useMenu = function () {
  /**layouts初始化 (查找所有根路由的组件都是Layout)*/
  const layouts: Array<RouteRecordRaw> = asyncRoutes.reduce((lays, item) => {
    if (item.component && item.component.name === 'Layout') {
      lays.push(item);
    }
    return lays;
  }, [] as Array<RouteRecordRaw>);

  menusOption = layouts.reduce((menus, item) => {
    // 如果菜单设置了隐藏那么不处理
    if (item.meta && item.meta.hidden) return menus;

    if (item.children && item.children.length === 1) {
      // 处理只有一个子元素
      const menu = handleMenu(item.children[0], item.path);
      menu && menus.push(menu);
    } else if (item.children && item.children.length > 1) {
      // 处理多个子元素
      const menu = handleMenu(item, item.path);
      menu && menus.push(menu);
    }
    return menus;
  }, [] as Array<MenuOption | MenuGroupOption>);

  return menusOption;
};
