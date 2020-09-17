/*
 * @Description: 忘记密码/第一步骤
 * @Author: hasayake
 * @Date: 2020-09-15 14:28:44
 * @LastEditTime: 2020-09-16 17:02:29
 * @LastEditors: Please set LastEditors
 */

import React,
{
  memo,
  forwardRef,
  useState,
  useCallback,
  useEffect
} from 'react'

import { Button, Form, Input } from 'antd'
import styles from './index.css'


let timer
const StepFirst = (props, ref) => {
  const [form] = Form.useForm()
  const [verified] = useState(true)
  const [vert, setVert] = useState({
    text: '获取验证码',
    disabled: false
  })

  const reSendVertCode = useCallback(() => {
    let second = 60
    setVert({
      disabled: true,
      text: `${second}s重新发送`
    })
    second -= 1

    timer = setInterval(() => {
      if (second) {
        setVert({
          disabled: true,
          text: `${second}s重新发送`
        })
      } else {
        setVert({
          disabled: false,
          text: `获取验证码`
        })

        clearInterval(timer)
      }

      second --
    }, 1000)
  }, [])


  const getVertCode = useCallback(() => {
    // 首先验证手机号是否已填写
    form.validateFields(['phone'])
      .then(() => {
        // 获取验证码，开始 60s 计时
        reSendVertCode()
      })
      .catch(() => { })
  }, [form, reSendVertCode])

  // 清除定时器
  useEffect(() => () => {
    clearInterval(timer)
  }, [])

  return (
    <Form
      form={form} ref={ref}
      size="large" {...props}>
      <Form.Item
        name="phone" label=""
        rules={[{ required: true, message: '请输入手机号码!' }]}>
        <Input placeholder="请输入手机号码" />
      </Form.Item>

      <Form.Item
        name="verificat" label=""
        rules={[
          { required: true, message: '请输入短信验证码!' },
          () => ({
            validator(_, value) {
              if (!value || verified) {
                return Promise.resolve()
              } else {
                return Promise.reject('验证码错误，请重新输入!')
              }
            }
          })
        ]}>
        <div>
          <Input
            style={{width: '234px'}}
            placeholder="请输入短信验证码" />
          <Button
            className={styles['verification-code-btn']}
            disabled={vert.disabled}
            onClick={getVertCode}>
            {vert.text}
          </Button>
        </div>
      </Form.Item>
    </Form>
  )
}

export default memo(forwardRef(StepFirst))
