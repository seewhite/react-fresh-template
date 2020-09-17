/*
 * @Description:
 * @Author: hasayake
 * @Date: 2020-04-26 13:49:04
 * @LastEditTime: 2020-09-16 10:15:14
 * @LastEditors: Please set LastEditors
 */

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MyPlugin = require('./plugins/htmlWebpackExpandPlugin')

module.exports = {
  mode: 'production',

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  plugins: [
    // 插入自定义脚本
    new MyPlugin({
      scripts: [
        '<script src="https://cdn.jsdelivr.net/npm/react@16/umd/react.production.min.js"></script>',
        '<script src="https://cdn.jsdelivr.net/npm/@hot-loader/react-dom@16/umd/react-dom.production.min.js"></script>'
      ]
    }),
    // bundle 分析
    new BundleAnalyzerPlugin()
  ]

  // devtool: 'source-map'

}
