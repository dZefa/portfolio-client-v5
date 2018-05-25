const webpack = require('webpack');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const APP_DIR = path.resolve(__dirname, './src/index.tsx');
const BUILD_DIR = path.resolve(__dirname, './dist');
const CSS_DIR = path.resolve(__dirname, './src/global.scss');

const extractCSS = new ExtractTextPlugin({
  filename: 'bundle.css',
  allChunks: true,
});

const createCSSfile = new HTMLPlugin({
  chunks: ['css'],
  excludeChunks: ['js', 'common'],
  minify: {
    collapseWhitespace: true,
    preserveLineBreaks: true,
    removeComments: true,
  },
  inject: false,
  hash: true,
  template: 'src/ejs/css.ejs',
  filename: 'templates/css.php'
});

const createJSfile = new HTMLPlugin({
  chunks: ['js', 'common'],
  excludeChunks: ['css'],
  minify: {
    collapseWhitespace: true,
    preserveLineBreaks: true,
    removeComments: true,
  },
  inject: false,
  hash: true,
  template: 'src/ejs/js.ejs',
  filename: 'templates/js.php'
});

module.exports = {
  entry: {
    'css': [
      CSS_DIR
    ],
    'js': [
      APP_DIR
    ],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].app.bundle.js',
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
        use: extractCSS.extract([
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ])
      },
      {
        enforce: 'pre',
        test: '/.js$/',
        loader: 'source-map-loader',
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          minChunks: 2,
        },
      },
    },
  },
  plugins: [
    new CleanPlugin(['dist']),
    createCSSfile,
    createJSfile,
    extractCSS
  ]
};
