<template>
  <div class="box"> {{ hello }} </div>
</template>
<script lang="ts">
  import { ref } from 'vue'
  export default {
    setup() {
      const hello = ref('hello world')
      return { hello }
    }
  }
</script>
<style lang="scss" scoped>
  .box {
    color: #60d659;
  }
</style>
