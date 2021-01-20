module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'linebreak-style': 0,
    'no-alert': 0,
    'import/no-cycle': 0,
    'object-shorthand': 0,
    'func-names': 0,
    'max-len': 0,
    'dot-notation': 0,
    'no-plusplus': 0,
    'array-callback-return': 0,
    'consistent-return': 0,
    'no-undef': 1,
    eqeqeq: 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
