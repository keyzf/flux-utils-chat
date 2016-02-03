// webpack.config.js
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel"],
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "postcss-loader"],
      },
    ]
  },

  postcss: [autoprefixer, precss],
}
