<template>
  <div class="app-container">advanced-form</div>
  <n-input v-model:value="value"></n-input>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'TestForm',
    setup() {
      const value = ref('')
      return {
        value
      }
    }
  })
</script>

<style lang="scss"></style>
