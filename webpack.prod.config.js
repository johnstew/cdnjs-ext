var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: './build',
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CDNJS Extension',
      template: './index-template.ejs'
    }),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'isomorphic-fetch',
      '_': 'lodash'
    })
  ]
};
