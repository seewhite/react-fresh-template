/*
 * @Description: 页面操作区域外包裹
 * @Author: hasayake
 * @Date: 2020-09-01 14:03:15
 * @LastEditTime: 2020-09-01 15:10:00
 * @LastEditors: Please set LastEditors
 */


import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.css'

const OperatingWrapper = props => (
  <div className={styles['operating-wrapper']} style={props.style}>
    {
      Array.isArray(props.children)
        ? props.children.map(item => item)
        : props.children
    }
  </div>
)

OperatingWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]),
  style: PropTypes.object
}

export default OperatingWrapper
