<template>
  <div class="box"> {{ hello }} </div>
  <div class="box-table">
    <AgGridVue
      class="ag-theme-alpine"
      style="height: 350px; width: 602px"
      row-selection="multiple"
      :column-defs="columnDefs"
      :row-data="rowData"
    ></AgGridVue>
  </div>
</template>
<script setup lang="ts">
  import { AgGridVue } from 'ag-grid-vue3'
  import { ref } from 'vue'
  const columnDefs = ref([
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true }
  ])
  const rowData = ref([
    { make: 'Toyota', field: 'make', model: 'Celica', price: 35000, sortable: true },
    { make: 'Ford', field: 'model', model: 'Mondeo', price: 32000, sortable: true },
    { make: 'Porsche', field: 'price', model: 'Boxter', price: 72000, sortable: true }
  ])
  const hello = ref('hello world')
</script>
<style lang="scss" scoped>
  .box {
    color: #60d659;
  }
  .box-table {
    padding: 32px;
    display: flex;
    justify-content: center;
  }
</style>
