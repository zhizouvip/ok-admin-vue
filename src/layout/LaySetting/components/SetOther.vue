<template>
  <div class="padding-bottom-10">
    <n-divider>其他设置</n-divider>
    <div class="set-other">
      <div class="tit">开启多页标签</div>
      <n-switch v-model:value="layConfig.tagShow" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { NDivider, NSwitch } from 'naive-ui';
export default defineComponent({
  name: 'SetOther',
  components: {
    NDivider,
    NSwitch
  },
  setup() {
    const store = useStore();
    const layConfig = store.getters['admin/layConfigGetter'];
    return {
      layConfig
    };
  }
});
</script>
<style lang="scss" scoped>
.set-other {
  display: flex;
  justify-content: space-between;
  .tit {
    font-size: 14px;
  }
}
</style>
