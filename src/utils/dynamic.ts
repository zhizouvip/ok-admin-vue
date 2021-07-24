export const regards = function (name = 'Admin') {
  let str = '';
  const hour = new Date().getHours();
  if (hour >= 5 && hour <= 11) {
    // 早上
    str = `早安，${name}，一日之计在于晨，越早预约办理，越早通过！`;
  } else if (hour > 11 && hour <= 14) {
    // 中午
    str = `中午好，${name}，午休时间,您要保持睡眠哦！`;
  } else if (hour > 14 && hour <= 19) {
    // 下午
    str = `下午好，${name}，祝您下午工作愉快！`;
  } else if (hour > 19 && hour <= 23) {
    // 傍晚
    str = `晚上好，${name}，辛勤劳动了一天早点休息吧！`;
  } else if (hour >= 0 && hour < 5) {
    // 深夜
    str = `现在已经是深夜，${name} 别熬夜了，赶紧休息吧`;
  }
  return str;
};
