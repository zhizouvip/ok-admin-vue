// https://blog.csdn.net/weixin_43977053/article/details/107631681
// https://blog.csdn.net/xjlinme/article/details/80003597
/**
 * 配置说明链接
 * https://eslint.vuejs.org/rules/
 * https://stackoverflow.com/questions/68776902/should-i-use-pluginvue-essential-and-pluginvue-vue3-recommended-when-linti/687769478
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    // 针对@typescript-eslint/parser版本4+及其以上找不到NodeJS问题处理
    NodeJS: true,
    // vue3使用setup时自动引入的编译宏
    defineProps: 'readonly',
    defineEmits: 'readonly'
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:vue/vue3-essential', // vue3核心的eslint规则
    'plugin:vue/vue3-recommended', // vue3推荐的强制执行主观社区默认值的规则，以确保一致性。
    'plugin:vue/vue3-strongly-recommended', //  vue3推荐的依赖规则提高可读性
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended', // eslint建议的规则
    '@vue/prettier',
    'prettier'
    // '@vue/prettier/@typescript-eslint'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'vue/no-unused-components': 'off',
    'vue/no-unused-vars': 'off',
    // 关闭文件有多个组件的警告
    'vue/one-component-per-file': 'off',
    // 关闭 console的提示
    'no-console': ['off', { allow: ['warn', 'error'] }],
    // 关闭 console的提示
    '@typescript-eslint/no-console': ['off', { allow: ['warn', 'error'] }],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 未使用的变量值不做提示
    '@typescript-eslint/no-unused-vars': [
      'off',
      { argsIgnorePattern: '^h$', varsIgnorePattern: '^h$' }
    ],
    // 未使用的变量值不做提示
    'no-unused-vars': ['off', { argsIgnorePattern: '^h$', varsIgnorePattern: '^h$' }],
    'space-before-function-paren': 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'vue/require-default-prop': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    'vue/comment-directive': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off'
  }
}
