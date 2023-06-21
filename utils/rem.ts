// 设置REM
export const addListen = (fn: () => void) => {
  if (!document.addEventListener) return
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  window.addEventListener(resizeEvt, fn, false)
  document.addEventListener('DOMContentLoaded', fn, false)
}

export const removeListen = (fn: () => void) => {
  if (!document.addEventListener) return
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  window.removeEventListener(resizeEvt, fn, false)
  document.removeEventListener('DOMContentLoaded', fn, false)
}
