/*
 * @Description: 公共组件--页头组件
 * @Author: hasayake
 * @Date: 2020-09-01 10:35:15
 * @LastEditTime: 2020-09-17 10:35:55
 * @LastEditors: Please set LastEditors
 */

import React from 'react'
import PropTypes from 'prop-types'
import { routerHandler } from '@/utils/help'

const PageHeader = props => {
  const { name } = props
  const title = routerHandler.getRoute(name).meta.title

  return (
    <h1>{title}</h1>
  )
}

PageHeader.defaultProps = {
  name: ''
}

PageHeader.propTypes = {
  name: PropTypes.string
}

export default React.memo(PageHeader)
