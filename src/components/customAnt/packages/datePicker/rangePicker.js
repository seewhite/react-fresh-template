/*
 * @Description: 基于antd日期范围组件二次封装
 * @Author: hasayake
 * @Date: 2020-09-01 15:38:56
 * @LastEditTime: 2020-09-03 17:09:29
 * @LastEditors: Please set LastEditors
 */

import React from 'react'
import { DatePicker } from 'antd'

const RangePickerAnt = props => (
  <DatePicker.RangePicker {...props} />
)

RangePickerAnt.defaultProps = {
  format: 'YYYY-MM-DD',
  separator: '~'
}

export default RangePickerAnt
