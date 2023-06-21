export const ownOs = function (ua: string) {
  const isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = ua && !isPhone && !isAndroid && !isSymbian;
  // if (isAndroid || isPhone) {
  //   console.log("手机")
  // } else if (isPc) {
  //   console.log("电脑")
  // }
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc,
    isMobile: isPhone || isAndroid || isSymbian,
  };
};

export const isIos = (ua: string) => {
  const isMac = /macintosh|mac_powerpc|mac os x/i.test(ua.toLowerCase());
  const isPhone = /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(ua) || /ios|iphone|ipad|ipod/.test(ua.toLowerCase())
  return isMac || isPhone;
}

export const isAndroid = (ua: string) => /AppleWebKit.*Mobile.*/.test(ua) && (/android/.test(ua.toLowerCase()) || ua.indexOf('Adr') > -1);
