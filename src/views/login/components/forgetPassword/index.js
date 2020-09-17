/*
 * @Description: 忘记密码/第一步骤
 * @Author: hasayake
 * @Date: 2020-09-14 14:32:56
 * @LastEditTime: 2020-09-15 16:16:55
 * @LastEditors: Please set LastEditors
 */

import React, { useState, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'

import StepFirst from './components/stepFirst'
import StepSecond from './components/stepSecond'

const ForgetPassword = props => {
  const { handlerClose } = props
  const secondRef = useRef(null)
  const firstRef = useRef(null)
  const [modalConfigs, setModalConfigs] = useState({
    okText: '下一步',
    step: 1
  })
  const onFinishFirst = useCallback(() => {
    setModalConfigs({
      okText: '确认',
      step: 2
    })
  }, [])

  const handlerModalClose = useCallback(() => {
    handlerClose()
    setModalConfigs({
      okText: '下一步',
      step: 1
    })
  }, [handlerClose])

  // 下一步/确认
  const handlerConfirm = useCallback(() => {
    // 第一步
    if (modalConfigs.step === 1) {
      firstRef.current && firstRef.current.submit()
    } else {
      secondRef.current && secondRef.current.submit()
    }
  }, [modalConfigs.step])

  return (
    <Modal
      {...props}
      {...modalConfigs}
      width="430px"
      title="忘记密码"
      centered
      destroyOnClose
      maskClosable={false}
      onOk={handlerConfirm}
      okButtonProps={{ size: "large" }}
      cancelButtonProps={{ size: "large" }}
      onCancel={handlerModalClose}>
      {
        modalConfigs.step === 1
          ? <StepFirst ref={firstRef} onFinish={onFinishFirst} />
          : <StepSecond ref={secondRef} handlerModalClose={handlerModalClose} />
      }
    </Modal>
  )
}

ForgetPassword.propTypes = {
  handlerClose: PropTypes.func
}

export default React.memo(ForgetPassword)
