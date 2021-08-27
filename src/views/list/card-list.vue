<template>
  <div class="box"> {{ hello }} </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const hello = ref('hello world');
</script>
<style lang="scss" scoped>
  .box {
    color: #60d659;
  }
</style>
