<template>
  <div class="padding-bottom-10">
    <n-divider>导航栏风格</n-divider>
    <!-- 左边栏主题 -->
    <n-grid class="sidebar-thenme" x-gap="12" :cols="3">
      <!-- 左边栏暗色主题 -->
      <n-gi class="thenme">
        <n-tooltip trigger="hover">
          <template #trigger>
            <div @click="layConfig.sidebarInverted = true" class="thenme-checkbox pointer">
              <img :src="navThemeDark" alt="navThemeDark" />
            </div>
          </template>
          暗色侧边栏
        </n-tooltip>
        <div v-show="layConfig.sidebarInverted" class="checked">
          <n-icon color="#18a058" size="10">
            <Ellipse />
          </n-icon>
        </div>
      </n-gi>
      <!-- 左边栏亮色主题 -->
      <n-gi class="thenme">
        <n-tooltip trigger="hover">
          <template #trigger>
            <div @click="layConfig.sidebarInverted = false" class="thenme-checkbox pointer">
              <img :src="navThemeLight" alt="navThemeLight" />
            </div>
          </template>
          亮色侧边栏
        </n-tooltip>
        <div v-show="!layConfig.sidebarInverted" class="checked">
          <n-icon color="#18a058" size="10">
            <Ellipse />
          </n-icon>
        </div>
      </n-gi>
    </n-grid>

    <!-- 头部主题 -->
    <n-grid class="header-thenme" x-gap="12" :cols="3">
      <!-- 顶栏亮色主题 -->
      <n-gi class="thenme">
        <n-tooltip trigger="hover">
          <template #trigger>
            <div @click="layConfig.headerInverted = false" class="thenme-checkbox pointer">
              <img :src="navThemeDark" alt="navThemeDark" />
            </div>
          </template>
          亮色顶栏
        </n-tooltip>
        <div v-show="!layConfig.headerInverted" class="checked">
          <n-icon color="#18a058" size="10">
            <Ellipse />
          </n-icon>
        </div>
      </n-gi>

      <!-- 顶栏暗色主题 -->
      <n-gi class="thenme">
        <n-tooltip trigger="hover">
          <template #trigger>
            <div @click="layConfig.headerInverted = true" class="thenme-checkbox pointer">
              <img :src="headerThemeDark" alt="headerThemeDark" />
            </div>
          </template>
          暗色顶栏
        </n-tooltip>
        <div v-show="layConfig.headerInverted" class="checked">
          <n-icon color="#18a058" size="10">
            <Ellipse />
          </n-icon>
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import navThemeDark from './svg/nav-theme-dark.svg';
  import navThemeLight from './svg/nav-theme-light.svg';
  import headerThemeDark from './svg/header-theme-dark.svg';
  import { EllipsisVertical, Ellipse } from '@vicons/ionicons5';
  import { NTooltip, NDrawer, NDrawerContent, NGrid, NGi, NIcon, NDivider } from 'naive-ui';
  export default defineComponent({
    name: 'SetNavigation',
    components: {
      EllipsisVertical,
      Ellipse,
      NTooltip,
      NDrawer,
      NDrawerContent,
      NGrid,
      NGi,
      NIcon,
      NDivider
    },
    setup() {
      const store = useStore();
      const layConfig = store.getters['admin/layConfigGetter'];
      return {
        layConfig,
        navThemeDark,
        navThemeLight,
        headerThemeDark
      };
    }
  });
</script>

<style lang="scss" scoped>
  .setting-btn {
    padding: 5px;
  }
  .thenme {
    padding-bottom: 10px;
  }
  .thenme-checkbox,
  .checked {
    display: flex;
    justify-content: center;
  }
  .thenme-checkbox {
    padding-bottom: 5px;
  }
</style>
