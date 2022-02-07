// https://prettier.io/docs/en/options.html#prose-wrap
// https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 100, // 一行最多 100 字符
  tabWidth: 2, // 使用 2 个空格缩进
  useTabs: false, // 不使用缩进符，而使用空格
  singleQuote: true, // 单引号
  trailingComma: 'none', // 行尾逗号,默认none,可选 none|es5|all
  semi: false, // 末尾是否自动加上分号
  arrowParens: 'always', // 箭头函数参数括号 默认avoid 可选 avoid| always
  vueIndentScriptAndStyle: true,
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  bracketSpacing: true, // 大括号内的首尾需要空格
  jsxBracketSameLine: false, // 多行jsx中的>放置在最后一行的结尾，而不是另起一行
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto' // 换行格式 1.CRLF-回车符+换行符（\r\n） 2.LF仅\n换行（） 3.auto 维持现有的行尾
}
