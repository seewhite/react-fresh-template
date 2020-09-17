/*
 * @Description: 忘记密码/第二步骤
 * @Author: hasayake
 * @Date: 2020-09-15 11:01:16
 * @LastEditTime: 2020-09-15 16:55:57
 * @LastEditors: Please set LastEditors
 */

import React, { memo, forwardRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'


const StepSecond = forwardRef(({ handlerModalClose }, ref) => {
  const onFinish = useCallback(forms => {
    console.log(forms)
    handlerModalClose()
  }, [handlerModalClose])

  return (
    <Form
      ref={ref}
      size="large"
      onFinish={onFinish}>
      <Form.Item
        name="password" label=""
        rules={[{ required: true, message: '请输入新密码!' }]}>
        <Input placeholder="请输入新密码" autoComplete="off" />
      </Form.Item>
      <Form.Item
        name="passwordSecond" label=""
        rules={[
          { required: true, message: '请再次输入新密码!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              } else {
                return Promise.reject('密码不一致!')
              }
            }
          })
        ]}>
        <Input placeholder="请再次输入新密码" autoComplete="off" />
      </Form.Item>
    </Form>
  )
})

StepSecond.displayName = 'StepSecond'

StepSecond.propTypes = {
  handlerModalClose: PropTypes.func
}

export default memo(StepSecond)
