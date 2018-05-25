const merge = require('webpack-merge');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

const common = require('./webpack.common');

const TEMPLATE_DIR = path.resolve(__dirname, './src/template.index.html');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HTMLPlugin({
      template: TEMPLATE_DIR,
      inject: true,
    })
  ]
});
