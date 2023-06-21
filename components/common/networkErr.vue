<template>
  <div class="networkWrap" v-if="!isOnLine">
    <van-loading v-show="isOnLineLoading" type="spinner" color="#FFF"/>
    <div v-show="!isOnLineLoading" class="tipBox">
      <p class="tip">网络未连接，请检查网络设置</p>
      <div class="btn" @click="netRefresh">刷新重试</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { DeviceModule } from '@/store/modules/device'

const isOnLine = computed(() => DeviceModule.isOnline)
const isOnLineLoading = ref(false)
// 网络刷新重试
const netRefresh = () => {
  isOnLineLoading.value = true
  setTimeout(() => {
    isOnLineLoading.value = false
  }, 1000)
}
</script>

<style lang="scss" scoped>
.networkWrap {
  position: absolute;
  z-index: 100;
  top: 0;
  width: 100%;
  height: calc(100% - 1.28rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0F0F0F;

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
    border: 0.02rem solid #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.03rem;
    font-size: 0.34rem;
    font-weight: 500;
    color: #FFFFFF;
  }
}

</style>
