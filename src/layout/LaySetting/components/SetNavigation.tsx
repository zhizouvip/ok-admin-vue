import './style.scss';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import navThemeDark from '../svg/nav-theme-dark.svg';
import navThemeLight from '../svg/nav-theme-light.svg';
import headerThemeDark from '../svg/header-theme-dark.svg';
import { Ellipse } from '@vicons/ionicons5';
import { NTooltip, NGrid, NGi, NIcon, NDivider, dividerDark } from 'naive-ui';
export default defineComponent({
  name: 'SetNavigation',
  setup() {
    const store = useStore();
    const layConfig = store.getters['admin/layConfigGetter'];
    return {
      layConfig,
      navThemeDark,
      navThemeLight,
      headerThemeDark
    };
  },
  render: function () {
    return (
      <div class="set-Navigation padding-bottom-10">
        <NDivider>导航栏风格</NDivider>
        {/* 左边栏主题 */}
        <NGrid class="sidebar-thenme" x-gap="12" cols="3">
          {/* 左边栏暗色主题 */}
          <NGi class="thenme">
            <NTooltip
              trigger="hover"
              v-slots={{
                trigger: (
                  <div
                    onClick={() => (this.layConfig.sidebarInverted = true)}
                    class="thenme-checkbox pointer"
                  >
                    <img src={navThemeDark} alt="navThemeDark" />
                  </div>
                )
              }}
            >
              暗色侧边栏
            </NTooltip>
            <div v-show={this.layConfig.sidebarInverted} class="checked">
              <NIcon class="checked-color" size="10">
                <Ellipse />
              </NIcon>
            </div>
          </NGi>
          {/* 左边栏亮色主题 */}
          <NGi class="thenme">
            <NTooltip
              trigger="hover"
              v-slots={{
                trigger: (
                  <div
                    onClick={() => (this.layConfig.sidebarInverted = false)}
                    class="thenme-checkbox pointer"
                  >
                    <img src={navThemeLight} alt="navThemeLight" />
                  </div>
                )
              }}
            >
              亮色侧边栏
            </NTooltip>
            <div v-show={!this.layConfig.sidebarInverted} class="checked">
              <NIcon class="checked-color" size="10">
                <Ellipse />
              </NIcon>
            </div>
          </NGi>
        </NGrid>

        {/* 头部主题 */}
        <NGrid class="header-thenme" x-gap="12" cols="3">
          {/* 顶栏亮色主题 */}
          <NGi class="thenme">
            <NTooltip
              trigger="hover"
              v-slots={{
                trigger: (
                  <div
                    onClick={() => (this.layConfig.headerInverted = false)}
                    class="thenme-checkbox pointer"
                  >
                    <img src={this.navThemeDark} alt="navThemeDark" />
                  </div>
                )
              }}
            >
              亮色顶栏
            </NTooltip>
            <div v-show={!this.layConfig.headerInverted} class="checked">
              <NIcon class="checked-color" size="10">
                <Ellipse />
              </NIcon>
            </div>
          </NGi>

          {/* 顶栏暗色主题 */}
          <NGi class="thenme">
            <NTooltip
              trigger="hover"
              v-slots={{
                trigger: (
                  <div
                    onClick={() => (this.layConfig.headerInverted = true)}
                    class="thenme-checkbox pointer"
                  >
                    <img src={this.navThemeDark} alt="navThemeDark" />
                  </div>
                )
              }}
            >
              暗色顶栏
            </NTooltip>
            <div v-show={this.layConfig.headerInverted} class="checked">
              <NIcon class="checked-color" size="10">
                <Ellipse />
              </NIcon>
            </div>
          </NGi>
        </NGrid>
      </div>
    );
  }
});
