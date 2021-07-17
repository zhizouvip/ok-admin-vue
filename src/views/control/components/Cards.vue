<template>
  <n-grid x-gap="12" cols="4 xs:1 s:2 m:2" responsive="screen">
    <n-gi class="padding-tb-5">
      <n-card title="销售额" size="small" class="card-box" :bordered="false">
        <template #header-extra>
          <n-tag type="primary">日</n-tag>
        </template>
        <div class="card-cont">
          <div class="num">25,848</div>

          <div class="card-data center">
            <n-progress
              processing
              :percentage="60"
              :indicator-placement="'inside'"
              :color="['var(--primary-color)']"
            />
          </div>

          <n-divider style="margin: 12px 0" />

          <div class="card-footer">
            <span>总销售额</span>
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
      <n-card title="订单量" size="small" class="card-box" :bordered="false">
        <template #header-extra>
          <n-tag type="info">月</n-tag>
        </template>
        <div class="card-cont">
          <div class="num">95,658</div>

          <div class="card-data center">
            <div class="center order-ratio">
              <span>月同比 42.5%</span>
              <n-icon color="#18a058" class="padding-left-5" size="12"><CaretUp /></n-icon>
            </div>
            <div class="center order-ratio">
              <span>周同比 3% </span>
              <n-icon color="#d03050" class="padding-left-5" size="12"><CaretDown /></n-icon>
            </div>
          </div>

          <n-divider style="margin: 12px 0" />
          <div class="card-footer">
            <span>总订单量</span>
            <span>280 万</span>
          </div>
        </div>
      </n-card>
    </n-gi>

    <n-gi class="padding-tb-5">
      <n-card title="新增用户" size="small" class="card-box" :bordered="false">
        <template #header-extra>
          <n-tag type="warning">年</n-tag>
        </template>
        <div class="card-cont">
          <div class="num">76,358</div>

          <div class="card-data"> </div>

          <n-divider style="margin: 12px 0" />
          <div class="card-footer">
            <span>总新增用户</span>
            <span>280 万</span>
          </div>
        </div>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { NDivider, NTag, NProgress } from 'naive-ui';
import { CaretDown, CaretUp } from '@vicons/ionicons5';
import { Chart } from '@antv/g2';
const randomNum = (min = 200, max = 2000): number => {
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
  const elementId = 'cardChart';
  clearElement(elementId);
  const data = [
    { year: 'Mon', value: randomNum() },
    { year: 'Tue', value: randomNum() },
    { year: 'Wed', value: randomNum() },
    { year: 'Thu', value: randomNum() },
    { year: 'Fri', value: randomNum() },
    { year: 'Sat', value: randomNum() },
    { year: 'Sun', value: randomNum() }
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
.padding-left-5 {
  padding-left: 5px;
}
.padding-right-5 {
  padding-right: 5px;
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
    &.center,
    .center {
      display: flex;
      align-items: center;
    }
  }
  .order-ratio {
    padding-right: 15px;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
