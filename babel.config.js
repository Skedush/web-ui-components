module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    // 解决TS中的 module 引用问题
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
      },
    ],
  ],
};
