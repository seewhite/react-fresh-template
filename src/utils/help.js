/*
 * @Description: 通用方法集合
 * @Author: hasayake
 * @Date: 2020-08-11 10:24:06
 * @LastEditTime: 2020-09-17 10:17:28
 * @LastEditors: Please set LastEditors
 */


/**
 * @description: 生成 GUID (全球唯一标识符)
 * @param {type}
 * @return {type}
 */

export const createRandomValue = () => {
  let r, v

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, c => {
      r = Math.random()*16|0,
      v = c == 'x' ? r : (r&0x3|0x8)
      return v.toString(16)
    })
}


/**
 * @description: 路由树操作
 * @param {type} Array
 * @return {type} Array
 */
class Routes {
  constructor() {
    this.flatRouterList = []
    this.parentToChildrenMap = {}
    this.cacheNameToRoute = {}
  }

  /**
   * @description: 获取相应路由信息
   * @param {type} name {string}
   * @return {type} route {object}
   */
  getRoute(name) {
    if (this.cacheNameToRoute[name]) {
      return this.cacheNameToRoute[name]
    } else {
      for (const item of this.flatRouterList) {
        if (name === item.name) {
          this.cacheNameToRoute[name] = item
          return item
        }
      }
    }
  }

  traverseRouterTree(array) {
    let innerMap = {}

    const mapHandler = child => child.map(leaf => {
      innerMap = {}

      for (const leafKey of Object.keys(leaf)) {
        if (leafKey !== 'children') {
          innerMap [leafKey] = leaf[leafKey]
        }
      }

      return innerMap
    })

    const main = childArray => {
      for (const child of childArray) {
        const noChildLeaf = {}
        // 过滤每一节点的 children
        for (const key of Object.keys(child)) {
          if (key !== 'children') {
            noChildLeaf[key] = child[key]
          }
        }

        this.flatRouterList.push(noChildLeaf)

        if (child.children && child.children.length) {
          this.parentToChildrenMap[child.name] = mapHandler(child.children)

          main(child.children)
        }
      }
    }

    main(array)
  }
}

export const routerHandler = new Routes()
// export const routerHandler = {
//   flatRouterList: [],
//   parentToChildrenMap: {},

//   traverseRouterTree: function(array) {
//     let innerMap = {}

//     const mapHandler = child => child.map(leaf => {
//       innerMap = {}

//       for (const leafKey of Object.keys(leaf)) {
//         if (leafKey !== 'children') {
//           innerMap [leafKey] = leaf[leafKey]
//         }
//       }

//       return innerMap
//     })

//     const main = childArray => {
//       for (const child of childArray) {
//         const noChildLeaf = {}
//         // 过滤每一节点的 children
//         for (const key of Object.keys(child)) {
//           if (key !== 'children') {
//             noChildLeaf[key] = child[key]
//           }
//         }

//         this.flatRouterList.push(noChildLeaf)

//         if (child.children && child.children.length) {
//           this.parentToChildrenMap[child.name] = mapHandler(child.children)

//           main(child.children)
//         }
//       }
//     }

//     main(array)
//   }
// }


/**
 * @description: 深拷贝
 * @param {type}
 * @return {type}
 */

export const cloneDeep = () => {
  const complexTypeList = ['RegExp', 'Date', 'Set', 'Map', 'Object', 'Symbol', 'Array']
  const _toString = take => Object.prototype.toString.call(take).slice(8, -1)

  const objectHandler = obj => {
    // React 元素直接返回，避免栈溢出
    if (obj['$$typeof']) {
      return obj
    }

    const newCopy = {}
    for (const key of Object.keys(obj)) {
      newCopy[key] = _deep(obj[key])
    }

    return newCopy
  }

  const symbolHandler = symbol => {
    const _str = symbol.toString()
    const originVal = _str.match(/\((.*)\)/g)[1]
    return Symbol(originVal)
  }

  const arrayHandler = arr => {
    const newArr = []
    for (const item of arr) {
      newArr.push(_deep(item))
    }

    return newArr
  }

  const handlers = {
    RegExp: reg => new RegExp(reg),
    Date: date => new Date(date),
    Set: set => new Set(set),
    Map: map => new Map(map),
    Symbol: symbolHandler,
    Object: objectHandler,
    Array: arrayHandler
  }

  const _deep = source => {
    const type = _toString(source)

    if (complexTypeList.includes(type)) {
      return handlers[type](source)
    } else {
      return source
    }
  }

  return _deep
}
