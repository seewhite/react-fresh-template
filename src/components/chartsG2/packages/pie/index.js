import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Pie } from '@antv/g2plot'

const defaultConfigs = {
  forceFit: true,
  width: '100%',
  height: 200,
  title: {
    visible: true,
    text: '饼图'
  },
  radius: 0.8,
  angleField: 'value',
  colorField: 'type',
  label: {
    visible: true,
    type: 'inner',
    color: 'red',
    style: {
      fontSize: 12,
      fill: '#fff',
      lineWidth: 0.5,
      fontWeight: 'lighter'
    }
  },
  legend: {
    visible: true,
    position: 'bottom'
  }
}

const PieChart = ({ data, configs }) => {
  const mountEl = useRef(null)
  const instance = useRef(null)

  useEffect(() => {
    if (data.length) {
      instance.current = new Pie(mountEl.current, {
        ...defaultConfigs,
        ...configs,
        data
      })

      instance.current.render()
      return () => {
        instance.current.destroy()
      }
    }
  })


  return (
    <div ref={mountEl}></div>
  )
}

PieChart.defaultProps = {
  data: []
}

PieChart.propTypes = {
  data: PropTypes.array.isRequired,
  configs: PropTypes.object
}

export default React.memo(PieChart)
