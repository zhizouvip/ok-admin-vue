import './style.scss';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { NSwitch, NIcon } from 'naive-ui';
import { Sunny, Moon } from '@vicons/ionicons5';

export default defineComponent({
  name: 'SetDark',
  setup() {
    const store = useStore();
    const isDarkTheme = ref(store.getters['theme/isDarkThemeGetter']);

    return {
      isDarkTheme,
      handleDarkTheme(val: boolean) {
        isDarkTheme.value = val;
        store.commit('theme/SET_ISDARKTHEME', val);
      }
    };
  },
  render: function () {
    return (
      <div class="set-dark">
        <NSwitch
          class="set-dark-switch"
          value={this.isDarkTheme}
          onUpdate:value={this.handleDarkTheme}
          v-slots={{
            checked: () => (
              <NIcon class="set-dark-icon">
                <Moon />
              </NIcon>
            ),
            unchecked: () => (
              <NIcon class="set-dark-icon">
                <Sunny />
              </NIcon>
            )
          }}
        ></NSwitch>
      </div>
    );
  }
});
