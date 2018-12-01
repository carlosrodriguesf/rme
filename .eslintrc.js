module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [2, 'never'],
    'comma-dangle': [2, 'never'],
    'import/extensions': 'off',
    'vue/no-unused-components': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'no-multi-spaces': ['error', { exceptions: { 'ImportDeclaration': true } }],
    'func-names': 'off',
    'no-continue': 'off',
    'no-reassign-param': 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-return-await': 'off',
    'no-alert': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
