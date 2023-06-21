<template>
  <div class="videoWrap">
    <VideoPlayer
      class="video-player vjs-custom-skin"
      :class="isShowPoster && 'vjs-custom-poster'"
      @canplay="onCanplay"
      @play="onPlay"
      @pause="onPause"
      @ended="onEnded"
      @waiting="onWaiting"
      @timeupdate="onTimeupdate"
      @error="onErrorEve"
      :options="options"/>
    <loading-normal :duration="duration" v-if="isLoading" :message="['当前网络不佳', '正在努力加载中...']" animation/>
    <video-control
      :duration="duration"
      :is-show-stop="isShowStop && !isLoading"
      :progress="progress"
      @controlPlay="controlPlay"
      @dragProgress="dragProgress"
    />
  </div>
</template>

<script lang="ts" setup>
import VideoControl from '@/components/player/videoUnion/videoControl.vue'
import LoadingNormal from '@/components/common/loadingNormal.vue'
import {
  ref,
  reactive,
  onBeforeUnmount,
  watch, defineComponent,
} from 'vue'
import { DeviceModule } from '@/store/modules/device'
import { ChaptersModule } from '@/store/modules/chapters'
import { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js'
import { ITheaterItem } from '@/types/player.interface'
import { PlayerModule } from '@/store/modules/player'
import { VideoPlayer } from "@videojs-player/vue";
defineComponent({
  VideoPlayer
})
const videoInstance = ref({} as VideoJsPlayer)
const isLoading = ref(true)// 视频加载状态
const isShowStop = ref(true) // 暂停按钮
const duration = ref(0) // 视频总时长
const progress = ref(0) // 进度条

interface IProps {
  chapterInfo: ITheaterItem;
  isShowPage: boolean;
}
const props = defineProps<IProps>()
// 运行时
const emits = defineEmits(['videoEnd'])
// // 基于类型
// const emits = defineEmits<{(e: 'videoEnd'): void;}>()

const options = reactive<VideoJsPlayerOptions>({
  language: 'zh-CN',
  preload: 'auto', // none：表示不应预加载视频 | metadata：表示仅获取视频元数据（例如长度）| auto：表示可以下载整个视频文件，即使用户不希望使用它。
  techOrder: ['html5'], // 兼容顺序，默认值是['html5']，其他已注册的技术将按其注册的顺序在该技术之后添加。
  muted: false, // 静音
  defaultVolume: 1, // 默认音量大小
  loop: false, // 循环播放
  autoplay: false, // 自动播放
  poster: props.chapterInfo.son_cover_url, // 封面
  fluid: true, // 当true时，将按比例缩放以适应其容器。
  // withCredentials: false,
  // hls: true,
  sources: [ // 等同于原生<video>标签中的一组<source>子标签，可实现优雅降级；type 属性规定媒体资源的 MIME 类型
    {
      type: 'video/mp4',
      src: props.chapterInfo.son_video_url // url地址
    },
  ],
  controls: false, // 是否显示控制器
  playsinline: true // the video is to be played "inline", that is within the element's playback area
  // crossOrigin: 'use-credentials', // use-credentials anonymous
})

// 是否暂停视频
watch(() => [PlayerModule.isShowEndPage, props.isShowPage, DeviceModule.isOnline, ChaptersModule.isPayVisible],
  ([isShowEndPage, isShowPage, isOnline, isPayVisible]) => {
    // 是否暂停视频
    // const isPlaying = videoInstance.value.paused && !videoInstance.value.paused()
    const isPlaying = true
    // 监听是否显示全局形式loading
    const isPageLoading = isShowPage && !isShowEndPage
    // if (isPageLoading) {
    //   isLoading.value = true
    // }
    // 监听是否显示最终页了
    // 监听视频是否断网
    // 监听显示支付弹框
    // 离开当前屏幕
    if ((isPageLoading || isShowEndPage || !isShowPage || !isOnline || isPayVisible) && isPlaying) {
      videoInstance.value.pause()
    }
  }
)
watch(() => [props.isShowPage, DeviceModule.isOnline, ChaptersModule.isPayVisible],
  ([isShowPage, isOnline, isPayVisible]) => {
    const isPlaying = videoInstance.value.paused && videoInstance.value.paused()
    // 是否开始视频
    if (isShowPage && !PlayerModule.isShowEndPage && !isPayVisible && isOnline && isPlaying) {
      videoInstance.value.play()
    }
  }
)
watch(() => [props.isShowPage, DeviceModule.isOnline, DeviceModule.isNeedReload],
  ([isShowPage, isOnline, isNeedReload]) => {
    // 是否重置视频，由断网引起的视频加载失败
    if (isShowPage && isNeedReload && isOnline) {
      videoInstance.value.reset && videoInstance.value.reset()
      DeviceModule.SetIsNeedReload(false);
    }
  }
)
// 暂停按钮
const controlPlay = () => {
  if (videoInstance.value.paused && videoInstance.value.paused()) {
    videoInstance.value.play && videoInstance.value.play()
  } else {
    videoInstance.value.pause && videoInstance.value.pause()
  }
}

const dragProgress = (progressValue: number) => {
  isLoading.value = true
  if (duration.value && duration.value > 0) {
    videoInstance.value.currentTime(progressValue / 100 * duration.value - 0.5)
  }
  if (props.isShowPage && !PlayerModule.isShowEndPage && videoInstance.value.paused && videoInstance.value.paused()) {
    videoInstance.value.play()
  }
}
// 是否显示封面
const isShowPoster = ref(true)

const onCanplay = (ev: { target: { player: VideoJsPlayer } }) => {
  videoInstance.value = ev.target.player
  duration.value = ev.target.player.duration() || 0
  isLoading.value = false
  if (props.isShowPage && videoInstance.value.paused && videoInstance.value.paused()) {
    videoInstance.value.play()
  }
}
const onPlay = () => {
  isShowStop.value = false
}
const onPause = () => {
  isShowStop.value = true
}
const onEnded = () => {
  // 剧集播放完毕
  if (PlayerModule.theaters.length > 0 && props.chapterInfo.num === PlayerModule.theaters.length) {
    PlayerModule.SetIsShowEndPage(true)
  } else {
    emits('videoEnd')
  }
}
const onTimeupdate = (ev: { target: { player: VideoJsPlayer } }) => {
  const player = ev.target.player
  if (!duration.value || duration.value === 0) {
    duration.value = player.duration()
  }
  if (player.currentTime() > 0 && isShowPoster.value) {
    isShowPoster.value = false
  }
  progress.value = Math.floor(player.currentTime() / duration.value * 100)
}
// 加载loading显示
const onWaiting = () => {
  isLoading.value = true
}
// 错误处理
const onErrorEve = () => {
  if (!DeviceModule.isOnline) {
    DeviceModule.SetIsNeedReload(true);
  }
}

onBeforeUnmount(() => {
  videoInstance.value.pause && videoInstance.value.pause()
  videoInstance.value.dispose && videoInstance.value.dispose()
})

</script>

<style lang="scss" scoped>

.videoWrap {
  width: 100%;
  height: 100%;
  background-color: #0F0F0F;
  position: relative;

  :deep(.video-js) {
    width: 100%;
    height: 100% !important;
  }
}

/*播放按钮设置成宽高一致，圆形，居中*/
.vjs-custom-skin {
  :deep(.vjs-error-display) {
    display: none !important;
  }

  :deep(.vjs-loading-spinner) {
    display: none !important;
  }

  :deep(.vjs-poster) {
    display: none !important;
  }
}

.vjs-custom-poster {
  :deep(.vjs-poster) {
    display: inline-block !important;
  }
}
</style>
