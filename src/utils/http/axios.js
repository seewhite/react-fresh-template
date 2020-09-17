/*
 * @Description: axios 二次封装
 * @Author: hasayake
 * @Date: 2020-08-28 11:15:06
 * @LastEditTime: 2020-08-28 15:26:36
 * @LastEditors: Please set LastEditors
 */

import axios from 'axios'

const instance = axios.create({
  baseURL: API_PREFIX
})

instance.interceptors.request.use(config => config, err => Promise.reject(err))

instance.interceptors.response.use(res => res, err => Promise.reject(err))

export default instance
