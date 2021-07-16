<template>
  <div class="lay-header">
    <n-grid x-gap="2" cols="2">
      <!-- left -->
      <n-gi>
        <div class="header-left">
          <n-icon class="lay-hover" title="菜单切换" size="20">
            <menu-fold-outlined v-show="!layConfig.collapsed" @click="hanldeMenu" />
            <menu-unfold-outlined
              v-show="layConfig.collapsed"
              @click="layConfig.collapsed = false"
            />
          </n-icon>
          <div class="header-refresh">
            <n-icon @click="handleRefresh" title="刷新" class="lay-hover" size="20">
              <refresh-filled />
            </n-icon>
          </div>
          <!-- 面包屑 -->
          <n-breadcrumb class="xs-hidden">
            <n-breadcrumb-item v-for="item in matcheds" :key="item">{{ item }}</n-breadcrumb-item>
          </n-breadcrumb>
        </div>
      </n-gi>

      <!-- right -->
      <n-gi suffix>
        <div class="header-right">
          <div class="flex-center padding-lr-10">
            <n-icon title="锁屏" class="lay-hover" size="20">
              <lock-closed-outline />
            </n-icon>
          </div>
          <div class="flex-center padding-lr-10">
            <n-dropdown trigger="hover" @select="handleSelect" :options="optionsISO">
              <n-icon title="语言" class="lay-hover" size="20">
                <globe-outline />
              </n-icon>
            </n-dropdown>
          </div>
          <div class="flex-center padding-lr-10">
            <full-screen />
          </div>
          <div class="flex-center padding-left-10">
            <lay-setting></lay-setting>
          </div>
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '../../icon/antd-icon';
import { GlobeOutline, LockClosedOutline } from '@vicons/ionicons5';
import { RefreshFilled } from '../../icon/material-icon';
import { throttle } from '../utils/index';
import LaySetting from '@/layout/LaySetting/index.vue';
import FullScreen from './FullScreen.tsx';

import { NGi, NGrid, NBreadcrumb, NBreadcrumbItem, NIcon, NDropdown } from 'naive-ui';
export default defineComponent({
  name: 'LayHeader',
  components: {
    NGi,
    NGrid,
    NIcon,
    NBreadcrumb,
    NBreadcrumbItem,
    NDropdown,
    FullScreen,
    LaySetting,
    RefreshFilled,
    GlobeOutline,
    LockClosedOutline,
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  setup(props, superContext) {
    const store = useStore(),
      route = useRoute();
    let matcheds = ref([] as Array<string>);
    const mobileOptions = inject('mobileOptions') as any;
    const layConfig: any = store.getters['admin/layConfigGetter'];

    watchEffect(() => {
      // 面包屑
      matcheds.value = [];
      const matched = route.matched;
      for (let i = 0; i < matched.length; i++) {
        matcheds.value.push(matched[i].meta.title as string);
      }
    });

    return {
      matcheds,
      layConfig,
      optionsISO: [
        {
          label: '简体中文',
          key: 'zh'
        },
        {
          label: 'English',
          key: 'en'
        }
      ],
      handleSelect: (val: any) => {
        console.log(val);
      },
      // 刷新页面
      handleRefresh() {
        const componentInstances = (route.matched[route.matched.length - 1] as any).instances
          .default;
        componentInstances.handleReload();
      },
      hanldeMenu() {
        if (mobileOptions.isMobile) {
          mobileOptions.showMobileSlidebar = true;
        } else {
          layConfig.collapsed = true;
        }
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.lay-header {
  height: 100%;
  display: flex;
  align-items: center;
}
.flex-center {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.header-left {
  display: flex;
  padding: 0 18px;
  align-items: center;
}
.header-right {
  display: flex;
  padding: 0 18px;
  align-items: center;
  justify-content: flex-end;
}
.header-refresh {
  padding: 0 12px;
  display: inline-flex;
  align-items: center;
}
</style>
