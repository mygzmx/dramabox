<template>
  <van-swipe
    ref="swipeRef"
    class="swipeWrap"
    vertical
    :touchable="!isPayVisible"
    stop-propagation
    :loop="false"
    :duration="200"
    :show-indicators="false"
    lazy-render
    @change="onChange">
    <van-swipe-item
      class="swipeItem"
      v-for="(val,ind) in swipeList"
      :key="val.id">
      <un-lock
        v-if="val.lock === EnumLock.unlock"
        :is-show-page="ind === swipeIndex"
        :chapter-index="val.num"
        @unlock="onUnlock(val.id)"/>
      <template v-else>
        <video-normal
          :key="val.id"
          v-if="(swipeIndex > ind ? swipeIndex - ind <= 1 : ind - swipeIndex <= 1)"
          :is-show-page="ind === swipeIndex"
          :chapter-info="val"
          @videoEnd="videoEnd"
        />
        <img v-else class="posterImg" :src="val.son_cover_url" alt="">
      </template>
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import VideoNormal from '@/components/player/videoUnion/videoNormal.vue'
import UnLock from '@/components/player/controlPage/unLock.vue'
import type { SwipeInstance } from 'vant'
import { ChaptersModule } from '@/store/modules/chapters'
import { DeviceModule } from '@/store/modules/device'
import { PlayerModule } from '@/store/modules/player'
import { EnumLock } from '@/types/player.interface'

const swipeRef = ref<SwipeInstance>({} as SwipeInstance)
const swipeIndex = computed(() => PlayerModule.swipeIndex)
const swipeList = computed(() => PlayerModule.theaters)
const timer = ref<number>(0)
const isPayVisible = computed(() => ChaptersModule.isPayVisible)

watch(() => PlayerModule.swipeIndex, (newVal, oldVal) => {
  // swipeRef.value.resize();
  if ((newVal > oldVal && newVal - oldVal > 1) || (newVal < oldVal && newVal - oldVal < -1)) {
    // swipeRef.value.swipeTo(newVal, { immediate: true })
  }
})

const onUnlock = (chapterId: string) => {
  clearTimeout(timer.value)
  timer.value = setTimeout(() => { // 处理部分机型swipe会卡半截问题
    // onUnlock(swipeList.value[index].chapterId)
    DeviceModule.SetIsShowUnlockTip(false)
    if (swipeList.value[swipeIndex.value].chapterId === chapterId) {
      // netWebAndPay(bookId, chapterId) todo
      console.log('netWebAndPay(bookId, chapterId) todo')
    }
  }, 500)
}

const videoEnd = () => {
  if (swipeList.value.length > swipeIndex.value + 1) {
    swipeRef.value.next()
  }
}

// 上下屏切换
const onChange = (index: number) => {
  PlayerModule.SetSwipeIndex(index)
};

</script>

<style lang="scss" scoped>
.swipeWrap {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 9;
  flex: 1;

  .swipeItem {
    width: 100%;
    height: 100%;

    .posterImg {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background-color: #0F0F0F;
    }
  }
}
</style>
