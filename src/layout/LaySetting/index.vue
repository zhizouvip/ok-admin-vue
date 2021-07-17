<template>
  <n-drawer>
    <n-drawer-content
      :body-style="{ overflow: 'hidden' }"
      :body-content-style="{ padding: 0 }"
      title="系统配置"
    >
      <n-scrollbar class="set-scrollbar" :scrollable="true">
        <div class="setting-box">
          <set-theme />
          <set-navigation />
          <set-other />
        </div>
      </n-scrollbar>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
import { SettingsOutline } from '@vicons/ionicons5';
import { defineComponent } from 'vue';
import { NDrawer, NDrawerContent, NScrollbar } from 'naive-ui';
import SetNavigation from './components/SetNavigation.vue';
import SetTheme from './components/SetTheme.vue';
import SetOther from './components/SetOther.vue';
export default defineComponent({
  name: 'LaySetting',
  props: {
    size: {
      type: [Number, String],
      default: 18
    }
  },
  components: {
    NDrawer,
    NDrawerContent,
    NScrollbar,
    SetTheme,
    SetOther,
    SetNavigation,
    SettingsOutline
  }
});
</script>

<style lang="scss" scoped>
.setting-box {
  padding: 16px 24px;
}
</style>
