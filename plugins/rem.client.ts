import { defineNuxtPlugin } from "#app";

// 隔离作用域，避免全局变量的污染
(function (doc, win) {
  var resizeEvt = "orientationchange" in win ? "orientationchange" : "resize";
  var recalc = function () {
    doc.documentElement.style.fontSize = 100 * (doc.documentElement.clientWidth / 720) + 'px'
  };
  recalc();
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
  win.onbeforeunload = function () {
    win.removeEventListener(resizeEvt, recalc, false)
    doc.removeEventListener('DOMContentLoaded', recalc, false)
  }
})(document, window);

export default defineNuxtPlugin(() => {})
