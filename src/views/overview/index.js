/*
 * @Description: 概览
 * @Author: hasayake
 * @Date: 2020-09-16 18:03:35
 * @LastEditTime: 2020-09-17 10:13:39
 * @LastEditors: Please set LastEditors
 */

import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { routerHandler } from '@/utils/help'

console.log(routerHandler.getRoute('Overview'))

const OverView = () => {
  const match = useRouteMatch({
    path: '/overview',
    exact: true
  })
  console.log(match)
  return (
    <div>
      overview

    </div>
  )
}

export default OverView
