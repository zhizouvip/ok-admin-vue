/*
 * 其他两种颜色
 * primaryColorFocus; 默认和primaryColorHover一样
 * primaryColorDisabled; 默认和primaryColor一样
 * */

/** @interface IThemeType类型 */
export interface IThemeType {
  primaryColor: string
  primaryColorHover: string
  primaryColorPressed: string
}
const defaultColor = {
  primaryColor: '#18A058',
  primaryColorHover: '#36AD6A',
  primaryColorPressed: '#0C7A43'
}
const layuiColor = {
  primaryColor: '#009688',
  primaryColorHover: '#33aba0',
  primaryColorPressed: '#00877a'
}

/**antd start https://ant.design/docs/spec/colors-cn */
const antdColor = {
  primaryColor: '#1890ff',
  primaryColorHover: '#40a9ff',
  primaryColorPressed: '#096dd9',
  primaryColorDins: '' // 底色
}
const dustRedColor = {
  primaryColor: '#f5222d',
  primaryColorHover: '#ff4d4f',
  primaryColorPressed: '#cf1322'
}
const volcanoColor = {
  primaryColor: '#ff7a45',
  primaryColorHover: '#ff4d4f',
  primaryColorPressed: '#d4380d'
}
const sunsetOrangeColor = {
  primaryColor: '#fa8c16',
  primaryColorHover: '#ffa940',
  primaryColorPressed: '#d46b08'
}
const calendulaGoldColor = {
  primaryColor: '#faad14',
  primaryColorHover: '#ffc53d',
  primaryColorPressed: '#d48806'
}
const sunriseColor = {
  primaryColor: '#fadb14',
  primaryColorHover: '#ffec3d',
  primaryColorPressed: '#d4b106'
}
const limeColor = {
  primaryColor: '#a0d911',
  primaryColorHover: '#bae637',
  primaryColorPressed: '#7cb305'
}
const polarGreenColor = {
  primaryColor: '#52c41a',
  primaryColorHover: '#73d13d',
  primaryColorPressed: '#389e0d'
}
const cyanColor = {
  primaryColor: '#13c2c2',
  primaryColorHover: '#36cfc9',
  primaryColorPressed: '#08979c'
}
const geekBlueColor = {
  primaryColor: '#2f54eb',
  primaryColorHover: '#597ef7',
  primaryColorPressed: '#1d39c4'
}
const goldenPurpleColor = {
  primaryColor: '#722ed1',
  primaryColorHover: '#9254de',
  primaryColorPressed: '#531dab'
}
const magentaColor = {
  primaryColor: '#eb2f96',
  primaryColorHover: '#f759ab',
  primaryColorPressed: '#c41d7f'
}

/**antd end https://ant.design/docs/spec/colors-cn */

const blueColor = {
  primaryColor: '#2d8cf0',
  primaryColorHover: '#57a3f3',
  primaryColorPressed: '#297ed8'
}
const pureBlueColor = {
  primaryColor: '#0960bd',
  primaryColorHover: '#3a80ca',
  primaryColorPressed: '#0856aa'
}
const purpleColor = {
  primaryColor: '#536dfe',
  primaryColorHover: '#758afe',
  primaryColorPressed: '#4b62e5'
}
const pinkColor = {
  primaryColor: '#ff5c93',
  primaryColorHover: '#ff7da9',
  primaryColorPressed: '#e65384'
}
const orangeColor = {
  primaryColor: '#ee4f12',
  primaryColorHover: '#f17241',
  primaryColorPressed: '#d64710'
}
const oceanColor = {
  primaryColor: '#0096c7',
  primaryColorHover: '#33abd2',
  primaryColorPressed: '#0087b3'
}
const purpleBColor = {
  primaryColor: '#9c27b0',
  primaryColorHover: '#b052c0',
  primaryColorPressed: '#8c239e'
}
const yellowColor = {
  primaryColor: '#ff9800',
  primaryColorHover: '#ffad33',
  primaryColorPressed: '#e68900'
}

export const appThemeList = {
  defaultColor,
  layuiColor,

  /**antd start */
  antdColor,
  dustRedColor,
  volcanoColor,
  sunsetOrangeColor,
  calendulaGoldColor,
  sunriseColor,
  limeColor,
  polarGreenColor,
  cyanColor,
  geekBlueColor,
  goldenPurpleColor,
  magentaColor,
  /**antd end */

  blueColor,
  pureBlueColor,
  purpleColor,
  pinkColor,
  orangeColor,
  oceanColor,
  purpleBColor,
  yellowColor
}

export type IAppThemeList = typeof appThemeList

export default {
  /** @name 是否是暗夜主题 */
  isDarkTheme: false,
  /** @name 默认主题色 */
  appTheme: defaultColor,
  /** @name 主题列表 */
  appThemeList
}
