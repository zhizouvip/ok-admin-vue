<template>
  <div class="app-container">
    <n-card :bordered="false" :content-style="{ padding: '12px' }">
      <div class="form">
        <n-form ref="formRef" inline :label-width="80" :model="formValue">
          <n-form-item label="姓名" path="user.name">
            <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
          </n-form-item>
          <n-form-item label="年龄" path="user.age">
            <n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
          </n-form-item>
          <n-form-item label="电话号码" path="phone">
            <n-input v-model:value="formValue.phone" placeholder="电话号码" />
          </n-form-item>
          <n-form-item>
            <n-button @click="handleValidateClick">验证</n-button>
          </n-form-item>
        </n-form>
      </div>
      <div class="table">
        <NDataTable
          :columns="columns"
          :data="data"
          :single-line="false"
          :pagination="pagination"
        ></NDataTable>
      </div>
    </n-card>
  </div>
</template>
<script setup lang="ts">
  import { ref, h, onMounted, reactive } from 'vue'
  import type { DataTableProps } from 'naive-ui/lib/data-table'
  import { NDataTable, NTag, NForm, NFormItem, NInput, NAvatar } from 'naive-ui'

  const formRef: any = ref(null)
  const formValue = ref({
    user: {
      name: '',
      age: ''
    },
    phone: ''
  })

  const handleValidateClick = (e: any) => {
    formRef.value.validate((errors: any) => {
      console.log(errors)
    })
  }

  const pagination = reactive({
    page: 1,
    pageCount: 1,
    itemCount: 1,
    pageSize: 10
  })

  onMounted(() => {
    pagination.pageCount = 100
    pagination.itemCount = 100
  })

  const columns: DataTableProps['columns'] = [
    { key: 'id', title: 'id', align: 'center' },
    { key: 'name', title: '姓名', align: 'center' },
    {
      key: 'avatar',
      title: '头像',
      align: 'center',
      render(row: any) {
        return h(NAvatar, {
          size: 48,
          src: row.avatar
        })
      }
    },
    { key: 'age', title: '年龄', align: 'center' },
    { key: 'address', title: '地址', align: 'center' },
    {
      key: '标签',
      title: 'tags',
      align: 'center',
      render(row: any) {
        const tags = row.tags.map((tagKey: string) => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px'
              },
              type: 'info'
            },
            {
              default: () => tagKey
            }
          )
        })
        return tags
      }
    }
  ]

  const data = ref([
    {
      id: 1,
      name: 'John Brown',
      avatar: 'https://portrait.gitee.com/uploads/avatars/user/442/1326874_zhizous_1615019143.png',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      id: 2,
      name: '尤雨溪',
      avatar: 'https://portrait.gitee.com/uploads/avatars/user/442/1326874_zhizous_1615019143.png',
      age: 30,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    }
  ])
</script>
<style lang="scss" scoped>
  .box {
    color: #60d659;
  }
</style>
