export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 'error',
    camelcase: ['error', { properties: 'never' }],
    '@typescript-eslint/consistent-type-imports': 'error',
  },
};
