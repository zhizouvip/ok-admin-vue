/**
 * 页面刷新组件
 */

import { inject, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { ReloadOutline } from '@vicons/ionicons5';

export default defineComponent({
  name: 'ButtonMenu',
  props: {
    size: {
      type: [Number, String],
      default: 18
    }
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const mobileOptions = inject('mobileOptions') as any;
    const layConfig: any = store.getters['admin/layConfigGetter'];

    function handleRefresh() {
      const componentInstances = (route.matched[route.matched.length - 1] as any).instances.default;
      componentInstances.handleReload();
    }
    return () => (
      <div title="刷新页面" onClick={handleRefresh} class="flex-center btn-content lay-hover">
        <n-icon class="lay-hover" size={props.size}>
          <ReloadOutline />
        </n-icon>
      </div>
    );
  }
});
