<template>
  <div class="unlockWrap">
    <template v-if="isShowUnlockTip">
      <div class="unlockBox" >
        <div class="tipBox">
          <p class="tip">{{ $t('player.unlockTip1') }}</p>
          <div class="btn" @click="emits('unlock')">{{ $t('player.unlockTip2') }}</div>
        </div>
      </div>
      <van-image class="unlockImgBg" :src="chapterUrl"/>
    </template>
    <van-image v-if="!isShowUnlockTip && chapterUrl" class="unlockImg" :src="chapterUrl"/>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, watch } from 'vue'
import { DeviceModule } from '@/store/modules/device'
import { PlayerModule } from '@/store/modules/player'
const emits = defineEmits(['unlock'])
interface IProps {
  isShowPage: boolean;
  chapterIndex: number;
}
const props = defineProps<IProps>()
// .. chapterImg
const chapterUrl = computed(() => PlayerModule.theaters[props.chapterIndex - 1].son_cover_url)
const isShowUnlockTip = computed(() => DeviceModule.isShowUnlockTip && props.isShowPage)
watch(() => props.isShowPage, (isShowPage) => {
  if (isShowPage) {
    emits('unlock')
  } else {
    DeviceModule.SetIsShowUnlockTip(false)
  }
})
onMounted(() => {
  if (props.isShowPage) {
    emits('unlock')
  }
})

</script>

<style lang="scss" scoped>
.unlockWrap {
  position: absolute;
  z-index: 100;
  top: 0;
  width: 100%;
  height: 100%;
  .unlockImgBg {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #0F0F0F;
  }
  .unlockBox {
    position: relative;
    z-index: 9;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding-top: 1.28rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .tipBox {
    height: 1.96rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .tip {
    font-size: 0.36rem;
    font-weight: 400;
    color: #FFFFFF;
  }

  .btn {
    width: 2.7rem;
    height: 0.9rem;
    border-radius: 0.45rem;
    background-color: #FF4B00;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.03rem;
    font-size: 0.34rem;
    font-weight: 500;
    color: #FFFFFF;
  }
}
.unlockImg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #0F0F0F;
}

</style>
