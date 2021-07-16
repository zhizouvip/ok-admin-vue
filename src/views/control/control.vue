<template>
  <div class="app-container">
    <div class="box">{{ hello }} - {{ foo }}</div>
    <n-button @click="headerKeep">foo</n-button>
    <n-button type="" @click="headerKeep">foo</n-button>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const hello = ref('控制台');
  const foo = ref('bar');
  const headerKeep = () => {
    foo.value = 'dsafasd' + Math.random() * 100;
  };
</script>
<style lang="scss" scoped>
  .box {
    color: #333333;
  }
</style>
