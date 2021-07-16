<template>
  <n-grid x-gap="12" cols="4 xs:1 s:2 m:2" responsive="screen">
    <n-gi class="padding-tb-5">
      <n-card title="访问量" size="small" class="card-box" :bordered="false">
        <template #header-extra>
          <n-tag type="primary">日</n-tag>
        </template>
        <div class="card-cont">
          <div class="num">25,848</div>

          <div class="card-data">
            <n-progress :color="['var(--primary-color)']" :percentage="30" />
          </div>

          <n-divider style="margin: 12px 0" />

          <div class="card-footer">
            <span>总访问量</span>
            <span>280 万</span>
          </div>
        </div>
      </n-card>
    </n-gi>

    <n-gi class="padding-tb-5">
      <n-card title="访问量" size="small" class="card-box" :bordered="false">
        <template #header-extra>
          <n-tag type="success">周</n-tag>
        </template>
        <div class="card-cont">
          <div class="num">65,848</div>

          <div class="card-data"><div id="cardChart"></div></div>

          <n-divider style="margin: 12px 0" />
          <div class="card-footer">
            <span>总访问量</span>
            <span>280 万</span>
          </div>
        </div>
      </n-card>
    </n-gi>

    <n-gi class="padding-tb-5">
      <n-card title="访问量" size="small" class="card-box" :bordered="false">
        <template #header-extra>
          <n-tag type="info">月</n-tag>
        </template>
        <div class="card-cont">
          <div class="num">25,848</div>

          <div class="card-data"> </div>

          <n-divider style="margin: 12px 0" />
          <div class="card-footer">
            <span>总访问量</span>
            <span>280 万</span>
          </div>
        </div>
      </n-card>
    </n-gi>

    <n-gi class="padding-tb-5">
      <n-card title="访问量" size="small" class="card-box" :bordered="false">
        <template #header-extra>
          <n-tag type="warning">年</n-tag>
        </template>
        <div class="card-cont">
          <div class="num">25,848</div>

          <div class="card-data"> </div>

          <n-divider style="margin: 12px 0" />
          <div class="card-footer">
            <span>总访问量</span>
            <span>280 万</span>
          </div>
        </div>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { NCard, NGrid, NGi, NDivider, NTag, NProgress } from 'naive-ui';
  import { Chart } from '@antv/g2';

  const clearElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element !== null) {
      element.innerHTML = '';
    }
  };
  const cardChartFun = () => {
    const elementId = 'cardChart';
    clearElement(elementId);
    const data = [
      { year: 'Mon', value: 132 },
      { year: 'Tue', value: 161 },
      { year: 'Wed', value: 359 },
      { year: 'Thu', value: 174 },
      { year: 'Fri', value: 270 },
      { year: 'Sat', value: 260 },
      { year: 'Sun', value: 319 }
    ];
    const chart = new Chart({
      container: elementId,
      autoFit: true,
      height: 35
    });
    chart.data(data);
    chart.scale({
      value: {
        min: 100,
        nice: true
      },
      year: {
        range: [0, 1]
      }
    });
    chart.tooltip({
      showCrosshairs: true,
      shared: true
    });
    chart.axis(false);

    chart.area().position('year*value').shape('smooth'); //曲线背景 shape('smooth')
    chart.line().position('year*value').shape('smooth'); //曲线路径 shape('smooth')
    chart.theme({
      styleSheet: {
        brandColor: '#9DF5CA',
        paletteQualitative10: [
          '#9DF5CA',
          '#61DDAA',
          '#42C090',
          '#19A576',
          '#008A5D',
          '#006F45',
          '#00562F',
          '#003E19',
          '#002800'
        ],
        paletteQualitative20: [
          '#9DF5CA',
          '#61DDAA',
          '#42C090',
          '#19A576',
          '#008A5D',
          '#006F45',
          '#00562F',
          '#003E19',
          '#002800'
        ]
      }
    });
    chart.render();
  };

  onMounted(() => {
    cardChartFun();
  });
</script>

<style lang="scss" scoped>
  .padding-tb-5 {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .card-box {
    border-radius: 4px;
  }
  .card-cont {
    .num {
      font-size: 30px;
    }
    .card-data {
      height: 35px;
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
