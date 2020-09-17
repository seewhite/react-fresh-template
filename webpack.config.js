const merge = require('webpack-merge')
const common = require('./build/webpack.common')
const preUtils = require('./build/utils/preUtils')

const envConfigPaths = {
  'development': './build/webpack.dev',
  'production': './build/webpack.prod'
}

/**
 * @description: NODE_ENV 由命令行注入
 * @param {type} String
 * @return: Object
 */

module.exports = async () => {
  let configs = {}
  const NODE_ENV = process.env.NODE_ENV
  console.log(`MODE: ${NODE_ENV}`)

  if (NODE_ENV === 'development') {
    let port = 8000
    const host = preUtils.getLocalAddress()
    port = await preUtils.isAlreadyPort(port, host)

    configs = require(envConfigPaths[NODE_ENV])(port, host)
  } else if (NODE_ENV === 'production') {
    configs = require(envConfigPaths[NODE_ENV])
  }

  return merge(
    common(NODE_ENV),
    configs
  )
}
