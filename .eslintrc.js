module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-unused-vars': 1, // js 中不能出现未使用的变量
    'vue/multi-word-component-names': 0, // 不检测连字符命名
    // 空行最多不能超过一行
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0
      }
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ]
  },
  globals: {
    uni: true,
    wx: true
  }
}
