/*
 * @Description: table 二次封装
 * @Author: hasayake
 * @Date: 2020-09-03 17:09:15
 * @LastEditTime: 2020-09-14 11:09:15
 * @LastEditors: Please set LastEditors
 */

import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import { Table, Skeleton } from 'antd'
import useFetch from '@/utils/http'


const TableAnt = props => {
  const {customParams } = props

  const [{data, loading}, setParams] = useFetch('home.search', {query: 'react'})
  const [firstRender, setFirstRender] = useState(true)
  const [result, setResult] = useState([])

  const paginationChange = useCallback((page, size) => {
    setParams({
      ...customParams,
      pageNum: page,
      pageSize: size
    })
  }, [setParams, customParams])

  const sizeChange = useCallback((cur, size) => {
    console.log(cur, size)
  }, [])

  useEffect(() => {
    if (firstRender) {
      if (!loading) {
        setFirstRender(false)
      }
    }
  }, [firstRender, loading, setFirstRender])

  useEffect(() => {
    if (data.data) {
      const result = data.data.hits.map((item, index) => ({...item, key: index}))
      setResult(result)
    }
  }, [data])


  return (
    <div>
      {
        firstRender
          ? <Skeleton />
          : (
            <Table
              {...props}
              dataSource={result} loading={loading}
              pagination={{total: result.length, onChange: paginationChange, onShowSizeChange: sizeChange}} />
          )
      }
    </div>

  )
}

TableAnt.defaultProps = {
  columns: [],
  onChange: () => {},
  customApi: '',
  customParams: ''
}

TableAnt.propTypes = {
  columns: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  customApi: PropTypes.string.isRequired,
  customParams: PropTypes.string.isRequired
}

export default TableAnt
