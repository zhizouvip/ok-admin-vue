/**
 * 菜单切换组件
 */

import { inject, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@/icon/antd-icon/index.ts';

export default defineComponent({
  name: 'ButtonMenu',
  props: {
    size: {
      type: [Number, String],
      default: 20
    }
  },
  setup(props) {
    const store = useStore();
    const mobileOptions = inject('mobileOptions') as any;
    const layConfig: any = store.getters['admin/layConfigGetter'];

    function hanldeMenu() {
      if (mobileOptions.isMobile) {
        mobileOptions.showMobileSlidebar = true;
      } else {
        layConfig.collapsed = !layConfig.collapsed;
      }
    }
    return () => (
      <div title="菜单切换" onClick={hanldeMenu} class="flex-center btn-content lay-hover">
        <n-icon size={props.size}>
          <MenuUnfoldOutlined v-show={layConfig.collapsed} />
          <MenuFoldOutlined v-show={!layConfig.collapsed} />
        </n-icon>
      </div>
    );
  }
});
