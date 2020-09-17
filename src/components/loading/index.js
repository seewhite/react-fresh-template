/*
 * @Description: Loading 过渡组件
 * @Author: hasayake
 * @Date: 2020-08-31 16:52:26
 * @LastEditTime: 2020-09-03 13:57:46
 * @LastEditors: Please set LastEditors
 */

import React from 'react'
import { Spin } from 'antd'

import styles from './index.css'

const Loading = () => (
  <div className={styles['loading-wrapper']}>
    <Spin size="middle" />
  </div>
)

export default Loading