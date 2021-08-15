module.exports = {
  extends: '@lidig',
  rules: {
    'valid-jsdoc': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [1, { args: 'none' }],
      },
    },
  ],
};
