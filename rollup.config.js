import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
// import postcssModules from 'postcss-modules';
// import { uglify } from 'rollup-plugin-uglify';
import path from 'path';
import packageJson from './package.json';

// const cssExportMap = {};

export default {
  input: 'src/components/index.tsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
    },
    {
      file: packageJson.module,
      format: 'esm',
    },
  ],
  external: [
    'antd',
    'react',
    'react-dom',
    'prop-types',
    'react-focus-on',
    '@ant-design/compatible',
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
    }),
    typescript({ objectHashIgnoreUnknownHack: true }),
    commonjs({
      include: ['node_modules/**'],
      // config for storybook
      // exclude: ['**/*.stories.js'],
      namedExports: {
        // 'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        // 'node_modules/react-dom/index.js': ['render']
        'node_modules/lodash/lodash.js': ['isObject', 'cloneDeep', 'chunk', 'isEmpty'],
        'node_modules/react-is/index.js': ['isValidElementType', 'isMemo', 'isFragment'],
        'node_modules/draft-js/lib/Draft.js': [
          'convertToRaw',
          'ContentState',
          'CharacterMetadata',
          'ContentBlock',
          'Entity',
          'BlockMapBuilder',
          'genKey',
          'SelectionState',
        ],
        'node_modules/immutable/dist/immutable.js': ['List', 'OrderedSet', 'Map'],
      },
    }),
    postcss({
      // plugins: [
      //   postcssModules({
      //     getJSON(id, exportTokens) {
      //       cssExportMap[id] = exportTokens;
      //     },
      //   }),
      // ],
      // getExport(id) {
      //   return cssExportMap[id];
      // },
      extract: true,
      extensions: ['.css', '.less'],
      use: [
        [
          'less',
          {
            javascriptEnabled: true,
            paths: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
          },
        ],
      ],
      // // Enable CSS modules or set options for postcss-modules.
      // modules: true,
      // Automatically enable CSS modules for .module.css .module.sss .module.scss .module.sass .module.styl .module.stylus .module.less files.
      // autoModules: true,
    }),
    babel({
      exclude: ['node_modules/**', 'src/**/**/*.stories.(js|tsx|mdx)'],
    }),
    // uglify(),
  ],
};
