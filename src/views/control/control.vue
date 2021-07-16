<template>
  <div class="app-container">
    <div class="box">{{ hello }} - {{ foo }}</div>
    <div>
      <n-button @click="headerKeep">foo</n-button>
    </div>
    <div>
      <n-button @click="toggleTagShow">toggleTagShow</n-button>
    </div>
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
