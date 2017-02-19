var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: path.join(__dirname, '/src/main.js')
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.[name].js'
  },
  devServer: {
    inline: true,
    port: 8080,
    contentBase: './dev'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
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
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('dev'),
      }
    })
  ]
};
