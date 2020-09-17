/*
 * @Description: 登陆页面
 * @Author: hasayake
 * @Date: 2020-08-26 16:03:34
 * @LastEditTime: 2020-09-16 15:32:03
 * @LastEditors: Please set LastEditors
 */

import React from 'react'
import Particles from '@cpts/particles'
import LoginForm from './components/loginForm'
import LoginFooter from './components/footer'

import styles from './index.css'

const Login = () => (
  <div className={styles.login}>
    <Particles />
    <LoginForm />
    <LoginFooter />
  </div>
)

export default Login
