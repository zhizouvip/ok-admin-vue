<template>
  <div class="app-container">
    <div class="foo">{{ foo }}</div>
    <div>{{ bar }}</div>
    <n-button @click="headerKeep">切换</n-button>
    <div class="padding">
      <n-button @click="headerVuex">测试{{ store.state.admin.layConfig }}</n-button>
    </div>
    <div style="width: 350px">
      <n-input />
    </div>
  </div>
</template>
<script lang="ts">
  import { ref, defineComponent } from 'vue';
  import { useStore } from 'vuex';
  export default defineComponent({
    name: 'user',
    setup() {
      const hello = ref(5);
      const foo = ref('user');
      const bar = ref('bar');
      const store = useStore();
      const headerKeep = () => {
        foo.value = 'dsafasd' + Math.random() * 100;
      };
      console.log(foo);

      return {
        foo,
        bar,
        headerKeep,
        store,
        headerVuex: () => {
          const conf = store.getters['admin/layConfigGetter'];
          store.commit('admin/SET_LAYCONFIG', {
            key: 'collapsed',
            value: !conf.collapsed
          });
        }
      };
    }
  });
</script>
<style lang="scss" scoped>
  .padding {
    padding: 20px 0;
  }
</style>
