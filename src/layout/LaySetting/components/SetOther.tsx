import './style.scss'
import { defineComponent } from 'vue'
import useAdminStore from '@/store/adminStore.ts'
import { NDivider, NSwitch } from 'naive-ui'
export default defineComponent({
  name: 'SetOther',
  setup() {
    const adminStore = useAdminStore()
    const layConfig = adminStore.layConfigGetter
    return {
      layConfig
    }
  },
  render: function () {
    return (
      <div class="padding-bottom-10">
        <NDivider>其他设置</NDivider>
        <div class="set-other">
          <div class="tit">开启多页标签</div>
          <NSwitch
            value={this.layConfig.tagShow}
            onUpdate:value={(val) => (this.layConfig.tagShow = val)}
          />
        </div>
      </div>
    )
  }
})
