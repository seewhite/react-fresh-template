import React, { useState, useCallback } from 'react'
import { Tree, Spin } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { cloneDeep } from '@/utils/help'

const _deep = cloneDeep()
const updateTreeData = (treeData, key) => {
  const keyList = key.split('-')
  let pointer
  let newKey = ''


  for (const key of keyList) {
    pointer = pointer ? pointer['children'][key] : treeData[key]
  }

  if (pointer.children) {
    newKey = `${keyList.join('-')}-${pointer.children.length}`
    pointer.children.push({
      title: 'new',
      key: newKey
    })
  } else {
    newKey = `${keyList.join('-')}-0`
    pointer.children = [
      {
        title: 'new',
        key: newKey
      }
    ]
  }
  return [treeData, newKey]
}

const Render = () => {
  const [treeData, setTreeData] = useState([
    {
      title: 'parent 1',
      key: '0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0',
          children: [
            {
              title: 'leaf',
              key: '0-0-0'
            },
            {
              title: 'leaf',
              key: '0-0-1'
            }
          ]
        },
        {
          title: 'parent 1-1',
          key: '0-1',
          children: [
            { title: <i>123</i>, key: '0-1-0' }
          ]
        }
      ]
    }
  ])


  const NodeAdd = useCallback(nodeData => {
    const { key } = nodeData
    const [newTreeData] = updateTreeData(_deep(treeData), key)

    setTreeData(newTreeData)

    // setTimeout(() => {
    // }, 200)
  }, [treeData])

  const titleRender = useCallback(nodeData => (
    <div>
      {nodeData.title}
      <PlusOutlined style={{'marginLeft': '10px'}} onClick={() => {NodeAdd(nodeData)}} />
    </div>
  ), [NodeAdd])


  return (
    <div>
      render
      <div>
        <Spin>
          {

          }
        </Spin>
        {
          treeData.length
            ? (
              <Tree
                loading={treeData.length}
                defaultExpandAll
                treeData={treeData}
                titleRender={titleRender}
              />
            )
            : <Spin />
        }
      </div>

    </div>
  )
}

export default Render
