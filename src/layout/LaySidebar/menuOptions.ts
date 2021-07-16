import { Component, h } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { NIcon, MenuOption, MenuGroupOption } from 'naive-ui';
import { asyncRoutes } from '../../router/router';

/**存储菜单 */
let menusOption: Array<MenuOption | MenuGroupOption> = [];

/** 图标*/
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

/**路由路径处理 */
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

/**递归处理菜单 */
function handleMenu(
  rrr: RouteRecordRaw,
  fullPath: string,
  menu?: MenuOption
): MenuOption | MenuGroupOption | undefined {
  // 如果菜单色设置了隐藏那么不处理
  if (rrr.meta && rrr.meta.hidden) return menu;

  const newPath = handlePath(fullPath, rrr.path);
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
    if(menu.children.length === 0) return undefined
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
      const menu = handleMenu(item.children[0],item.path)
      menu && menus.push(menu);
    } else if (item.children && item.children.length > 1) {
      // 处理多个子元素
      const menu = handleMenu(item, item.path)
      menu && menus.push(menu);
    }
    return menus;
  }, [] as Array<MenuOption | MenuGroupOption>);
  
  return menusOption;

  /** 
   * return [
      {
        label: "舞，舞，舞",
        key: "dance-dance-dance",
        icon: renderIcon(StarRound),
        children: [
          {
            type: "group",
            label: "人物",
            key: "people",
            children: [
              {
                label: "叙事者",
                key: "narrator"
                icon: renderIcon(StarRound)
              },
              {
                label: "羊男",
                key: "sheep-man"
                icon: renderIcon(StarRound)
              }
            ]
          },
          {
            label: "饮品",
            key: "beverage",
            icon: renderIcon(StarRound),
            children: [
              {
                label: "威士忌",
                key: "whisky"
              }
            ]
          },
          {
            label: "食物",
            key: "food",
            children: [
              {
                label: "三明治",
                key: "sandwich"
              }
            ]
          },
          {
            label: "过去增多，未来减少",
            key: "the-past-increases-the-future-recedes"
          }
        ]
      }
    ];
  */
};
