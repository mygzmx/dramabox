<template>
  <div class="endingWrap" v-if="isEndPageVisible">
    <div class="titleLine" :class="!recommendBookName && !recommendBookCover && 'titleLine2'">
      <img class="leftLine" :src="IconLine" alt="">
      <h2>{{ h2Txt }}</h2>
      <img class="rightLine" :src="IconLine" alt="">
    </div>
    <template v-if="recommendBookCover && recommendBookName">
      <p v-if="bookFinishStatus === EBookFinishStatus.连载" class="sub1">您已看完最新一集</p>
      <van-count-down class="countdown" :time="5500" @finish="countDownFinish">
        <template #default="timeData">
          <span class="block">{{ $t('player.endPageTip1') }} ({{ timeData.seconds }}s)</span>
        </template>
      </van-count-down>
      <img class="bookCover" :src="recommendBookCover" alt="" @click="countDownFinish">
      <p class="bookName">{{ recommendBookName }}</p>
    </template>
  </div>
</template>
<script lang="ts" setup>
import IconLine from '@/assets/images/line.png'
import { computed } from 'vue'
import { EBookFinishStatus } from '@/types/common.interface'
import { AppModule } from '@/store/modules/app'
import { PlayerModule } from '@/store/modules/player'

const isEndPageVisible = computed(() => PlayerModule.isShowEndPage) // 结束页
const bookFinishStatus = computed(() => PlayerModule.parent_info.is_over || 0)
const recommendBookName = computed(() => AppModule.recommendData.bookInfo ? AppModule.recommendData.bookInfo.bookName : '')
const recommendBookCover = computed(() => AppModule.recommendData.bookInfo ? AppModule.recommendData.bookInfo.bookCover : '')
const h2Txt = computed(() => {
  if (bookFinishStatus.value === EBookFinishStatus.下架) {
    return '剧集已下架'
  } else if (bookFinishStatus.value === EBookFinishStatus.连载) {
    return '剧集连载中'
  } else {
    return '全剧终'
  }
})

// 倒计时结束
const countDownFinish = async () => {
  console.log('-----------倒计时结束-----------')
  if (PlayerModule.isShowEndPage) {
    PlayerModule.SetIsShowEndPage(false)
    // todo
  }
}
</script>

<style lang="scss" scoped>
.endingWrap {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: calc(100% - 1.28rem);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 2.88rem 0 0;

  .titleLine {
    height: 0.98rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-bottom: 0.08rem;

    h2 {
      font-size: 0.64rem;
      font-weight: bold;
      color: #FFFFFF;
      margin: 0 0.24rem;
    }

    .leftLine, .rightLine {
      width: 1.1rem;
      height: 0.02rem;
    }

    .rightLine {
      transform: rotate(180deg);
    }
  }
  .titleLine2 {
    padding-top: 3rem;
  }

  .sub1 {
    font-size: 0.28rem;
    font-weight: 400;
    color: #FFFFFF;
  }

  .countdown {
    margin: 0.8rem 0 0.24rem;
    font-size: 0.30rem;
    font-weight: 400;
    color: #FFFFFF;
  }

  .bookCover {
    width: 2.72rem;
    height: 3.88rem;
    border-radius: 0.1rem;
    border: 0.01rem solid #FFFFFF;
    object-fit: cover;
  }

  .bookName {
    margin-top: 0.24rem;
    font-size: 0.4rem;
    font-weight: bold;
    color: #FFFFFF;
  }
}

</style>
