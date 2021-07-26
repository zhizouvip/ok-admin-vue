<!-- 
  * @describe: 主内容区组件
-->

<template>
  <router-view v-slot="{ Component, route }">
    <transition appear :name="route.meta.transition || 'fade'" mode="out-in">
      <keep-alive v-if="keepAlives" :include="keepAlives">
        <component :key="route.fullPath" :is="Component" />
      </keep-alive>
      <component v-else :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
</template>
<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'layMain',
  setup() {
    const store = useStore();
    const keepAlives = store.getters['admin/keepAlivesGetter'];

    return { keepAlives };
  }
});
</script>
<style lang="scss" scoped>
</style>
