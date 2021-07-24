<template>
  <div class="app-container">
    <cards />
    <div class="padding-tb-span">
      <card-link></card-link>
    </div>
    <div class="padding-tb-span">
      <visits></visits>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import http from '@/utils/http.ts';
import Cards from '@/views/control/components/Cards.vue';
import CardLink from '@/views/control/components/CardLink.vue';
import Visits from '@/views/control/components/Visits.vue';

onMounted(() => {
  const url = 'http://rap2api.taobao.org/app/mock/233041/user/list';
  http
    .get(url, {
      page: 1,
      limit: 7
    })
    .then((res: any) => {
      console.log(res);
    });
});
</script>

<style lang="scss" scoped>
.page {
  padding: 10px 20px;
}

.bg-white {
  background: white;
}

.padding-tb-span {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
