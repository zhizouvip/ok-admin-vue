<template>
  <n-grid cols="l:8 xs:1" x-gap="12" y-gap="12" responsive="screen">
    <n-gi span="l:5 xs:6 s:4" class="padding-tb-5">
      <n-card title="数据统计" :bordered="false">
        <div id="visits"></div>
      </n-card>
    </n-gi>
    <n-gi span="l:3 xs:6 s:4" class="padding-tb-5">
      <n-card title="数据统计" :bordered="false">
        <div id="pie"></div>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { Chart } from '@antv/g2'
  const randomNum = (min = 500, max = 12000): number => {
    const num = Math.random() * (max - min) + min
    return parseInt(num + '')
  }
  const clearElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element !== null) {
      element.innerHTML = ''
    }
  }

  // 统计图
  const cardChartFun = (elementId: string) => {
    clearElement(elementId)
    const data = [
      { type: '一月', value: randomNum() },
      { type: '二月', value: randomNum() },
      { type: '三月', value: randomNum() },
      { type: '四月', value: randomNum() },
      { type: '五月', value: randomNum() },
      { type: '六月', value: randomNum() },
      { type: '七月', value: randomNum() },
      { type: '八月', value: randomNum() },
      { type: '九月', value: randomNum() },
      { type: '十月', value: randomNum() },
      { type: '十一月', value: randomNum() },
      { type: '十二月', value: randomNum() }
    ]
    const chart = new Chart({
      container: elementId,
      autoFit: true,
      height: 260
    })
    chart.data(data)
    chart.scale('value', {
      nice: true
    })
    chart.axis('type', {
      tickLine: null
    })

    chart.tooltip({
      showMarkers: false
    })
    chart.interaction('element-active')
    chart.coordinate({})
    chart.legend(false)
    chart
      .interval()
      .style('', () => {
        return {
          fill: 'l(270) 0:#1596EC 0.5:#3DB3F7 1:#69CDFF'
        }
      })
      .position('type*value')

    chart.render()
  }

  // 圆饼图
  const pieChartFun = (elementId: string) => {
    clearElement(elementId)
    const data = [
      { item: '事例一', count: 40, percent: 0.4 },
      { item: '事例二', count: 21, percent: 0.21 },
      { item: '事例三', count: 17, percent: 0.17 },
      { item: '事例四', count: 13, percent: 0.13 },
      { item: '事例五', count: 9, percent: 0.09 }
    ]

    const chart = new Chart({
      container: elementId,
      autoFit: true,
      height: 260
    })

    chart.coordinate('theta', {
      radius: 0.75
    })

    chart.data(data)

    chart.scale('percent', {
      formatter: (val) => {
        val = val * 100 + '%'
        return val
      }
    })

    chart.tooltip({
      showTitle: false,
      showMarkers: false
    })

    chart
      .interval()
      .position('percent')
      .color('item')
      .label('percent', {
        content: (data) => {
          return `${data.item}: ${data.percent * 100}%`
        }
      })
      .adjust('stack')

    chart.interaction('element-active')

    chart.render()
  }

  onMounted(function () {
    cardChartFun('visits')
    pieChartFun('pie')
  })
</script>

<style lang="scss" scoped></style>
