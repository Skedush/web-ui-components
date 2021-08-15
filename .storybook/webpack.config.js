const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
          paths: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')],
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
      },
      {
        loader: require.resolve('ts-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          propFilter: function(prop) {
            if (prop.parent) {
              return !prop.parent.fileName.includes('node_modules');
            }
            return true;
          },
        },
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    '@': path.resolve(__dirname, '../src'),
  };

  return config;
};
