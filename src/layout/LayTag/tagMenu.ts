import { h, Component } from 'vue';
import { NIcon } from 'naive-ui';
import store from '../../store/store';
import router from '../../router/router';

import {
  ArrowBackOutline,
  ArrowForwardOutline,
  Close,
  CloseCircleSharp,
  ArrowDownCircleOutline
} from '@vicons/ionicons5';
import { Tag } from './index';

const menuIcon = (icon: Component) =>
  h(NIcon, null, {
    default: () => h(icon)
  });

/**tag菜单 */
export const menuOptions = [
  {
    label: '关闭左侧',
    key: 'closeLeft',
    icon: () => menuIcon(ArrowBackOutline)
  },
  {
    label: '关闭右侧',
    key: 'closeRight',
    icon: () => menuIcon(ArrowForwardOutline)
  },
  {
    label: '关闭其他',
    key: 'closeOther',
    icon: () => menuIcon(Close)
  },
  {
    label: '关闭全部',
    key: 'closeAll',
    icon: () => menuIcon(CloseCircleSharp)
  },
  {
    label: '关闭当前',
    key: 'closeThis',
    icon: () => menuIcon(ArrowDownCircleOutline)
  }
];

/**关闭tag菜单的事件 */
export const closeMenu = function(key: string, tags: Array<Tag>) {
  const route = router.currentRoute.value;
  const thatIndex = tags.findIndex((tag) => tag.fullPath === route.fullPath);

  switch (key) {
    case 'closeLeft':
      let tempIndexL = 0;
      while (tags[tempIndexL].fullPath !== route.fullPath) {
        if (
          tags[tempIndexL].fullPath !== route.fullPath &&
          !tags[tempIndexL].meta.affix
        ) {
          const [temp] = tags.splice(tempIndexL, 1);
          store.commit('admin/DEL_KEEPALIVES', temp.name);
        } else {
          tempIndexL++;
        }
      }
      break;
    case 'closeRight':
      let tempIndexR = thatIndex + 1;
      while (
        tempIndexR < tags.length &&
        tags[tempIndexR].fullPath !== route.fullPath
      ) {
        if (
          tags[tempIndexR].fullPath !== route.fullPath &&
          !tags[tempIndexR].meta.affix
        ) {
          const [temp] = tags.splice(tempIndexR, 1);
          store.commit('admin/DEL_KEEPALIVES', temp.name);
        } else {
          tempIndexR++;
        }
      }
      break;
    case 'closeOther':
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].fullPath !== route.fullPath && !tags[i].meta.affix) {
          const [temp] = tags.splice(i, 1);
          store.commit('admin/DEL_KEEPALIVES', temp.name);
          i--;
        }
      }
      break;
    case 'closeAll':
      for (let i = 0; i < tags.length; i++) {
        if (!tags[i].meta.affix) {
          const [temp] = tags.splice(i, 1);
          store.commit('admin/DEL_KEEPALIVES', temp.name);
          i--;
        }
      }
      // 如果当前未选中tag则选中tags最后一个
      if (!tags.find((tag) => tag.fullPath === route.fullPath)) {
        router.push(tags[tags.length - 1].fullPath);
      }
      break;
    case 'closeThis':
      if (!tags[thatIndex].meta.affix) {
        if (thatIndex === 0) {
          router.push(tags[thatIndex + 1].fullPath);
        } else {
          router.push(tags[thatIndex - 1].fullPath);
        }
        const [temp] = tags.splice(thatIndex, 1);
        store.commit('admin/DEL_KEEPALIVES', temp.name);
      }
      break;
  }
};
