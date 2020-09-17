/*
 * @Description: Select 二次封装
 * @Author: hasayake
 * @Date: 2020-08-31 17:02:42
 * @LastEditTime: 2020-09-01 10:22:45
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'

const SelectAnt = props => (
  <Select {...props}>
    {
      props.list.map(item =>
        (
          <Select.Option
            key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        )
      )
    }
  </Select>
)

SelectAnt.defaultProps = {
  style: {width: 120},
  list: [],
  defaultValue: null,
  onChange: () => {},
  labelInValue: false
}

SelectAnt.propTypes = {
  style: PropTypes.object,
  list: PropTypes.array.isRequired,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  labelInValue: PropTypes.bool
}

export default SelectAnt
