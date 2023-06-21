<template>
  <div class="playerWrap">
    <back-title />
    <network-err />
    <ending-normal />
    <operation-tip v-if="isShowOperationTip" />
    <div class="playerBox">
      <div
        class="pulRefresh"
        @touchmove.stop="playTouchmove"
        @touchstart.stop="playTouchstart">
        <video-swiper />
      </div>
      <catalog-normal />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from 'vue'
import VideoSwiper from '@/components/player/videoUnion/videoSwiper.vue'
import CatalogNormal from '@/components/player/catalog/catalogNormal.vue'
import { Toast } from 'vant'
import BackTitle from '@/components/common/backTitle.vue'
import NetworkErr from '@/components/common/networkErr.vue'
import EndingNormal from '@/components/player/controlPage/endingNormal.vue'
import { DeviceModule } from '~/store/modules/device'
import { ChaptersModule } from '~/store/modules/chapters'
import { debounce } from 'throttle-debounce'
import OperationTip from '@/components/player/controlPage/operationTip.vue'
import { useRoute } from 'vue-router'
import { PlayerModule } from '~/store/modules/player'
import { EnumLock, ITheaterItem } from '~/types/player.interface'
import { netPlayerInfo } from '~/api/player'

const route = useRoute();

const isShowOperationTip = computed(() => DeviceModule.isShowOperationTip);
const onRefresh = async () => {
  if (chapterInfo.value.num === 1) {
    Toast({ message: '滑不动了 已经是第一集啦～', position: 'top', className: 'topToastBox' })
    return
  }
  const preChapter = PlayerModule.theaters[chapterInfo.value.num - 2]
  if (!preChapter || !preChapter.chapterId) return
  if (preChapter.lock === EnumLock.lock) {
    if (!ChaptersModule.isPayVisible) {
      // 上滑上一章付费情况 todo

    }
  }
}

// 监听上滑行为 当列表为空 或 swipe的索引不是首页时禁止执行
const shouldWatchTouchUp = computed(() => PlayerModule.theaters.length === 0 || PlayerModule.swipeIndex !== 0)
const shouldWatchTouchDown = computed(() => PlayerModule.theaters.length === 0 || PlayerModule.swipeIndex !== PlayerModule.theaters.length - 1)
const touchY = ref(0)
const playTouchstart = (e: TouchEvent) => {
  touchY.value = e.targetTouches[0].clientY
}
const playTouchmove = debounce(500, (e: TouchEvent) => {
  // 下滑上一集
  if (e.targetTouches[0].clientY - touchY.value >= 80) {
    if (shouldWatchTouchUp.value) return
    console.log('------------下滑手势------------')
    onRefresh()
  }
  if (touchY.value - e.targetTouches[0].clientY >= 80) {
    if (shouldWatchTouchDown.value) return
    console.log('------------上滑手势------------')
    onNextChapter()
  }
})

const onNextChapter = async () => {
  const nextChapter = PlayerModule.theaters[chapterInfo.value.num]
  if (!nextChapter || !nextChapter.chapterId || chapterInfo.value.num === PlayerModule.theaters.length) return
  if (nextChapter.lock === EnumLock.lock) {
    if (!ChaptersModule.isPayVisible) {
      // 上滑上一章付费情况 todo
    }
  }
}

const chapterInfo = computed(() => PlayerModule.theaters[PlayerModule.swipeIndex] || {} as ITheaterItem)
onBeforeMount(async () => {
  // 初始化数据
  const { parent_info, theaters = [] } = await netPlayerInfo(Number(route.query.bookId))
  PlayerModule.SetParentInfo(parent_info);
  PlayerModule.SetTheaters(theaters);
})

</script>

<style lang="scss" scoped>
.playerWrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 0;
  .playerBox {
    position: relative;
    width: 100%;
    height: calc(100% - 1.4rem);
    //height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    font-size: 0;
    overflow: hidden;
  }
  .pulRefresh {
    width: 100%;
    height: calc(100% - 1.28rem);
    flex: 1;
    overflow: hidden;
  }
}
</style>
