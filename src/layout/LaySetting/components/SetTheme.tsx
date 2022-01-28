import './style.scss'
import { defineComponent } from 'vue'
import useThemeStore from '@/store/themeStore'
import { NDivider, NGrid, NGi, NIcon } from 'naive-ui'
import { CheckmarkSharp } from '@vicons/ionicons5'
export default defineComponent({
  name: 'SetTheme',
  setup() {
    const themeStore = useThemeStore()
    return {
      themeStore,
      handleTheme(themeColor: any) {
        themeStore.SET_APPTHEME(themeColor)
      }
    }
  },
  render: function () {
    const appTheme = this.themeStore.appTheme
    const appThemeList = this.themeStore.appThemeList

    return (
      <div class="set-theme padding-bottom-10">
        <NDivider>系统主题</NDivider>
        <NGrid x-gap={4} y-gap={4} cols={8}>
          {Object.values(appThemeList).map((value, index) => {
            return (
              <NGi key={index}>
                <div
                  class="item"
                  onClick={() => this.handleTheme(value)}
                  style={{ backgroundColor: value.primaryColor }}
                >
                  <NIcon v-show={value.primaryColor === appTheme.primaryColor}>
                    <CheckmarkSharp />
                  </NIcon>
                </div>
              </NGi>
            )
          })}
        </NGrid>
      </div>
    )
  }
})
