<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-loading-bar-provider ref="loadingBar">
      <router-view />
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { watchEffect, watch, ref, nextTick, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { darkTheme, NConfigProvider, NLoadingBarProvider } from 'naive-ui';

const store = useStore();
const route = useRoute();
const loadingBar: any = ref(null);
const themeOverrides = ref(null) as any;

/**设置主题 */
const body: any = document.getElementsByTagName('body')[0];
watchEffect(() => {
  const theme = store.getters['theme/appThemeGetter'];
  themeOverrides.value = {
    common: theme
  };
  body.style.setProperty('--primary-color', theme.primaryColor);
  body.style.setProperty('--primary-color-hover', theme.primaryColorHover);
  body.style.setProperty('--primary-color-pressed', theme.primaryColorPressed);
});

onMounted(() => {
  watch(route, (to) => {
    loadingBar.value?.start();
    nextTick(() => {
      loadingBar.value?.finish();
    });
  });
});
</script>

<style lang="scss"></style>
