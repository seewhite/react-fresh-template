/*
 * @Description: 公共组件--拖曳
 * @Author: hasayake
 * @Date: 2020-09-07 13:46:57
 * @LastEditTime: 2020-09-16 17:55:09
 * @LastEditors: Please set LastEditors
 */

import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'

let dragged

const dragStartHandler = ev => {
  ev.dataTransfer.setData('text/plain', ev.currentTarget.dataset.sort)
  dragged = ev.currentTarget
}

const dragOverHandler = ev => {
  ev.preventDefault()
}

const draggableHandler = ev => {
  ev.currentTarget.parentNode.setAttribute('draggable', true)
}

const DragAndDropWrapper = ({ childs }) => {
  const [renderList, setRenderList] = useState(childs)


  const dropHandler = useCallback(ev => {
    ev.preventDefault()

    const oldIdx = +(ev.dataTransfer.getData('text/plain'))
    const newIdx = +(ev.currentTarget.dataset.sort)
    const childs = [...renderList]
    ;[childs[oldIdx], childs[newIdx]] = [childs[newIdx], childs[oldIdx]]


    setRenderList(childs)

    dragged.setAttribute('draggable', false)

  }, [renderList])

  return (
    <div className={styles["drag-drop__wrapper"]}>
      {
        renderList.map((item, index) => (
          <div
            className={styles['dragg-box']}
            draggable={false} key={item.key}
            data-sort={index} data-key={item.key}
            onDrop={dropHandler}
            onDragStart={dragStartHandler}
            onDragOver={dragOverHandler}>
            <div
              className={styles.target}
              onMouseDown={draggableHandler}>
              target
            </div>

            {item.component}

          </div>
        ))
      }
    </div>
  )
}

DragAndDropWrapper.propTypes = {
  childs: PropTypes.array.isRequired
}

export default React.memo(DragAndDropWrapper)
