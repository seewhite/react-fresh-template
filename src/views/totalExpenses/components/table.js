/*
 * @Description: 表格组件
 * @Author: hasayake
 * @Date: 2020-09-03 14:17:37
 * @LastEditTime: 2020-09-07 09:26:19
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import { TableAnt } from '@cpts/customAnt'


const Table = props => {
  console.log(props)
  const render = text => <a>{text}</a>

  const columns = [
    {
      title: 'author',
      dataIndex: 'author',
      key: 'author',
      render
    },
    {
      title: 'created_at',
      dataIndex: 'created_at',
      key: 'created_at'
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title'
    }
  ]

  // const pageChange = (val, val1) => {
  //   console.log(val, val1)
  // }

  return (
    <TableAnt
      columns={columns} customApi="" customParams=""></TableAnt>
  )
}

export default Table