<template>
  <van-popup
    :overlay-style="{ backgroundColor: 'transparent'}"
    :overlay="true"
    v-model:show="isCatalogPopupVisible"
    position="bottom"
    @click-overlay="closeCatalog"
    close-on-click-overlay
    :duration="0.3"
    round>
    <div class="catalogListWrap">
      <div class="closeBox" @click="closeCatalog">
        <img class="close-icon" :src="IconClose" alt="">
      </div>
      <div class="titleBox">
        <div class="bookName">{{ bookName }}</div>
        <div class="titleTip1" v-if="bookFinishStatus === EBookFinishStatus.完本">已完结</div>
        <div class="titleTip2" v-if="bookFinishStatus === EBookFinishStatus.连载">连载中</div>
      </div>
      <catalog-tabs />
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
import IconClose from '@/assets/images/close.png'
import { computed } from 'vue'
import { EBookFinishStatus } from '@/types/common.interface'
import CatalogTabs from '@/components/player/catalog/catalogTabs.vue'
import { ChaptersModule } from '@/store/modules/chapters'
import { PlayerModule } from '@/store/modules/player'

const isCatalogPopupVisible = computed(() => ChaptersModule.isCatalogPopupVisible)
const bookName = computed(() => PlayerModule.parent_info.title || '')
const bookFinishStatus = computed(() => PlayerModule.parent_info.is_over || 0)

const closeCatalog = () => {
  ChaptersModule.SetIsCatalogPopupVisible(false)
}
</script>

<style lang="scss" scoped>
.catalogListWrap {
  position: relative;
  padding: 0.48rem 0 0.96rem;
  height: 8.5rem;

  .closeBox {
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    z-index: 99;
    padding: 0.2rem;
    width: 0.9rem;
    height: 0.9rem;
    display: flex;
    align-items: center;

    .close-icon {
      width: 100%;
      height: 100%;
    }
  }

  .titleBox {
    padding: 0 0.4rem 0.2rem;
    height: 0.56rem;
    display: flex;
    align-items: center;

    .bookName {
      font-size: 0.4rem;
      font-weight: bold;
      color: #191919;
      margin-right: 0.16rem;
      max-width: 4.5rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .titleTip1, .titleTip2 {
      width: 1.1rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      font-size: 0.26rem;
      background-color: #76b973;
      color: #FFFFFF;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 0.03rem;
    }
    .titleTip2 {
      background-color: #f67d2b;
    }
    img {
      width: 1.1rem;
      height: 0.4rem;
    }
  }
}
</style>
