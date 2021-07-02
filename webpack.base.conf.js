const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
module.exports = {
  entry: {
    example: path.join(__dirname, 'example/index.js'),
    '@zq/react-ui': path.join(__dirname, 'components/index.js'),
    '@zq/react-ui.min': path.join(__dirname, 'components/index.js')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryExport: 'default',
    library: '@zq/react-ui',
    libraryTarget: 'umd',
    chunkLoading: false,
    wasmLoading: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react'],
              plugins: [
                '@babel/proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-syntax-dynamic-import'
              ]
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
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
  optimization: {
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        parallel: true,
        extractComments: false,
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ],
    noEmitOnErrors: true
  }
};
