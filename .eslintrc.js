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
    'class-methods-use-this': 0,
    'prefer-promise-reject-errors': 0,
    'no-else-return': 0,
    eqeqeq: 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
