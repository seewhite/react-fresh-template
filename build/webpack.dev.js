/*
 * @Description:
 * @Author: hasayake
 * @Date: 2020-04-26 11:58:51
 * @LastEditTime: 2020-09-16 16:28:45
 * @LastEditors: Please set LastEditors
 */


const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = (port, host) => ({
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    host,
    port,
    open: true,
    quiet: true,
    compress: true,
    liveReload: false,
    noInfo: true,
    // publicPath: '/',
    /**
     * 支持 HTML5 模式路由
     * nginx: location / { ... try_files $url /index.html; }
     */
    historyApiFallback: true
  },

  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `You applicaton is running here http://localhost:${port}`,
          `You applicaton is running here http://${host}:${port}`
        ]
      }
    }),
    // new webpack.NamedModulesPlugin(), // dev 模式中自动开启
    // new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ]
})
