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

<script lang="ts">
import { onMounted, ref, reactive, SetupContext, getCurrentInstance } from 'vue';
import http from '@/utils/http.ts';
import Cards from '@/views/home/components/Cards.vue';
import CardLink from '@/views/home/components/CardLink.vue';
import Visits from '@/views/home/components/Visits.vue';

interface Data {
  [key: string]: unknown;
}

export default {
  components: { Cards, CardLink, Visits }, // , CardLink, Visits
  setup(props: Data, context: SetupContext) {
    const { proxy } = getCurrentInstance() as any,
      readersNumber = ref(0),
      book = reactive({
        title: 'Vue 3 Guide',
        food: 'bar'
      });
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

    return {
      readersNumber,
      book
    };
  }
};
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
