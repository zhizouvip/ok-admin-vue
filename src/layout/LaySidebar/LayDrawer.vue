<template>
  <n-drawer
    v-if="mobileOptions.isMobile"
    v-model:show="mobileOptions.showMobileSlidebar"
    class="lay-drawer-slider"
    :style="{
      backgroundColor: layConfig.sidebarInverted ? '#001428' : ''
    }"
    :native-scrollbar="false"
    :width="width"
    :placement="'left'"
  >
    <slot />
  </n-drawer>
  <slot v-if="!mobileOptions.isMobile" />
</template>
<script lang="ts">
  import { defineComponent, inject } from 'vue'
  import useAdminStore from '@/store/adminStore'
  import { NDrawer } from 'naive-ui'
  import { globalWitchEffect } from '../utils/index'
  export default defineComponent({
    name: 'LayDrawer',
    components: {
      NDrawer
    },
    props: {
      width: {
        type: Number,
        default: 256
      }
    },
    setup() {
      const adminStore = useAdminStore()
      const layConfig = adminStore.layConfigGetter
      const mobileOptions = inject('mobileOptions') as any

      /** 页面宽度监听 */
      globalWitchEffect((innerWidth: number) => {
        if (innerWidth <= 768) {
          mobileOptions.showMobileSlidebar = false
          mobileOptions.isMobile = true
          layConfig.collapsed = false
        } else {
          mobileOptions.isMobile = false
        }
      })

      return {
        layConfig,
        mobileOptions
      }
    }
  })
</script>
<style lang="scss">
  .lay-drawer-slider {
    .n-scrollbar > .n-scrollbar-container > .n-scrollbar-content {
      height: 100%;
    }
  }
</style>
