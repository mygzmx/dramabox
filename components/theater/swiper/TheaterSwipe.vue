<template>
  <van-swipe
    class="swipeWrap"
    stop-propagation
    loop
    autoplay="3000"
    duration="500"
    :show-indicators="true"
    :indicator-color="'#FFFFFF'">
    <van-swipe-item
      v-for="val in dataSource"
      :key="val.video_id"
      class="swipeItem">
      <NuxtLink :to="`/player/${val.video_id}`">
        <div class="swipeItemContent">
          <img class="posterImg" :src="val.image_link" alt="">
        </div>
      </NuxtLink>
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { IIndexContent } from '@/types/theater.interface'

defineProps({
  dataSource: Array as PropType<IIndexContent[]>
})

</script>

<style lang="scss" scoped>

.swipeWrap {
  margin: 0.26rem 0;
  height: 3.4rem;

  .swipeItemContent {
    padding: 0 0.1rem;
    width: 100%;
    height: 100%;

    .posterImg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.1rem;
    }
  }
}

</style>
