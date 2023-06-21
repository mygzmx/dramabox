<template>
  <div class="loading-wrap" :class="duration === 0 ? 'loading-wrap2' : ''">
    <div class="loadingBox">
      <div class="circle1"></div>
      <div class="circle2"></div>
    </div>
    <div
      v-for="item in message"
      :key="item"
      class="loading-normal_txt"
      :class="animation && 'animation_txt'">{{ item }}
    </div>
  </div>
</template>
<script lang="ts" setup>

defineProps({
  message: {
    type: Array,
    default: () => []
  },
  animation: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 0,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.loading-wrap {
  position: absolute;
  z-index: 100;
  top: 0;
  width: 100%;
  height: calc(100% - 0.32rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);

  .loadingBox {
    height: 0.68rem;
    width: 0.68rem;
    box-shadow: 0 0 0 0.1rem #ffffff66;
    border-radius: 50%;
    position: relative;
    margin-bottom: 0.5rem;

    .circle1, .circle2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      animation-name: loadRotate;
      animation-duration: 1000ms;
      animation-timing-function: ease-out;
      animation-iteration-count: infinite;

      &::before {
        position: absolute;
        top: -0.1rem;
        left: -0.1rem;
        content: "";
        width: 50%;
        height: 50%;
        border-top: 0.1rem solid #FFFFFF80;
        border-left: 0.1rem solid rgba(255, 255, 255, 0.5);
        display: inline-block;
        border-radius: 100% 0 0 0;
      }
    }

    .circle2 {
      animation-name: loadRotate;
      animation-delay: 300ms;
      animation-duration: 3000ms;
      animation-timing-function: linear;

      &::before {
        border-top: 0.1rem solid #FFFFFF;
        border-left: 0.1rem solid #FFFFFF;
      }
    }

  }

  .loading-normal_txt {
    color: #FFFFFFB3;
    font-size: 0.30rem;
    font-weight: 400;
    line-height: 0.48rem;
  }

  .animation_txt {
    animation-name: textShow;
    animation-duration: 600ms;
    animation-timing-function: ease;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 2s;
    opacity: 0;
  }
}
.loading-wrap2 {
  height: 100%;
}
@keyframes textShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes loadRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
