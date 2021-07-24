<template>
  <div class="app-container">
    <div class="foo">{{ foo }}</div>
    <div>{{ bar }}</div>
    <n-button @click="headerKeep">切换</n-button>
    <div class="padding">
      <n-button @click="toggleTagShow">测试{{ store.state.admin.layConfig }}</n-button>
    </div>
    <div style="width: 350px">
      <router-link to="/asdfsa" custom>
        <div>阿斯顿发简历卡萨丁了</div>
      </router-link>
      文本颜色：
      <n-input v-model:value="color" />背景颜色：
      <n-input v-model:value="bgColor" />
    </div>
    <div class="user-info">个人中心</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const hello = ref(5);

const foo = ref('user');
const bar = ref('bar');
const store = useStore();
const headerKeep = () => {
  foo.value = 'dsafasd' + Math.random() * 100;
};
const layConfig = store.getters['admin/layConfigGetter'];
const toggleTagShow = () => {
  layConfig['tagShow'] = !layConfig['tagShow'];
};
const headerVuex = () => {
  const conf = store.getters['admin/layConfigGetter'];
  store.commit('admin/SET_LAYCONFIG', {
    key: 'collapsed',
    value: !conf.collapsed
  });
}
const color = ref('#ffffff');
const bgColor = ref('red');
</script>
<style lang="scss" scoped>
.padding {
  padding: 20px 0;
}
.user-info {
  color: v-bind(color);
  background-color: v-bind(bgColor);
}
</style>
