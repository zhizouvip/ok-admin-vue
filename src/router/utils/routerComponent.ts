import { h, ref, createVNode, defineComponent, nextTick } from 'vue'
import { useLoadingBar } from 'naive-ui'
import routerReload from './routerReload.vue'

/**
 * 功能如下
 * 1.处理transition过渡组件无法嵌套多层元素的问题
 * 2.处理没有给组件指定name值导致页面keepAlive缓存问题
 * 3.刷新页面处理
 * @returns
 */
export default function (component: any) {
  return () => {
    return new Promise((res) => {
      component().then((comm: any) => {
        const name = (comm.default.name || 'okAdminMain') + '$' + Date.now()
        const tempComm = defineComponent({
          name,
          setup() {
            const isReload = ref(false)
            const loadingBar = useLoadingBar()
            let timeOut: any = null
            const handleReload = () => {
              isReload.value = true
              loadingBar?.start()
              timeOut && clearTimeout(timeOut)
              timeOut = setTimeout(() => {
                nextTick(() => {
                  isReload.value = false
                  loadingBar?.finish()
                })
              }, 260)
            }
            return {
              isReload,
              handleReload
            }
          },
          render: function () {
            if (this.isReload) {
              // return h('div');
              return h(routerReload)
            } else {
              return h('div', { class: 'ok-admin-main' }, [createVNode(comm.default)])
            }
          }
        })
        res(tempComm)
      })
    })
  }
}

export const reloadComponent = (component: any) => {
  const name = 'okAdminMain$' + Date.now()
  return defineComponent({
    name,
    setup() {
      const isReload = ref(false)
      const loadingBar = useLoadingBar()
      let timeOut: any = null
      const handleReload = () => {
        isReload.value = true
        loadingBar?.start()
        timeOut && clearTimeout(timeOut)
        timeOut = setTimeout(() => {
          nextTick(() => {
            isReload.value = false
            loadingBar?.finish()
          })
        }, 260)
      }
      return {
        isReload,
        handleReload
      }
    },
    render: function () {
      if (this.isReload) {
        return h(routerReload)
      } else {
        return component
      }
    }
  })
}
