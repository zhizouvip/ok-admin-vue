/**
 * 头像
 */

import '../index.scss';
import { useRouter } from 'vue-router';
import { defineComponent, Component, h } from 'vue';
import { NAvatar, NDropdown, NIcon } from 'naive-ui';
import { PersonOutline, Power } from '@vicons/ionicons5';
import avatar from '@/assets/avatar.png';

const icon = (icon: Component) => () =>
  h(NIcon, null, {
    default: () => h(icon)
  });

export default defineComponent({
  name: 'UserMenu',
  setup() {
    const router = useRouter();
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
    ];
    const handleSelect = (key: string) => {
      console.log(key);
      if (key === 'exit') {
        router.replace('/login');
      }
    };
    return {
      userMenus,
      handleSelect
    };
  },
  render: function () {
    return (
      <NDropdown trigger="hover" onSelect={this.handleSelect} options={this.userMenus}>
        <div class="flex-center btn-content lay-hover">
          <NAvatar circle size="small" src={avatar}></NAvatar>
          <div class="padding-left-10">Admin</div>
        </div>
      </NDropdown>
    );
  }
});
