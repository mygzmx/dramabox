import { defineNuxtPlugin } from "#app";

// 隔离作用域，避免全局变量的污染
(function (doc, win) {
  const resizeEvtName = "orientationchange" in win ? "orientationchange" : "resize";
  const resizeFn = function () {
    doc.documentElement.style.fontSize = 100 * (doc.documentElement.clientWidth / 720) + 'px'
  };
  resizeFn();
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvtName, resizeFn, false);
  doc.addEventListener("DOMContentLoaded", resizeFn, false);
  win.onbeforeunload = function () {
    win.removeEventListener(resizeEvtName, resizeFn, false)
    doc.removeEventListener('DOMContentLoaded', resizeFn, false)
  }
})(document, window);

export default defineNuxtPlugin(() => {})
