import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import RouterView from '@/components/routerView'
import PageHeader from '@cpts/pageHeader'

import { Pie } from '@cpts/chartsG2'
import DragAndDropWrapper from '@cpts/dragAndDropWrapper'

const state = [{
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
}]
const Index = props => {
  const Ac = () => {
    const [ac, setAc] = useState(2)
    return <div style={{width: 400}} onClick={() => setAc(10)}>{ac}</div>
  }


  const [childrens] = useState([
    {
      key: '0',
      label: 'one',
      component: <Pie data={state} />
    },
    {
      key: '1',
      label: 'two',
      component: <Ac />
    },
    {
      key: '2',
      label: 'three',
      component: <Pie data={state} />
    },
    {
      key: '3',
      label: 'four',
      component: <Pie data={state} />
    }
  ])
  const [memo, setMemo] = useState(1)

  const ac = useMemo(
    () => memo === 1 ? 'true' : 'false',
    [memo]
  )

  return (
    <div>
      Index
      <div onClick={() => setMemo(2)}>{ac}</div>
      <PageHeader name="Home-Index" />

      <DragAndDropWrapper childs={childrens} />

      <RouterView name="Home-Index" />
    </div>
  )

}
Index.propTypes = {
  meta: PropTypes.object
}

export default Index
