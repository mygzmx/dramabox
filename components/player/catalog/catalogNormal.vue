<template>
  <div class="catalogWrap">
    <div class="catalogBox">
      <div class="bookInfo">
        <h1>{{ bookInfo.title || '' }}</h1>
        <p>{{ chapterName }}</p>
      </div>
      <div v-if="isShowDrama" class="iconDramaBox" @click="dramaVideo">
        <img :src="bookInfo.autoAdd === EAutoAdd.是 ? IconDramaActive : IconDrama" alt=""/>
        <span>{{ (bookInfo.autoAdd === EAutoAdd.是 ? '已' : '') + '追剧' }}</span>
      </div>
      <div v-if="isOnline" class="iconDramaBox" @click="openCatalog">
        <img :src="IconCatalog" alt=""/>
        <span>选集</span>
      </div>
      <div v-else class="iconBoxDisabled">
        <img :src="IconCatalogDisabled" alt=""/>
        <span>选集</span>
      </div>
    </div>
    <CatalogPopup />
  </div>
</template>

<script lang="ts" setup>
import IconCatalog from '@/assets/images/catalog.png'
import IconCatalogDisabled from '@/assets/images/catalog-disabled.png'
import IconDramaActive from '@/assets/images/drama-active.png'
import IconDrama from '@/assets/images/drama.png'
import { computed } from 'vue'
import { EAutoAdd } from '@/types/common.interface'
import CatalogPopup from '@/components/player/catalog/catalogPopup.vue'
import { ChaptersModule } from '@/store/modules/chapters'
import { netDrama } from '@/api/player'
import { Toast } from 'vant'
import { DeviceModule } from '@/store/modules/device'
import { PlayerModule } from '@/store/modules/player'

const chapterName = computed(() => PlayerModule.theaters.length > 0 ? `第${PlayerModule.theaters[PlayerModule.swipeIndex].num}集` : '')
const bookInfo = computed(() => PlayerModule.parent_info)
const isShowDrama = computed(() => ChaptersModule.isShowDrama)
const isOnline = computed(() => DeviceModule.isOnline)
const dramaVideo = () => {
  if (bookInfo.value.autoAdd === EAutoAdd.是) return
  netDrama(bookInfo.value.id)
  PlayerModule.SetParentInfo({
    ...bookInfo.value,
    autoAdd: EAutoAdd.是
  })
  Toast({
    message: '追剧成功，可在书架中查看',
    position: 'bottom'
  })
}

// 获取章节列表
const openCatalog = () => {
  const chapterInfo = PlayerModule.theaters[PlayerModule.swipeIndex]
  const index = chapterInfo ? Math.ceil(chapterInfo.num / 30) - 1 : 0
  ChaptersModule.SetTabIndex(index)
  ChaptersModule.SetIsCatalogPopupVisible(true)
}

</script>

<style lang="scss" scoped>
.catalogWrap {
  width: 100%;
  height: 1.28rem;
  padding: 0.2rem 0.16rem 0.2rem 0.4rem;
  background-color: #0F0F0F;
  color: #FFFFFF;

  .catalogBox {
    width: 100%;
    display: flex;
    flex-direction: row;

    .bookInfo {
      flex: 1;

      h1 {
        width: 4rem;
        font-size: 0.32rem;
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      p {
        font-size: 0.28rem;
      }
    }

    .iconDramaBox, .iconBoxDisabled {
      width: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      img {
        width: 0.4rem;
        height: 0.4rem;
        margin-bottom: 0.04rem;
      }

      span {
        font-size: 0.28rem;
        color: #FFFFFF;
      }
    }
    .iconBoxDisabled {
      span {
        color: #FFFFFF33;
      }
    }
  }
}
</style>
