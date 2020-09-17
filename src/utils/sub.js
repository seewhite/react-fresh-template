/*
 * @Description: 自定义事件订阅
 * @Author: hasayake
 * @Date: 2020-08-17 10:27:58
 * @LastEditTime: 2020-08-21 17:31:56
 * @LastEditors: Please set LastEditors
 */

import { createRandomValue } from './help'

class Sub {
  constructor() {
    this.subs = {}
  }

  on(eventName, cb) {
    const id = createRandomValue()

    if (this.subs[eventName]) {
      this.subs[eventName][id] = cb
    } else {
      this.subs[eventName] = { [id]: cb }
    }

    return id
  }

  off(id) {
    for (const events of Object.values(this.subs)) {
      if (events[id]) {
        delete events[id]
        break
      }
    }
  }

  emit(key, ...args) {
    if (this.subs[key]) {
      for (const item of Object.values(this.subs[key])) {
        item(...args)
      }
    }
  }
}

export default new Sub()
