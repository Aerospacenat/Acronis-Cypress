module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    'cypress/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'cypress', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-var-requires': 'off'
  }
};
