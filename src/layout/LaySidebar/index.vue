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
        minHeight: '100%',
        boxShadow: '2px 0 6px var(--border-color)'
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
        <div
          class="head"
          :class="{ 'head-inverted': layConfig.sidebarInverted }"
        >
          <img class="img" alt="logo" src="/src/assets/head.png" />
        </div>
        <n-menu
          :indent="22"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :inverted="layConfig.sidebarInverted"
          :options="menuOptions"
          :key="menuConfig.menuKey"
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
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { ref, reactive, watchEffect, defineComponent, inject } from 'vue';
import LayDrawer from './LayDrawer.vue';
import { NLayoutSider, NImage, NMenu, NSpace, NSwitch } from 'naive-ui';
import { useMenu } from './menuOptions';

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
      store = useStore(),
      router = useRouter(),
      route = useRoute();
    const mobileOptions = inject('mobileOptions') as any;
    const layConfig = store.getters['admin/layConfigGetter'];
    const active = ref(true);
    const menuConfig = reactive({
      menuKey: '',
      menuKeys: ['']
    });

    watchEffect(() => {
      menuConfig.menuKey = route.fullPath;
      menuConfig.menuKeys = route.matched.map((item) => {
        return item.path;
      });
    });

    return {
      menuConfig,
      layConfig,
      menuOptions,
      active,
      sliderWidth: 256,

      getSrc: (path: string) => {
        const patha = '../../assets/head.png';
        const modules = import.meta.globEager('../../assets/head.png');
        return modules[patha].default;
      },
      handleUpdateValue: (route: any) => {
        mobileOptions.showMobileSlidebar = false;
        router.push(route);
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.lay-sidebar {
  ::v-deep(.n-menu) {
    .n-menu-item::before {
      left: 0;
      right: 0;
      border-radius: 0;
    }
  }

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
      border-color: #000000;
    }

    .img {
      width: 75%;
      object-fit: scale-down;
    }
  }
}
</style>
