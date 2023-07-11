// import { defineNuxtPlugin } from "#app";
//
// export default defineNuxtPlugin((nuxtApp) => {
//
//   // nuxtApp.vueApp.use(VueGtag, {
//   //   property: {
//   //     id: 'GA_MEASUREMENT_ID'
//   //   }
//   // })
// })

// 隔离作用域，避免全局变量的污染
// @ts-ignore
!(function () {
  function setHtmlFontSize() {
    var whdef = 100 / 750; // 表示750的设计图,使用100PX的默认值
    var bodyWidth = document.documentElement.getBoundingClientRect().width; // 当前窗口的宽度
    console.log(bodyWidth, '屏幕宽度');
    var rem = bodyWidth * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
  }
  setHtmlFontSize();
  window.addEventListener("resize", function () {
    // setTimeout 是为了解决在苹果手机上的闪屏情况
    setTimeout(function () {
      setHtmlFontSize();
    }, 100)
  })
})();
