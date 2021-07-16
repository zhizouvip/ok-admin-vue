<template>
  <div class="padding-bottom-10">
    <n-divider>系统主题</n-divider>
    <n-grid :x-gap="4" :y-gap="4" :cols="8">
      <n-gi v-for="item in store.state.theme.appThemeList" :key="item.primaryColor">
        <div
          @click="handleTheme(item)"
          class="item"
          :style="{ backgroundColor: item.primaryColor }"
        >
          <n-icon v-show="item === store.state.theme.appTheme">
            <CheckmarkSharp />
          </n-icon>
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { NDivider, NGrid, NGi, NIcon } from 'naive-ui';
import { CheckmarkSharp } from '@vicons/ionicons5';
export default defineComponent({
  name: 'SetTheme',
  components: {
    NGrid,
    NGi,
    NIcon,
    NDivider,
    CheckmarkSharp
  },
  setup() {
    const store = useStore();
    return {
      store,
      handleTheme(themeColor: string) {
        store.commit('theme/SET_APPTHEME', themeColor);
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.item {
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  color: #ffffff;
}
</style>
