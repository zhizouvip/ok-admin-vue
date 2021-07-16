<template>
  <n-drawer
    class="lay-drawer-slider"
    v-if="mobileOptions.isMobile"
    v-model:show="mobileOptions.showMobileSlidebar"
    :style="{
      backgroundColor: layConfig.sidebarInverted ? '#001428' : ''
    }"
    :native-scrollbar="false"
    :width="sliderWidth"
    :placement="'left'"
  >
    <slot />
  </n-drawer>
  <slot v-if="!mobileOptions.isMobile" />
</template>
<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
import { useStore } from 'vuex';
import { NDrawer } from 'naive-ui';
import { globalWitchEffect } from '../utils/index';
export default defineComponent({
  name: 'LayDrawer',
  props: {
    sliderWidth: {
      type: Number,
      default: 256
    }
  },
  components: {
    NDrawer
  },
  setup() {
    const store = useStore();
    const layConfig = store.getters['admin/layConfigGetter'];
    const mobileOptions = inject('mobileOptions') as any;

    /**页面宽度监听*/
    globalWitchEffect((innerWidth: number) => {
      if (innerWidth <= 768) {
        mobileOptions.showMobileSlidebar = false;
        mobileOptions.isMobile = true;
        layConfig.collapsed = false;
      } else {
        mobileOptions.isMobile = false;
      }
    });

    return {
      layConfig,
      mobileOptions
    };
  }
});
</script>
<style lang="scss">
.lay-drawer-slider {
  .n-scrollbar > .n-scrollbar-container > .n-scrollbar-content {
    height: 100%;
  }
}
</style>
