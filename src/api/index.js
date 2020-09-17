/*
 * @Description: 项目 API 统一出口
 * @Author: hasayake
 * @Date: 2020-08-28 15:56:32
 * @LastEditTime: 2020-09-08 10:23:53
 * @LastEditors: Please set LastEditors
 */

let apiModules
const allApis = {}
const context = require.context('./configs', true, /.js$/)

for (const relative of context.keys()) {
  apiModules = context(relative).default
  allApis[apiModules.name] = apiModules()
}

export default allApis
