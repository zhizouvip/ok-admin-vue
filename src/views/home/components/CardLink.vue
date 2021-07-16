<template>
  <n-grid x-gap="12" y-gap="12" cols="8 xs:2 s:4 m:4" responsive="screen">
    <n-gi>
      <div class="bg-white link-cont">
        <n-icon size="24">
          <logo-octocat />
        </n-icon>
        <div class="text">主题色</div>
      </div>
    </n-gi>
    <n-gi v-for="item in appThemeList" :key="item.primaryColor">
      <div class="bg-white link-cont" :style="{ color: item.primaryColor }">
        <n-icon size="24">
          <logo-octocat />
        </n-icon>
        <div class="text">{{ item.primaryColor }}</div>
      </div>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { NCard, NGrid, NGi } from 'naive-ui';
  import { LogoOctocat } from '@vicons/ionicons5';
  import { appThemeList } from '@/setting/theme.ts';
</script>

<style lang="scss" scoped>
  @mixin boxShadow($radius: 0, $bg: white, $shadow-color: rgba(0, 0, 0, 0.2)) {
    background-color: $bg;
    border-radius: $radius + 0px;
    box-shadow: 0 1px 6px $shadow-color;
  }
  .text {
    text-transform: uppercase;
    padding-top: 5px;
  }
  .link-cont {
    background: white;
    text-align: center;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.2s;
    border-radius: 4px;
    padding: 16px;
    color: var(--primary-color);
    &:hover {
      border-color: var(--primary-color-hover);
      transition: all 0.25s;
      box-shadow: 0 1px 6px var(--primary-color-hover);
    }
  }
</style>
