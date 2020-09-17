/*
 * @Description: HtmlWebpackPlugin 扩展，插入自定义脚本
 * @Author: hasayake
 * @Date: 2020-08-11 14:46:26
 * @LastEditTime: 2020-08-12 17:25:29
 * @LastEditors: Please set LastEditors
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = class {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    const { scripts } = this.options

    compiler.hooks.compilation.tap('MyPlugin', compilation => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'MyPlugin',
        (data, cb) => {
          data.html = data.html.replace(/<\/title>/g, `</title>${scripts.join('')}`)

          cb(null, data)
          console.log('\ntips：自定义外链脚本插入成功。')
        }
      )
    })
  }
}
