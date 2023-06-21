<template>
  <Layout>
    <NuxtPage/>
  </Layout>
</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, onMounted } from 'vue'
import { DeviceModule } from '@/store/modules/device'
import { ChaptersModule } from '@/store/modules/chapters'
import { EAutoAdd } from '@/types/common.interface'
import { UserModule } from '@/store/modules/user'
import { PlayerModule } from '@/store/modules/player'
import { addListen, removeListen } from "~/utils/rem";
import Layout from "@/layout/layout"
import { ownOs } from "~/utils/pline";

const { data: configData } = await $fetch('/api/quick/app/user/login',
  {
    baseURL: 'https://zf.jxjzwh.cn',
    method: "POST",
    body: JSON.stringify({
      "undid": "yarrD1C_10gI9yQwwn3swNzyqZQF-J8m8Ocvhssg",
      "openid": "kgXxR5D5s1uPgNvWy9BBKt2A9ENSDKBvatHg1TnJKLnJwFaf3Gvt80hnvvc6mBQv",
      "gzh_id": "xiaomi",
      "request_id": "",
      "put_link_id": "",
      "ad_id": "",
      "callback": "",
    }),
    onRequest({ request, options }) {
      // Set the request headers
      options.headers = options.headers || {}
      options.headers['App-Origin'] = 'wx3e1e4c735213dcb5'
    },
    onRequestError({ request, options, error }) {
      // Handle the request errors
    },
    async onResponse({ request, response, options }) {
      UserModule.SetUserInfo(response._data.data as INetLoginRes);
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
    }
  });


const updateOnlineStatus = () => {
  DeviceModule.SetIsOnline(true)
  if (PlayerModule.parent_info.autoAdd === EAutoAdd.否) {
    ChaptersModule.SetIsShowDrama(true)
  }
  console.log('-----------网络连接成功-----------')
}

const updateOfflineStatus = () => {
  DeviceModule.SetIsOnline(false)
  if (ChaptersModule.isShowDrama) {
    ChaptersModule.SetIsShowDrama(false)
  }
  console.log('-----------网络断开连接-----------')
}

// 设置rem字体大小并判断设备 初始化
const setRemScript = () => {
  const clientWidth = window.innerWidth || document.documentElement.clientWidth;
  const { isPc } = ownOs(window.navigator.userAgent);
  // dispatch(setDevice(isPc ? EDevice.pc : EDevice.mobile));
  if (isPc) {
    /**pc端补偿google cls标准, 禁用以下*/
    // if (clientWidth <= 1366){
    //   document.documentElement.style.fontSize = 100 * (1366 / 1800) + 'px';
    // } else {
    //   document.documentElement.style.fontSize = 100 * (clientWidth / 1800) + 'px';
    // }
  } else {
    document.documentElement.style.fontSize = 100 * (clientWidth / 750) + 'px';

  }
}
// 监听
const setRemScriptListen = () => {
  const clientWidth = window.innerWidth || document.documentElement.clientWidth
  const { isPc } = ownOs(window.navigator.userAgent)
  if (isPc) {
    if (clientWidth >= 1366 && clientWidth <= 1800) {
      document.documentElement.style.fontSize = 100 * (clientWidth / 1700) + 'px';
    }
  } else {
    document.documentElement.style.fontSize = 100 * (clientWidth / 750) + 'px';
  }
}

onBeforeMount(async () => {
  setRemScript();
  addListen(setRemScriptListen);
  // 监听网络
  // 网络由异常到正常时触发
  window.addEventListener('online', updateOnlineStatus)
  // 网络由正常到异常触发
  window.addEventListener('offline', updateOfflineStatus)
})

onBeforeUnmount(() => {
  removeListen(setRemScriptListen)

  window.removeEventListener('online', updateOnlineStatus)
  window.removeEventListener('offline', updateOfflineStatus)
})
</script>
<style>
/*@import url("assets/css/main.css");*/
</style>
