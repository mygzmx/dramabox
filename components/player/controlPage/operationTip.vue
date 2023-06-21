<template>
  <div class="operationWrap" @click.stop="closeTip" @touchstart.stop="closeTip" @touchend.stop="closeTip">
    <div class="iconCBox">
      <div class="areaBox">
        <img class="iconHand" :src="OperationHandIcon" alt="" @error="imgErrorNone">
        <div class="icon1"/>
      </div>
    </div>
    <p class="tipTxt">上滑查看下一集</p>
  </div>
</template>

<script lang="ts" setup>
import OperationHandIcon from '@/assets/images/operationHand.png'
import { imgErrorNone } from '@/utils/imgError'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { DeviceModule } from '@/store/modules/device'
const timer = ref(0)
onMounted(() => {
  timer.value = setTimeout(() => {
    DeviceModule.SetIsShowOperationTip(false);
  }, 5000)
})

const closeTip = () => {
  if (DeviceModule.isShowOperationTip) {
    clearTimeout(timer.value);
    DeviceModule.SetIsShowOperationTip(false);
  }
}

onBeforeUnmount(() => {
  if (!DeviceModule.isShowOperationTip) {
    clearTimeout(timer.value);
  }
})
</script>

<style lang="scss" scoped>
.operationWrap {
  position: absolute;
  height: calc(100% - 1.28rem);
  width: 100%;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  padding-bottom: 2.58rem;
  justify-content: flex-end;
  flex-direction: column;
  background-color: #0000001A;
  .areaBox {
    width: 0.36rem;
    height: 1.6rem;
    background: -ms-linear-gradient(180deg, #FFFFFF66 0%, rgba(255,255,255,0) 100%);
    background: -moz-linear-gradient(180deg, #FFFFFF66 0%, rgba(255,255,255,0) 100%);
    background: -webkit-linear-gradient(180deg, #FFFFFF66 0%, rgba(255,255,255,0) 100%);
    background: -o-linear-gradient(180deg, #FFFFFF66 0%, rgba(255,255,255,0) 100%);
    background: linear-gradient(180deg, #FFFFFF66 0%, rgba(255,255,255,0) 100%);
    border-radius: 0.18rem 0.18rem 0 0;
    position: relative;
    .iconHand {
      position: absolute;
      top: 0.12rem;
      left: 0.12rem;
      z-index: 2;
      width: 1.14rem;
      height: 0.88rem;
      object-fit: cover;
      animation-name: moveAni;
      animation-duration: 1800ms;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .icon1 {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 0.36rem;
      height: 0.36rem;
      border-radius: 50%;
      background-color: #FFFFFF66;
      box-shadow: 0 0 0 0.11rem #FFFFFF33;
      animation-name: circleAni;
      animation-duration: 1800ms;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  }
  .tipTxt {
    margin-top: 0.2rem;
    font-size: 0.36rem;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
  }
}

@keyframes circleAni {
  0% {
    box-shadow: 0 0 0 0.11rem #FFFFFF33;
  }
  70% {
    box-shadow: 0 0 0 0.11rem #FFFFFF33;
  }
  85% {
    box-shadow: 0 0 0 0.06rem #FFFFFF33;
  }
  100% {
    box-shadow: 0 0 0 0.11rem #FFFFFF33;
  }
}

@keyframes moveAni {
  0% {
    top: 1.1rem;
    opacity: 0;
  }
  70% {
    top: 0.12rem;
    opacity: 0.8;
  }
  100% {
    top: 0.12rem;
    opacity: 1;
  }
}
</style>
