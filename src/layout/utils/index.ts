// @ts-nocheck
/**
 * 防抖函数
 */
export const debounce = function (callback: Function, wait = 300) {
  let timer: NodeJS.Timeout | null = null;
  return function () {
    //清除上一次的延时器
    timer && clearTimeout(timer);
    //重新设置新的延时器
    timer = setTimeout(
      function (args: any) {
        callback.apply(this, args);
      }.bind(this, arguments),
      wait
    );
  };
};

/**
 * 函数节流
 */
export const throttle = function (callback: Function, wait = 300) {
  wait = wait || 300; //默认节流300毫秒触发
  let lastTime = 0; //记录上一次函数触发的时间
  return function () {
    let nowTime = Date.now();
    if (lastTime < 1 || nowTime - lastTime >= wait) {
      callback.apply(this, arguments);
      lastTime = nowTime;
    }
  };
};

/***获取屏幕宽度 */
export const globalWitchEffect = function (callback: Function) {
  callback(globalThis.innerWidth);
  globalThis.onresize = debounce((e: any) => {
    callback(e.target.innerWidth);
  });
};
