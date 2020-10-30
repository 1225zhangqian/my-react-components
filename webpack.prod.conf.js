const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const glob = require("glob");
const path = require('path');
const getEsEntry = function () {
  process.env.BABEL_ENV = "cjs";
  const entry = {};
  glob.sync('./components/*/index.@(js|jsx)')
    .forEach(function (filePath) {
      var name = filePath.match(/\/components\/(.+)\/index.js[x]?/);
      name = '@zq/' + name[1];
      entry[name] = filePath;
    });

  return entry;
}
module.exports = merge(baseConfig, {
  entry: {
    example: path.join(__dirname, 'example/index.js'),
    "@zq/react-ui": path.join(__dirname, 'components/index.js'),
    "@zq/react-ui.min": path.join(__dirname, 'components/index.js'),
    ...getEsEntry()
  },
  mode: 'none',
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    },
    reactstrap: {
      root: "reactstrap",
      commonjs2: "reactstrap",
      commonjs: "reactstrap",
      amd: "reactstrap"
    },
    bootstrap: {
      root: "bootstrap",
      commonjs2: "bootstrap",
      commonjs: "bootstrap",
      amd: "bootstrap"
    }
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        // express css   ExtractTextPlugin 
        cssProcessor: require("cssnano"),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      })
    ],
    noEmitOnErrors: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].min.css"
    })
  ]
});