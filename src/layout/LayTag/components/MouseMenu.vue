<template>
  <div @contextmenu="onContextMenu">
    <slot />
  </div>
  <n-dropdown
    placement="bottom-start"
    :x="x"
    :y="y"
    :on-select="onMenuSelect"
    :on-clickoutside="onClickoutside"
    :options="menuOptions"
    :show="showDropdown"
  />
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { NDropdown } from 'naive-ui'
  import { menuOptions } from '../utils/tagMenu'
  export default defineComponent({
    name: 'MouseMenu',
    components: {
      NDropdown
    },
    props: {
      handleMenuSelect: {
        type: Function,
        required: true
      }
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
        onMenuSelect(key: string) {
          props.handleMenuSelect(key)
          showDropdown.value = false
        },
        handleBlur() {
          showDropdown.value = false
        },
        onContextMenu(e: MouseEvent) {
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
