/*
 * @Description: 堆叠树状图
 * @Author: hasayake
 * @Date: 2020-09-02 16:58:30
 * @LastEditTime: 2020-09-02 18:17:43
 * @LastEditors: Please set LastEditors
 */

import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StackedColumn } from '@antv/g2plot'

const defaultConfigs = {
  title: {
    visible: true,
    text: '堆叠柱状图'
  },
  forceFit: true,
  padding: 'auto',
  xField: 'year',
  yField: 'value',
  yAxis: {
    min: 0
  },
  color: ['green', 'skyblue'],
  stackField: 'type'
}

const StackedColumnChart = ({data, configs}) => {
  const mountEl = useRef(null)
  const instance = useRef(null)

  useEffect(() => {
    if (data.length) {
      instance.current = new StackedColumn(mountEl.current, {
        ...defaultConfigs,
        ...configs,
        data
      })

      instance.current.render()

      return () => {
        instance.current.destroy()
      }
    }
  }, [data, configs])

  return (
    <div ref={mountEl}></div>
  )
}

StackedColumnChart.propTypes = {
  data: PropTypes.array.isRequired,
  configs: PropTypes.object
}

export default React.memo(StackedColumnChart)

