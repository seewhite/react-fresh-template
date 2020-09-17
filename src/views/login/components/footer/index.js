import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.css'

const navList = [
  { name: '帮助', path: '/' },
  { name: '隐私', path: '/' },
  { name: '条款', path: '/' }
]

const LoginFooter = () => (
  <footer className={styles['login-footer']}>
    <nav className={styles['login-footer-nav']}>
      <ul>
        {
          navList
            .map(item => (
              <li key={item.name}>
                <Link to={item.path} className="minor">{item.name}</Link>
              </li>
            ))
        }
      </ul>
    </nav>
    <p>2020 &copy;北京维卓网络技术部出品</p>
  </footer>
)

export default React.memo(LoginFooter)
