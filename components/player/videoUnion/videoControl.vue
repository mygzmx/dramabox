<template>
  <div class="controlBarBox">
    <div class="stopBox" @click.stop="emits('controlPlay')">
      <img v-show="isShowStop" :src='StopIcon' alt="">
    </div>
    <div
      v-show="duration > 0"
      class="touchLine"
      @touchend.stop="touchend"
      @touchstart.stop="touchstart"
      @touchcancel.stop="touchcancel"
      @touchmove.stop="touchmove">
      <div class="timeBox">
        <template v-if="isTouched">
          <div class="text">{{ currentTimeValue }}</div>
          <div class="line"/>
          <div class="text">{{ durationValue }}</div>
        </template>
      </div>
      <div class="progressBox" :class="!isTouched && 'progressActiveBox'">
        <div class="line-bg">
          <div class="line-item" :style="{width: progressValue + '%'}"/>
          <div class="lin-dot"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import StopIcon from '@/assets/images/stop.png'
import { ref, watch, computed } from 'vue'

const progressValue = ref(0)
const isTouched = ref(false)
const currentTimeValue = computed(() => secondString(progressValue.value / 100 * props.duration))
const durationValue = computed(() => secondString(props.duration))
const props = defineProps({
  isShowStop: Boolean,
  duration: {
    type: Number,
    default: 0,
    required: true
  },
  progress: {
    type: Number,
    default: 0,
    required: true
  }
})

const emits = defineEmits(['controlPlay', 'dragProgress'])

watch(() => props.progress, (val: number) => {
  if (!isTouched.value) {
    progressValue.value = val
  }
})

const touchmove = (e: TouchEvent) => {
  const screenWidth = window.screen.width - 20
  if (e.targetTouches[0].clientX >= screenWidth) {
    progressValue.value = 100
    e.preventDefault()
    return
  }
  if (e.targetTouches[0].clientX <= 10) {
    progressValue.value = 0
    e.preventDefault()
    return
  }
  progressValue.value = Math.floor(e.targetTouches[0].clientX / screenWidth * 100)
}

const touchstart = (e: TouchEvent) => {
  const screenWidth = window.screen.width - 20
  isTouched.value = true
  progressValue.value = Math.floor(e.targetTouches[0].clientX / screenWidth * 100)
}

const touchend = () => {
  isTouched.value = false
  emits('dragProgress', progressValue.value)
}

const touchcancel = () => {
  isTouched.value = false
  emits('dragProgress', progressValue.value)
}

const secondString = (second: number): string => {
  let newSecond = Number(second.toFixed(0))
  const minu = Math.floor(newSecond / 60)
  const _minu = minu > 9 ? '' + minu : '0' + minu
  newSecond = newSecond % 60
  const _second = newSecond > 9 ? '' + newSecond : '0' + newSecond
  return `${_minu}:${_second}`
}
</script>

<style lang="scss" scoped>
.controlBarBox {
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .stopBox {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.28rem;

    img {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  .touchLine {
    width: 100%;
    padding: 0 10px;
    height: 1.38rem;
    background: -ms-linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
    background: -moz-linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
    background: -webkit-linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
    background: -o-linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
    position: relative;
    z-index: 1;

    .progressBox {
      width: 100%;
      padding: 0 10px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      height: 0.32rem;
      display: flex;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.8);

      .line-bg {
        height: 0.12rem;
        width: 100%;
        border-radius: 0.06rem;
        background-color: #E5E6EB4D;
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: all 0.2s;

        .line-item {
          height: 100%;
          border-radius: 0.06rem 0 0 0.06rem;
          background-color: #E5E6EB;
        }

        .lin-dot {
          width: 0.32rem;
          height: 0.32rem;
          border-radius: 50%;
          background-color: #FFFFFF;
        }
      }
    }

    .progressActiveBox {
      .line-bg {
        background-color: #E5E6EB40;
        height: 0.04rem;
        border-radius: 0.02rem;

        .line-item {
          border-radius: 0.02rem 0 0 0.02rem;
          background-color: #E5E6EB80;
        }

        .lin-dot {
          width: 0.12rem;
          height: 0.12rem;
          background-color: #878787;
        }
      }
    }

    .timeBox {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      .text {
        font-size: 0.40rem;
        color: #FFFFFF;
        text-shadow: 0 0.02rem 0.06rem rgba(0, 0, 0, 0.4);
        font-weight: 500;
      }

      .line {
        width: 0.02rem;
        height: 0.24rem;
        background-color: #C9CDD4;
        margin: 0 0.25rem;
      }
    }
  }
}
</style>
