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
    'indent': ['error', 2],
    'quotes': ['error', double],
    'guard-for-in': 'error',
    'linebreak-style': ['error', unix],
    'eqeqeq': 'error'
  },
};
