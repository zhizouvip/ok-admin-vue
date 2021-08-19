import './style.scss';
import { defineComponent } from 'vue';
import useThemeStore from '@/store/themeStore.ts';
import { NDivider, NGrid, NGi, NIcon } from 'naive-ui';
import { CheckmarkSharp } from '@vicons/ionicons5';
export default defineComponent({
  name: 'SetTheme',
  setup() {
    const themeStore = useThemeStore();
    return {
      themeStore,
      handleTheme(themeColor: any) {
        themeStore.SET_APPTHEME(themeColor);
      }
    };
  },
  render: function () {
    const appTheme = this.themeStore.appTheme;
    const appThemeList = this.themeStore.appThemeList;

    return (
      <div class="set-theme padding-bottom-10">
        <NDivider>系统主题</NDivider>
        <NGrid x-gap={4} y-gap={4} cols={8}>
          {Object.keys(appThemeList).map((key: any) => {
            return (
              <NGi key={key}>
                <div
                  class="item"
                  onClick={() => this.handleTheme(appThemeList[key])}
                  style={{ backgroundColor: appThemeList[key].primaryColor }}
                >
                  <NIcon v-show={appThemeList[key].primaryColor === appTheme.primaryColor}>
                    <CheckmarkSharp />
                  </NIcon>
                </div>
              </NGi>
            );
          })}
        </NGrid>
      </div>
    );
  }
});
