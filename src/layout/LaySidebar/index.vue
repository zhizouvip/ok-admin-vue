<template>
  <lay-drawer
    v-model:show="active"
    :style="{
      backgroundColor: layConfig.sidebarInverted ? '#001428' : ''
    }"
    :native-scrollbar="false"
    :width="sliderWidth"
    :placement="'left'"
  >
    <n-layout-sider
      :style="{
        zIndex: 999,
        minHeight: '100%',
        boxShadow: '0 0 8px var(--border-color)'
      }"
      :width="sliderWidth"
      :native-scrollbar="false"
      collapse-mode="width"
      :collapsed="layConfig.collapsed"
      :inverted="layConfig.sidebarInverted"
      :collapsed-width="64"
      bordered
    >
      <div class="lay-sidebar">
        <div class="head" :class="{ 'head-inverted': isDarkTheme || layConfig.sidebarInverted }">
          <img class="img" alt="logo" src="/src/assets/head.png" />
        </div>
        <n-menu
          :key="menuConfig.menuKey"
          :indent="22"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :inverted="layConfig.sidebarInverted"
          :options="menuOptions"
          :default-value="menuConfig.menuKey"
          :expanded-keys="menuConfig.menuKeys"
          @update:value="handleUpdateValue"
          @update:expanded-keys="menuConfig.menuKeys = $event"
        />
      </div>
    </n-layout-sider>
  </lay-drawer>
</template>

<script lang="ts">
  import useThemeStore from '@/store/themeStore'
  import useAdminStore from '@/store/adminStore'
  import { useRouter, useRoute } from 'vue-router'
  import { ref, reactive, computed, watchEffect, defineComponent, inject } from 'vue'
  import { NLayoutSider, NImage, NMenu, NSpace, NSwitch } from 'naive-ui'
  import { useMenu } from './menuOptions'
  import { isURL } from '../utils/index'
  import LayDrawer from './LayDrawer.vue'

  export default defineComponent({
    name: 'LaySidebar',
    components: {
      LayDrawer,
      NLayoutSider,
      NImage,
      NMenu,
      NSpace,
      NSwitch
    },
    setup(props, superContext) {
      const menuOptions = useMenu(),
        themeStore = useThemeStore(),
        adminStore = useAdminStore(),
        router = useRouter(),
        route = useRoute()
      const mobileOptions = inject('mobileOptions') as any
      const layConfig = adminStore.layConfigGetter
      const isDarkTheme = computed(() => themeStore.isDarkThemeGetter)
      const active = ref(true)
      const menuConfig = reactive({
        menuKey: '/form/test-form/test1',
        menuKeys: ['/form', '/form/test-form', '/form/test-form/test1']
      })

      watchEffect(() => {
        menuConfig.menuKey = route.fullPath
        const strArr = route.fullPath.split('/')

        menuConfig.menuKeys = strArr.reduce((accumulator, currentValue) => {
          if (currentValue) {
            accumulator.push((accumulator[accumulator.length - 1] || '') + '/' + currentValue)
          }
          return accumulator
        }, [] as Array<string>)
      })

      return {
        isDarkTheme,
        menuConfig,
        layConfig,
        menuOptions,
        active,
        sliderWidth: 240,

        getSrc: (path: string) => {
          const patha = '../../assets/head.png'
          const modules = import.meta.globEager('../../assets/head.png')
          return modules[patha].default
        },
        handleUpdateValue: (route: any) => {
          mobileOptions.showMobileSlidebar = false
          if (isURL(route)) {
            const link = document.createElement('a')
            link.href = route
            link.target = '_blank'
            link.click()
          } else {
            router.push(route)
          }
        }
      }
    }
  })
</script>

<style lang="scss" scoped>
  .lay-sidebar {
    .head {
      overflow: hidden;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      border-bottom: solid 1px rgb(239, 239, 245);
      transition: 0.25s border-bottom-color;

      &-inverted {
        border-color: rgba(255, 255, 255, 0.09);
      }

      .img {
        width: 75%;
        object-fit: scale-down;
      }
    }
  }
</style>
