<template>
  <NConfigProvider :theme="isDarkTheme ? darkTheme : null" :theme-overrides="themeOverrides">
    <NLoadingBarProvider>
      <router-view />
    </NLoadingBarProvider>
  </NConfigProvider>
</template>
<script lang="ts">
import themeStore from './store/themeStore'
import { defineComponent, watchEffect, computed, ref } from 'vue'
import { darkTheme, NConfigProvider, NLoadingBarProvider } from 'naive-ui'
export default defineComponent({
  name: 'APP',
  components: {
    NConfigProvider,
    NLoadingBarProvider
  },
  setup: () => {
    const store = themeStore()
    const themeOverrides: any = ref(null)
    /**是否是暗夜主题 */
    const isDarkTheme = computed(() => store.isDarkThemeGetter)

    /**设置主题 */
    const body = document.getElementsByTagName<'body'>('body')[0]
    watchEffect(() => {
      const theme = store.appThemeGetter
      themeOverrides.value = {
        common: theme
      }
      body.style.setProperty('--primary-color', theme.primaryColor)
      body.style.setProperty('--primary-color-hover', theme.primaryColorHover)
      body.style.setProperty('--primary-color-pressed', theme.primaryColorPressed)
    })

    return {
      darkTheme,
      isDarkTheme,
      themeOverrides
    }
  }
})
</script>

<style lang="scss"></style>
