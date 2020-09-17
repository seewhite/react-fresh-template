/*
 * @Description: 通用异步包裹组件
 * @Author: hasayake
 * @Date: 2020-09-02 15:19:19
 * @LastEditTime: 2020-09-04 15:45:26
 * @LastEditors: Please set LastEditors
 */

/**
 * 1. 首次渲染骨架屏
 * 2. 数据请求中展示 loading
 * 3. 无数据时展示为无数据状态
 */

import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import { Skeleton, Spin, Empty } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import styles from './index.css'

let a,c
const AsyncWrapper = ({ children, render, loading }) => {
  const [firstRender, setFirstRender] = useState(true)
  console.log(children, 'children')
  a = children
  console.log(a === c)
  c = a
  const Render = useCallback(
    () => render ? children : <Empty />,
    [render, children]
  )

  useEffect(() => {
    if (firstRender) {
      if (!loading) {
        setFirstRender(false)
      }
    }
  }, [firstRender, loading])


  return (
    <div className={styles['async-wrapper']}>
      {
        firstRender
          ? (<Skeleton active paragraph={{rows: 8}} />)
          : (loading && !firstRender)
            ? <Spin indicator={<LoadingOutlined style={{fontSize: 35}} />} />
            : <Render />
      }
    </div>
  )
}

AsyncWrapper.defaultProps = {
  render: false,
  loading: false
}

AsyncWrapper.propTypes = {
  render: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
}

export default React.memo(AsyncWrapper)
