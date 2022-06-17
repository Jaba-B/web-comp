/* eslint-disable linebreak-style */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: 2,
    eqeqeq: 'off',
    curly: 'error',
    quotes: ['error', 'single'],
    strict: 'off',
  },
};
