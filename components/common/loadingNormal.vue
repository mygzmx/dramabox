<template>
  <div class="loading-wrap" :class="duration === 0 ? 'loading-wrap2' : ''">
    <div class="loading-spinner">
      <div class="loading-circle">
        <div class="loading-circle-item">
          <div class="loading-color-item"/>
        </div>
      </div>
      <div class="loading-circle2">
        <div class="loading-circle-item">
          <div class="loading-color-item2"></div>
        </div>
      </div>
      <div class="loading-circle3">
        <div class="loading-circle-item">
          <div class="loading-color-item3"></div>
        </div>
      </div>
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
.loading-wrap2 {
  height: 100% !important;
}
.loading-normal_txt {
  color: #FFFFFF;
  font-size: 0.3rem;
  font-weight: 600;
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

.loading-wrap {
  position: absolute;
  z-index: 100;
  top: 0;
  width: 100%;
  height: calc(100% - 0.32rem);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.loading-spinner {
  position: relative;
  margin-bottom: 0.4rem;
  width: 1.2rem;
  height: 1.7rem;
  animation-name: loadRotate;
  animation-duration: 3000ms;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}

.loading-circle, .loading-circle2, .loading-circle3 {
  position:absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  justify-content: center;
}
.loading-circle2 {
  transform: rotate(240deg);
}
.loading-circle3 {
  transform: rotate(120deg);
}

.loading-circle-item {
  width: 0.5rem;
  height: 0.5rem;
  animation-name: cubemove;
  animation-duration: 1000ms;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}
.loading-color-item, .loading-color-item2, .loading-color-item3 {
  background-color: #ff4b00;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  animation-name: colorchange;
  animation-duration: 3000ms;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}
.loading-color-item2 {
  background-color: #ff8755;
  animation-delay: 1s;
}
.loading-color-item3 {
  background-color: #ffbb9f;
  animation-delay: 2s;
}

@keyframes cubemove {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes colorchange {
  0% {
    background-color: #ff4b00;
  }
  33.3% {
    background-color: #ff8755;
  }
  66.6% {
    background-color: #ffbb9f;
  }
  100% {
    background-color: #ff4b00;
  }
}

@keyframes loadRotate {
  0% {
    transform: rotate(0deg);
  }
  33.3% {
    transform: rotate(120deg);
  }
  66.6% {
    transform: rotate(240deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes textShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
