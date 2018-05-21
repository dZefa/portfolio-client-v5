const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src/index.tsx');
const BUILD_DIR = path.resolve(__dirname, './dist');
const TEMPLATE_DIR = path.resolve(__dirname, './src/template.index.html');

module.exports = {
  entry: {
    app: APP_DIR,
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        enforce: 'pre',
        test: '/.js$/',
        loader: 'source-map-loader',
      }
    ]
  },
  plugins: [
    new CleanPlugin(['dist']),
    new HTMLPlugin({
      template: TEMPLATE_DIR,
      inject: 'body',
    }),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
};
