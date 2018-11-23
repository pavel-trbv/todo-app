const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  mode: process.env.NODE_ENV,
  devtool: 'inline-source-map',

  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        } 
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        },
      }
    }
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true,
    hot: true,
  }
}