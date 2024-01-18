const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

dotenv.config();

module.exports = {
  mode: 'production', // Enable production mode
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    }),
    new NodePolyfillPlugin()
  ],
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          }
        }
      }
    ]
  },
};