<template>
  <div class="lay-tag-box">
    <NScrollbar
      style="flex: 1"
      ref="scrollbar"
      :vertical-rail-style="{ bottom: 0 }"
      :scrollable="true"
      :x-scrollable="true"
    >
      <mouse-menu :handleMenuSelect="handleMenuSelect">
        <div class="lay-tag" ref="layTag">
          <div
            v-for="(item, index) in tags"
            class="tag-item"
            :key="item.fullPath"
            :class="item.fullPath === $route.fullPath ? 'tag-active' : 'default'"
          >
            <div class="tag-cont">
              <n-button
                class="tag-btn"
                :style="isDarkTheme ? { color: '#fff' } : {}"
                :type="item.fullPath === $route.fullPath ? 'primary' : 'default'"
                @click="handleTagOpen(item.fullPath)"
              >
                <span>{{ item.meta.title }}</span>
                <n-icon
                  v-if="!isAffix(item)"
                  @click.stop="handleTagClose(index)"
                  :class="isDarkTheme ? '' : 'tag-close-hover'"
                  class="tag-close"
                >
                  <close-sharp></close-sharp>
                </n-icon>
              </n-button>
            </div>
          </div>
        </div>
      </mouse-menu>
    </NScrollbar>
    <div class="lay-tag-menu">
      <n-dropdown
        trigger="hover"
        placement="bottom-end"
        :onSelect="handleMenuSelect"
        :options="menuOptions"
      >
        <n-button style="width: 32px; height: 32px">
          <n-icon :size="18">
            <chevron-down-outline />
          </n-icon>
        </n-button>
      </n-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
  import type { RouteLocationRaw } from 'vue-router'
  import { ChevronDownOutline, CloseSharp } from '@vicons/ionicons5'
  import { NButton, NDropdown, NIcon, NScrollbar } from 'naive-ui'
  import { computed, defineComponent, nextTick, onMounted, reactive, ref, watchEffect } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import useThemeStore from '@/store/themeStore.ts'
  import useAdminStore from '@/store/adminStore.ts'
  import { Tag, tagsEffect, tagsScroll } from './utils'
  import { closeMenu, menuOptions } from './utils/tagMenu'
  import MouseMenu from './components/MouseMenu.vue'

  export default defineComponent({
    name: 'LayTag',
    inheritAttrs: false,
    components: {
      NIcon,
      NButton,
      NScrollbar,
      NDropdown,
      ChevronDownOutline,
      CloseSharp,
      MouseMenu
    },
    setup() {
      const router = useRouter(),
        route = useRoute(),
        adminStore = useAdminStore(),
        themeStore = useThemeStore()

      let tags: Array<Tag> = reactive([])
      const scrollbar = ref(null) as any
      const layTag = ref() as any

      const isDarkTheme = computed(() => themeStore.isDarkThemeGetter)

      /**tags监听处理 */
      tagsEffect(tags)

      /**mounted生命周期 */
      onMounted(() => {
        const containerRef = scrollbar.value.scrollbarInstRef.containerRef
        watchEffect(() => {
          tags.length
          route.fullPath
          nextTick(() => {
            // console.log(containerRef)
            tagsScroll(containerRef, layTag.value)
          })
        })
      })

      return {
        tags,
        layTag,
        scrollbar,
        menuOptions,
        isDarkTheme,

        /** 菜单选择事件 */
        handleMenuSelect(key: string) {
          closeMenu(key, tags)
        },
        /**打开tag路由 */
        handleTagOpen(fullPath: RouteLocationRaw) {
          router.push(fullPath)
        },
        /**关闭当前tag */
        handleTagClose(index: number) {
          if (tags[index].fullPath === route.fullPath) {
            if (index === 0) {
              router.push(tags[index + 1].fullPath)
            } else {
              router.push(tags[index - 1].fullPath)
            }
          }
          const [temp] = tags.splice(index, 1)
          adminStore.DEL_KEEPALIVES(temp.name)
        },
        isAffix(tag: Tag) {
          return tag.meta && tag.meta.affix
        }
      }
    }
  })
</script>
<style lang="scss" scoped>
  @import '../styles/mixins.scss';
  $tag-height: 48px;
  .lay-tag-box {
    width: 100%;
    display: flex;
    height: $tag-height;
    box-sizing: border-box;
    position: relative;
  }
  .lay-tag-menu {
    padding: 0 12px;
    height: $tag-height;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    // border-left: 1px solid rgba(226, 226, 226, 0.27);
  }

  .lay-tag {
    padding: 0 10px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: $tag-height;
  }

  .tag-item {
    font-size: 14px;
    padding: 0 5px;

    .tag-btn {
      position: relative;
      box-sizing: border-box;
      // @include percolate(border-color + ', ' + color);
    }

    .tag-close {
      font-size: 14px;
      padding: 5px;
      padding-right: 0;
      z-index: 5;

      &:hover {
        opacity: 0.5;
      }
    }

    ::v-deep(.n-button--default-type) {
      .tag-close-hover {
        color: #000000;
      }
    }
  }
</style>
