/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // eslint 要求组件名称以驼峰格式命名，自定义组件名称应该由多单词组成，关闭此项
    'vue/multi-word-component-names': 'off'
  }
}
