import { ref, defineComponent } from 'vue';
import { NIcon } from 'naive-ui';
import { ExpandOutline, ContractOutline } from '@vicons/ionicons5';
export default defineComponent({
    name: 'FullScreen',
    components: { NIcon, ExpandOutline, ContractOutline },
    setup() {
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
            <n-icon class="lay-hover" onClick={handleScreen} size="20">
                <contract-outline v-show={isFullScreen.value} />
                <expand-outline v-show={!isFullScreen.value} />
            </n-icon>
        )
    }
});
