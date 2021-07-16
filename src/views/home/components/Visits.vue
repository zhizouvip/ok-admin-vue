<template>
  <n-card title="数据统计" :bordered="false">
    <n-grid cols="1" responsive="screen">
      <n-gi class="padding-tb-5">
        <div id="visits"></div>
      </n-gi>
    </n-grid>
  </n-card>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { Chart } from '@antv/g2';
  import { NCard, NGrid, NGi } from 'naive-ui';

  const randomNum = (min = 3000, max = 15000): number => {
    const num = Math.random() * (max - min) + min;
    return parseInt(num + '');
  };
  const clearElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element !== null) {
      element.innerHTML = '';
    }
  };

  const cardChartFun = () => {
    const elementId = 'visits';
    clearElement(elementId);
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
    ];
    const chart = new Chart({
      container: elementId,
      autoFit: true,
      height: 260
    });
    chart.data(data);
    chart.scale('value', {
      nice: true
    });
    chart.axis('type', {
      tickLine: null
    });

    chart.tooltip({
      showMarkers: false
    });
    chart.interaction('element-active');
    chart.coordinate({});
    chart.legend(false);
    chart
      .interval()
      .style('', () => {
        return {
          fill: 'l(270) 0:#1596EC 0.5:#3DB3F7 1:#69CDFF'
        };
      })
      .position('type*value');

    chart.render();
  };

  onMounted(function () {
    cardChartFun();
  });
</script>

<style lang="scss" scoped></style>
