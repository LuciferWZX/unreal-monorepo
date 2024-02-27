module.exports = {
  env: { browser: true, es2020: true },
  globals: {
    require: 'readonly' // 将 require 声明为全局变量
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  // parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: 'tsconfig.json' },
  plugins: ['react-refresh',"prettier"],
  rules: {
    // 'react-refresh/only-export-components': 'warn',
    // 'react/react-in-jsx-scope': 'off', // 使用 jsx 时不需要引用 React
    // '@typescript-eslint/strict-boolean-expressions': 'off', // 表达式中的布尔值必须严格是布尔类型
  },
};
