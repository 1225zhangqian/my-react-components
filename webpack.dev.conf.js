const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const path = require('path');
module.exports = merge(baseConfig, {
  entry: {
    example: path.join(__dirname, 'example/index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkLoading: false,
    wasmLoading: false
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 3001,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    })
  ]
});
