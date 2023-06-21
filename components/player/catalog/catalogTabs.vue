<template>
  <van-tabs
    class="tabsLogWrap"
    :class="totalChapters <= 30 && 'noTabTitle'"
    color="#404657"
    :line-height="0"
    :line-width="0"
    swipeable
    v-model:active="tabIndex"
    @change="changeTab">
    <van-tab
      class="tabItemBox"
      v-for="(val, ind) in tabData" :key="val" :title="val" :name="ind">
      <div class="catalogListBox">
        <div
          @click="selectChapter(chapter)"
          class="catalogItem"
          :class="chapter.id === chapterId && 'catalogItemActive'"
          v-for="chapter in chapterAllList.slice(ind * 30, (ind + 1) * 30)"
          :key="chapter.id">
          <img v-if="chapter.lock === EnumLock.unlock" :src="IconLock" alt="lock">
          <div>{{ chapter.num }}</div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { ChaptersModule } from '@/store/modules/chapters'
import IconLock from '@/assets/images/lock.png'
import { getTabs } from '@/utils/getTabs'
import { debounce } from 'throttle-debounce'
import { PlayerModule } from '@/store/modules/player'
import { EnumLock, ITheaterItem } from '@/types/player.interface'

const tabIndex = ref(ChaptersModule.tabIndex)
const totalChapters = computed(() => PlayerModule.theaters.length)
const chapterAllList = computed(() => PlayerModule.theaters)
const chapterId = computed(() => PlayerModule.theaters.length > 0 ? PlayerModule.theaters[PlayerModule.swipeIndex].id : '')

watch(() => ChaptersModule.tabIndex, (ind) => {
  tabIndex.value = ind
})

const changeTab = (index: number) => {
  ChaptersModule.SetTabIndex(index)
}

const tabData = computed(() => getTabs(30, PlayerModule.theaters.length))

const selectChapter = debounce(300, async (chapter: ITheaterItem) => {
  if (chapter.lock === EnumLock.lock) {
    // DeviceModule.SetIsShowPaypal(true);
    // todo
  }
  ChaptersModule.SetIsCatalogPopupVisible(false)
  PlayerModule.SetSwipeIndex(chapter.num - 1)
})

</script>

<style lang="scss" scoped>
.tabsLogWrap {
  padding: 0 0.24rem;
  overflow: hidden;
  //:deep(.van-tabs__wrap) {
  //  position: relative;
  //  left: -0.12rem;
  //}
  :deep(.van-tab--active) {
    font-weight: bold;
    color: #21232b;
  }

  :deep(.van-tabs__nav) {
    padding: 0;
    margin: 0 0.12rem;
    //display: flex;
  }
  :deep(.van-tab) {
    font-size: 0.28rem;
    color: #404657;
    flex: none !important;
    padding: 0 0.24rem;
    &::after {
      content: "";
      width: 1px;
      height: 0.24rem;
      background-color: #C9CDD4;
      border-radius: 0.01rem;
      position: absolute;
      right: 0;
      top: 0.3rem;
    }
    &:nth-child(1) {
      padding-left: 0;
    }
    &:nth-last-child(2) {
      &::after {
        display: none;
      }
    }
  }

}

.noTabTitle {
  :deep(.van-tabs__wrap) {
    display: none !important;
  }
}

.tabItemBox {
  min-width: 6.72rem;
  min-height: 6rem;
}
.catalogListBox {
  margin: 0.2rem 0.12rem 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0.24rem;
  grid-row-gap: 0.24rem;
  min-height: 5.71rem;

  .catalogItem {
    width: 0.91rem;
    height: 0.91rem;
    background-color: #F2F3F5;
    border-radius: 0.13rem;
    font-size: 0.32rem;
    color: #404657;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 0.28rem;
      height: 0.28rem;
    }
  }

  .catalogItemActive {
    background-color: #FF4B00;
    color: #FFFFFF;
    font-weight: 500;
  }
}
</style>
