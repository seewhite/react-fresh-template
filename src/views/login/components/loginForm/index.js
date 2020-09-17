/*
 * @Description: 登录表单
 * @Author: hasayake
 * @Date: 2020-09-14 10:49:06
 * @LastEditTime: 2020-09-16 11:33:58
 * @LastEditors: Please set LastEditors
 */

import React, { useCallback, useState } from 'react'

import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons'
import ForgetPassword from '../forgetPassword'

import styles from './index.css'
import loginLogo from '@imgs/login/login-logo.png'


const LoginForm = () => {

  // 忘记密码 Modal 控制
  const [visible, setVisible] = useState(false)
  const handlerModalVisible = useCallback(visible => {
    setVisible(visible)
  }, [])
  const memoHandlerModalClose = useCallback(
    () => handlerModalVisible(false),
    [handlerModalVisible]
  )

  // 登录
  const [loading] = useState(false)
  const submitForm = useCallback(forms => {
    console.log(forms)
  }, [])

  return (
    <section className={styles['login-form']}>
      <header className={styles['login-form-top']}>
        <img width="100" height="85" src={loginLogo} />
        <p className={`${styles['login-form-title']} prompt`}>投放变轻松，工作更出众</p>
      </header>

      <Form
        onFinish={submitForm}>
        <Form.Item
          label="" name="username"
          rules={[{ required: true, message: "请输入账号" }]}>
          <Input
            size="large" prefix={<UserOutlined className="prompt" />}
            placeholder="请输入账号" />
        </Form.Item>
        <Form.Item
          label="" name="password"
          rules={[{ required: true, message: "请输入密码" }]}>
          <Input.Password
            size="large" prefix={<LockOutlined className="prompt" />}
            placeholder="请输入密码" />
        </Form.Item>
        <Form.Item>
          <button
            disabled={loading ? "disabled" : ""}
            className={styles['login-submit']}>
            {
              loading
                ? <LoadingOutlined style={{marginRight: "10px"}} />
                : null
            }
            <span>登 录</span>
          </button>
        </Form.Item>
      </Form>

      <footer className={styles['login-tools']}>
        <Button
          type="link"
          onClick={() => handlerModalVisible(true)}>
          忘记密码?
        </Button>
      </footer>

      <ForgetPassword
        visible={visible}
        handlerClose={memoHandlerModalClose} />
    </section>
  )
}

export default LoginForm
