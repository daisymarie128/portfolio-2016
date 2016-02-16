var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'app/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      loader: 'babel'
    },
    {
      test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
      loader: 'imports?define=>false&this=>window'
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
      }]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./app")]
  }
};

module.exports = config;
