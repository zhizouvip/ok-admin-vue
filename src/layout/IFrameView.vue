<template>
  <div class="iframe">
    <iframe :src="src" class="iframe-view" frameborder="0"></iframe>
  </div>
</template>
<script setup lang="ts">
  import { defineProps } from 'vue'
  defineProps({
    src: {
      type: String,
      default: 'https://gitee.com/zhizous'
    }
  })
</script>
<style lang="scss">
  .iframe,
  .iframe-view {
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .iframe-view {
    width: 100%;
    height: 100%;
  }
</style>
