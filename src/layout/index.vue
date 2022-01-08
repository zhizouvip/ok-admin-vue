<template>
  <n-layout class="layout-container" has-sider>
    <!--  侧边栏   -->
    <lay-sidebar></lay-sidebar>
    <n-layout style="height: 100%">
      <!--  头部   -->
      <n-layout-header
        position="absolute"
        style="height: 64px; overflow: hidden; z-index: 9"
        :native-scrollbar="false"
        :inverted="layConfig.headerInverted"
        bordered
      >
        <lay-header></lay-header>
      </n-layout-header>

      <!-- tag栏 -->
      <n-layout-header
        v-if="layConfig.tagShow"
        position="absolute"
        bordered
        style="height: 48px; left: 0; top: 64px; right: 0"
      >
        <lay-tag></lay-tag>
      </n-layout-header>

      <!--   主内容区   -->
      <n-layout-content
        class="layout-main"
        position="absolute"
        :native-scrollbar="false"
        :style="{
          bottom: 0,
          zIndex: 8,
          transition: 'top .25s',
          top: layConfig.tagShow ? '112px' : '64px',
          background: isDarkTheme ? 'transparent' : '#f0f2f5'
        }"
      >
        <lay-main></lay-main>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
  import useThemeStore from '@/store/themeStore.ts'
  import useAdminStore from '@/store/adminStore.ts'
  import { useRoute } from 'vue-router'
  import { defineComponent, provide, reactive, computed, ref, nextTick, watch } from 'vue'
  import { NLayout, NLayoutHeader, NLayoutContent, NLayoutSider, useLoadingBar } from 'naive-ui'
  import LayHeader from './LayHeader/index.vue'
  import LaySidebar from './LaySidebar/index.vue'
  import LayTag from './LayTag/index.vue'
  import LayMain from './LayMain/index.vue'

  export default defineComponent({
    name: 'Layout',
    components: {
      LayMain,
      LayTag,
      LaySidebar,
      LayHeader,
      NLayout,
      NLayoutHeader,
      NLayoutContent,
      NLayoutSider
    },
    setup(props, superContext) {
      const themeStore = useThemeStore()
      const adminStore = useAdminStore()

      const route = useRoute()
      const routerShow = ref(false)
      const layConfig = adminStore.layConfigGetter
      const isDarkTheme = computed(() => themeStore.isDarkThemeGetter)

      /**provide*/
      const mobileOptions = reactive({
        isMobile: false, // 是否处于移动端
        showMobileSlidebar: false // 显示和隐藏移动端的Slidebar
      })
      provide('mobileOptions', mobileOptions)

      /**加载loading*/
      const loadingBar = useLoadingBar()
      loadingBar.start()
      watch(
        route,
        (to) => {
          loadingBar.start()
          nextTick(() => {
            setTimeout(() => {
              loadingBar.finish()
            }, 200)
          })
        },
        {
          immediate: true
        }
      )

      return {
        isDarkTheme,
        routerShow,
        layConfig
      }
    }
  })
</script>

<style lang="scss">
  @import './styles/layout.scss';

  /**主内容 */
  .layout-main {
    .n-scrollbar-container,
    .n-scrollbar-content {
      width: 100%;
      min-height: 100%;
    }
    // 垂直滚动条
    .n-scrollbar > .n-scrollbar-rail.n-scrollbar-rail--vertical {
      right: 0;
    }
  }
</style>
