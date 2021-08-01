/**
 * 页面刷新的组件
 */

import { defineComponent } from 'vue';
import { ReloadOutline } from '@vicons/ionicons5';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'ButtonMenu',
  props: {
    size: {
      type: [Number, String],
      default: 18
    }
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    let componentInstances: any = ''; // 当前路由页面组件实例

    router.afterEach((to) => {
      componentInstances = (to.matched[to.matched.length - 1] as any).instances.default;
    });

    function handleRefresh() {
      componentInstances =
        componentInstances || (route.matched[route.matched.length - 1] as any).instances.default;
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
