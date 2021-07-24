<template>
  <div @contextmenu="handleContextMenu">
    <slot />
  </div>
  <n-dropdown
    placement="bottom-start"
    :onSelect="handleMenuSelect"
    :x="x"
    :y="y"
    :options="menuOptions"
    :show="showDropdown"
    :on-clickoutside="onClickoutside"
  />
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import { NDropdown } from 'naive-ui';
import { menuOptions } from '../utils/tagMenu.ts';
export default defineComponent({
  name: 'MouseMenu',
  props: ['handleMenuSelect'],
  components: {
    NDropdown
  },
  setup(props) {
    const showDropdown = ref(false)
    const xRef = ref(0)
    const yRef = ref(0)
    return {
      menuOptions,
      showDropdown,
      x: xRef,
      y: yRef,
      /** 菜单选择事件 */
      handleMenuSelect(key: string) {
        props.handleMenuSelect(key)
        showDropdown.value = false
      },
      handleBlur() {
        showDropdown.value = false
      },
      handleContextMenu(e: MouseEvent) {
        e.preventDefault()
        showDropdown.value = true
        xRef.value = e.clientX
        yRef.value = e.clientY
      },
      onClickoutside(e: MouseEvent) {
        showDropdown.value = false
      }
    }
  }
})
</script>