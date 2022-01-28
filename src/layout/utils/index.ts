// @ts-nocheck
/**  防抖函数 */
export const debounce = function (fn: Function, wait = 300) {
  let timer: NodeJS.Timeout
  return function () {
    //清除上一次的延时器
    timer && clearTimeout(timer)
    //重新设置新的延时器
    timer = setTimeout(
      function (args: any) {
        fn.apply(this, args)
        // eslint-disable-next-line prefer-rest-params
      }.bind(this, arguments),
      wait
    )
  }
}

/** 函数节流  | null = null*/
export const throttle = function (fn: Function, wait = 300) {
  wait = wait || 300 //默认节流300毫秒触发
  let lastTime = 0 //记录上一次函数触发的时间
  return function () {
    const nowTime = Date.now()
    if (lastTime < 1 || nowTime - lastTime >= wait) {
      // eslint-disable-next-line prefer-rest-params
      fn.apply(this, arguments)
      lastTime = nowTime
    }
  }
}

/** 获取屏幕宽度 */
export const globalWitchEffect = function (fn: Function) {
  fn(window.innerWidth)
  window.onresize = debounce((e: any) => {
    fn(e.target.innerWidth)
  })
}

/** 判断是否是url地址 */
export const isURL = function (urlStr: string) {
  const regular =
    /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\\@&?=+,.!\\/~%\\$]*)?)$/i
  if (regular.test(urlStr)) {
    return true
  } else {
    return false
  }
}
