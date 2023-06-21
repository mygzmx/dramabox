<template>
  <div class="theaterWrap">
    <TheaterSwipe :data-source="bannerList" @bannerClick="toPlayer"/>
    <TheaterList :class-data="classData" :loading="loading" :finished="finished" @onLoad="onLoad" @toPlayer="toPlayer"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TheaterSwipe from '@/components/theater/swiper/TheaterSwipe.vue'
import TheaterList from '@/components/theater/list/TheaterList.vue'
import { IClassListItem, IIndexContent, INetAppletRes } from '~/types/theater.interface'
const bannerList = ref([] as IIndexContent[])
const classData = ref([] as IClassListItem[])
const finished = ref(false);
const loading = ref(false);

const onLoad = async () => {
  console.log('onLoad theater')
  // await getTheaterData()
  loading.value = false;
}

const toPlayer = (bookId?: string) => {
  // router.push({ name: 'player', query: { bookId } })
}

const { data: configData } = await $fetch('/api/applet/config',
  {
    baseURL: 'https://zf.jxjzwh.cn',
    method: "GET",
    onRequest({ request, options }) {
      // Set the request headers
      options.headers = options.headers || {}
      options.headers['App-Origin'] = 'wx3e1e4c735213dcb5'
    },
    onRequestError({ request, options, error }) {
      // Handle the request errors
    },
    async onResponse({ request, response, options }) {
      const { Applet, Index = [], Class = [] } = response._data.data as INetAppletRes;
      bannerList.value = Index.map(val => JSON.parse(val.content) as IIndexContent);
      classData.value = Class.map(val => ({ ...val, children: [] })) as IClassListItem[];
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
    }
  });

const classIndex = await $fetch('/api/parent/class/index',
  {
    baseURL: 'https://zf.jxjzwh.cn',
    method: "POST",
    body: JSON.stringify({ class_ids: "1" }),
    responseType: "json",
    onRequest({ request, options }) {
      options.headers = options.headers || {}
      options.headers['App-Origin'] = 'wx3e1e4c735213dcb5'
    },
    onRequestError({ request, options, error }) {
      // Handle the request errors
    },
    onResponse({ request, response, options }) {
      const list = response._data.data || [];
      classData.value = classData.value.map(val => {
        const items = list.filter(li => li.class_id === val.id)
        return {
          ...val,
          children: [...items]
        }
      });
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
    }
  });


</script>

<style lang="scss" scoped>
.theaterWrap {
  overflow-y: auto;
  padding: 0.2rem 0.3rem;
}
</style>
