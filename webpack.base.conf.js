const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
module.exports = {
  entry: {
    example: path.join(__dirname, 'example/index.js'),
    notification: path.join(__dirname, 'components/index.js'),
    'notification.min': path.join(__dirname, 'components/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryExport: 'default',
    library: 'Notification',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            plugins: ['@babel/proposal-class-properties', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-syntax-dynamic-import']
          }
        }
      },
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
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true
    }),
    new UglifyJsPlugin({
      include: /\.min\.js$/
    })
  ]
}