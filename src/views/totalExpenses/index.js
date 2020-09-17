/*
 * @Description: 费用统计
 * @Author: hasayake
 * @Date: 2020-09-01 11:37:48
 * @LastEditTime: 2020-09-17 10:33:17
 * @LastEditors: Please set LastEditors
 */

import React, { useMemo, useState, useEffect, useCallback } from 'react'

import { Pie } from '@cpts/chartsG2'
import StackedColumn from './components/stackedColumn'
import TableAnt from './components/table'
import PageHeader from '@cpts/pageHeader'
import AsyncWrapper from '@cpts/asyncWrapper'
import OperatingWrapper from '@cpts/operatingWrapper'
import { SelectAnt, DatePickerAnt } from '@cpts/customAnt'


const TotalExpense = props => {
  const dateChange = (_, val1) => {
    console.log(val1)
  }
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true)
  const [, setA] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setState([{
        type: '项目1',
        value: 27
      },
      {
        type: '项目2',
        value: 25
      },
      {
        type: '项目3',
        value: 18
      },
      {
        type: '项目4',
        value: 15
      }])
      setLoading(false)
    }, 3000)
  }, [])

  const data = useMemo(() => ([
    {
      year: '1991',
      value: 3,
      type: 'Lon'
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon'
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon'
    },
    {
      year: '1991',
      value: 3,
      type: 'Bor'
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor'
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Bor'
    }
  ]), [])

  const st = useCallback(() => {
    setA(v => v + 1)
  }, [])


  return (
    <div className="total-expense">
      <div onClick={st}>123</div>
      <PageHeader name="Home-TotalExpenses" />

      <OperatingWrapper>
        <OperatingWrapper style={{width: '260px'}}>
          <SelectAnt />
          <SelectAnt />
        </OperatingWrapper>
        <DatePickerAnt.RangePickerAnt onChange={dateChange} />
      </OperatingWrapper>

      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{width: '50%'}}>
          <AsyncWrapper
            render={Boolean(state.length)} loading={loading}>
            {/* 缓存组件 */}
            {useMemo(() => (<div style={{width: '100%'}}><Pie data={state} /></div>), [state])}
          </AsyncWrapper>
        </div>


        <div style={{width: '50%'}}>
          <StackedColumn data={data}></StackedColumn>
        </div>
      </div>
      <TableAnt />
    </div>
  )
}

export default TotalExpense
