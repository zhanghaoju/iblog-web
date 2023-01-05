// 判断是否是移动端
export const isPC = (() => {
  let userAgentInfo = navigator.userAgent;
  let Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  let pc = true;
  // 循环遍历
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      pc = false;
      break;
    }
  }
  // 屏幕长度大于750时默认为pc
  return pc && window.innerWidth > 750;
})();
