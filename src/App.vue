<template>
  <div :style="styles">
    <n-config-provider :theme-overrides="themeOverrides">
      <n-loading-bar-provider ref="loadingBar">
        <router-view />
      </n-loading-bar-provider>
    </n-config-provider>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { computed, watch, ref, nextTick, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { darkTheme, NConfigProvider, NLoadingBarProvider } from 'naive-ui';

const name = 'App';
const store = useStore();
const route = useRoute();
const loadingBar: any = ref(null);
const themeOverrides = ref({
  common: computed(() => store.getters['theme/appThemeGetter'])
});

const styles = computed(() => {
  const appTheme = store.getters['theme/appThemeGetter'];
  return {
    '--primary-color': appTheme.primaryColor,
    '--primary-color-hover': appTheme.primaryColorHover,
    '--primary-color-pressed': appTheme.primaryColorPressed
  };
}) as CSSProperties;

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
