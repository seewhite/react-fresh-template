/*
 * @Description: 粒子图封装
 * @Author: hasayake
 * @Date: 2020-09-14 10:42:06
 * @LastEditTime: 2020-09-14 10:47:56
 * @LastEditors: Please set LastEditors
 */

import React from 'react'
import Particles from 'react-particles-js'

import styles from './index.css'

const options = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 90
    },
    size: {
      value: 4
    },
    color: {
      value: '#3498db'
    },
    opacity: {
      value: 0.2
    },
    links: {
      enable: true,
      width: 2,
      opacity: 0.8,
      distance: 150,
      color: '#e9edf2'
    },
    move: {
      speed: 3
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      }
    },
    modes: {
      push: {
        quantity: 4
      }
    },
    resize: true
  }
}

const Particle = () => (
  <Particles
    className={styles['particles-mount']}
    params={options} />
)

export default Particle