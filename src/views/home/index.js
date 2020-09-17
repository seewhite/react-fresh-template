/*
 * @Description: 首页
 * @Author: hasayake
 * @Date: 2020-08-25 16:54:17
 * @LastEditTime: 2020-09-17 09:42:24
 * @LastEditors: Please set LastEditors
 */

import React, { Suspense } from 'react'

import Header from '@cpts/header'
import Footer from '@cpts/footer'
import Loading from '@cpts/loading'
import RouterView from '@cpts/routerView'
import { Redirect } from 'react-router-dom'

import styles from './index.css'

const Home = () => (
  <div className={styles['main-wrapper']} >
    <Header />
    <main className={styles['main-wrapper-content']}>
      <Suspense fallback={<Loading />}>
        <RouterView name="Home">
          <Redirect to="/overview" />
        </RouterView>
      </Suspense>
    </main>
    <Footer />
  </div>
)


export default Home
