<template>
  <div class="app-container">
    <n-grid cols="1" x-gap="12" y-gap="12" responsive="screen">
      <n-gi>
        <div class="box">{{ hello }} - {{ foo }}</div>
      </n-gi>
      <n-gi>
        <n-button type="primary" @click="headerKeep">foo</n-button>
      </n-gi>
      <n-gi>
        <n-input style="width: 200px"></n-input>
      </n-gi>
    </n-grid>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const hello = ref('控制台');
const foo = ref('bar');
const headerKeep = () => {
  foo.value = 'dsafasd' + Math.random() * 100;
};
const layConfig = store.getters['admin/layConfigGetter'];
const toggleTagShow = () => {
  layConfig['tagShow'] = !layConfig['tagShow'];
};
</script>
<style lang="scss" scoped>
.box {
  color: #333333;
}
</style>
