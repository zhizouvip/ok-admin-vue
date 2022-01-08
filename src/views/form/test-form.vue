<template>
  <div class="app-container">advanced-form</div>
  <n-input v-model:value="value"></n-input>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'test-form',
    setup() {
      const value = ref('')
      return {
        value
      }
    }
  })
</script>

<style></style>
