/**
 * 页面全屏组件
 */

import { ref, defineComponent } from 'vue';
import { NIcon } from 'naive-ui';
import { ExpandOutline, ContractOutline } from '@vicons/ionicons5';
export default defineComponent({
  name: 'ButtonFullScreen',
  props: {
    size: {
      type: [Number, String],
      default: 18
    }
  },
  components: { NIcon, ExpandOutline, ContractOutline },
  setup(props) {
    let isFullScreen = ref(false);

    const handleScreen = () => {
      let el: any = '';
      let objFullScreen: any = '';
      if (!isFullScreen.value) {
        el = document.documentElement;
        objFullScreen =
          el.requestFullScreen ||
          el.webkitRequestFullScreen ||
          el.mozRequestFullScreen ||
          el.msRequestFullScreen;
      } else {
        el = document;
        objFullScreen =
          el.cancelFullScreen ||
          el.webkitCancelFullScreen ||
          el.mozCancelFullScreen ||
          el.exitFullScreen;
      }
      if (objFullScreen) {
        isFullScreen.value = !isFullScreen.value;
        objFullScreen.call(el);
      }
    };
    return () => (
      <div title="全屏切换" onClick={handleScreen} class="flex-center btn-content lay-hover">
        <n-icon class="lay-hover" size={props.size}>
          <contract-outline v-show={isFullScreen.value} />
          <expand-outline v-show={!isFullScreen.value} />
        </n-icon>
      </div>
    );
  }
});
