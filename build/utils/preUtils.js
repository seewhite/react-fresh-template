/*
 * @Description: webpack 预开发方法集合
 * @Author: hasayake
 * @Date: 2020-08-11 16:06:13
 * @LastEditTime: 2020-08-12 10:50:57
 * @LastEditors: Please set LastEditors
 */

const net = require('net')
const os = require('os')

/**
 * @description: 检测服务端口号是否被占用
 * @param {type} port: {number} host: {string}
 * @return {type} port: {number}
 */
const isAlreadyPort= (port, host) => {
  console.log(`tip：初始端口号为: ${port}`)

  return new Promise(resolve => {
    let _port = port
    const server = net.createServer()

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`tip：端口${_port} 被占用，正在寻找新的可用端口`)

        setTimeout(() => {
          _port ++
          server.close()
          server.listen(_port, host)
        }, 500)
      }
    })

    server.listen(_port, host, () => {
      console.log(`tip：已找到可用端口：${_port}`)
      server.close()
      resolve(_port)
    })
  })
}

/**
 * @description: 获取本机 IP 地址
 * @param {type}
 * @return {type}
 */
const getLocalAddress = () => {
  const ifaces = os.networkInterfaces()

  for (const key of Object.keys(ifaces)) {
    for (const item of ifaces[key]) {
      if (item.family === 'IPv4' && !item.internal) {
        return item.address
      }
    }
  }

  return 'localhost'
}

module.exports = {
  isAlreadyPort,
  getLocalAddress
}
