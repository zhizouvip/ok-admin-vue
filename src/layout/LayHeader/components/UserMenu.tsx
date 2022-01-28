/**
 * 头像
 */

import '../index.scss'
import { useRouter } from 'vue-router'
import useThemeStore from '@/store/themeStore'
import useUserStore from '@/store/userStore'
import { defineComponent, Component, h, computed } from 'vue'
import { NAvatar, NDropdown, NIcon } from 'naive-ui'
import { PersonOutline, Power } from '@vicons/ionicons5'

const icon = (icon: Component) => () =>
  h(NIcon, null, {
    default: () => h(icon)
  })

export default defineComponent({
  name: 'UserMenu',
  setup() {
    const router = useRouter()
    const themeStore = useThemeStore()
    const userStore = useUserStore()
    const isDarkTheme = computed(() => themeStore.isDarkThemeGetter)
    const userMenus = [
      {
        label: '个人中心',
        icon: icon(PersonOutline),
        key: 'user'
      },
      {
        type: 'divider',
        key: 'd1'
      },
      {
        label: '退出登录',
        key: 'exit',
        icon: icon(Power)
      }
    ]
    const handleSelect = (key: string) => {
      console.log(key)
      if (key === 'exit') {
        router.replace('/login')
      }
    }
    return {
      isDarkTheme,
      userMenus,
      userStore,
      handleSelect
    }
  },
  render: function () {
    const { userInfo } = this.userStore

    return (
      <NDropdown trigger="hover" onSelect={this.handleSelect} options={this.userMenus}>
        <div class={`flex-center btn-content lay-hover ${this.isDarkTheme ? 'dark-hover' : ''}`}>
          <NAvatar circle size="small" src={userInfo.avatar}></NAvatar>
          <div class="padding-left-10">{userInfo.userName}</div>
        </div>
      </NDropdown>
    )
  }
})
