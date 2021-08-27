<template>
  <div class="work">
    <div class="work-tit">工作台</div>
    <div class="work-tip">
      <div class="work-info">
        <div class="work-avatar">
          <n-avatar :src="userInfo.avatar" circle :size="64"></n-avatar>
        </div>
        <div class="work-help">
          <p class="work-help-title">{{ regardsStr }}</p>
          <p class="work-help-dist">今日有小雨</p>
        </div>
      </div>
      <div class="work-extra">
        <div class="work-extra-pronum">
          <div>项目数</div>
          <div class="work-extra-count">12</div>
        </div>
        <div class="work-extra-pronum">
          <div>代办项</div>
          <div class="work-extra-count">3/24</div>
        </div>
        <div class="work-extra-pronum">
          <div>积分</div>
          <div class="work-extra-count">1,689</div>
        </div>
      </div>
    </div>
  </div>
  <div class="app-container">
    <NButton @click="btnClick" type="primary">点击：{{ userStore.testValue }}</NButton>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { NAvatar } from 'naive-ui';
import useUserStore from '@/store/userStore.ts';
import { regards } from '@/utils/dynamic.ts';

const userStore = useUserStore();
const { userInfo } = userStore;
const regardsStr = computed(() => {
  return regards(userStore.userInfo.userName);
});

const btnClick = () => {
  userStore.SET_USERNAME(parseInt(Math.random() * 100 + ""));
}

</script>
<style lang="scss" scoped>
.work {
  color: #333333;
  background: #ffffff;
  padding: 12px 32px;
  &-tit {
    font-size: 20px;
    padding-bottom: 16px;
  }
  &-tip {
    display: flex;
    justify-content: space-between;
  }
  &-info {
    display: flex;
    align-items: center;
  }
  &-help {
    padding-left: 12px;
    &-title {
      margin: 0 0 10px 0;
      font-size: 20px;
      font-weight: bold;
    }
    &-dist {
      margin: 0;
      color: #999999;
    }
  }
  &-extra {
    font-size: 16px;
    color: #808695;
    display: flex;
    &-pronum {
      padding: 0 16px;
    }
    &-count {
      text-align: right;
      color: #333;
      font-size: 20px;
    }
  }
}
</style>
