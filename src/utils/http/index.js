/*
 * @Description: 自定义请求 Hooks
 * @Author: hasayake
 * @Date: 2020-08-28 15:25:26
 * @LastEditTime: 2020-09-08 10:22:22
 * @LastEditors: Please set LastEditors
 */

import { useState, useReducer, useEffect, useCallback } from 'react'
import axios from './axios'
import api from '@/api'

/**
 * @description: 动态 api key 解析
 * @param {type} keyIndex: {string}
 * @return {type} path: {string}
 */
const keyPathSplit = keyIndex => {
  let path
  const splits = keyIndex.split('.')

  for (const item of splits) {
    path = path ? path[item] : api[item]
  }
  if (path) {
    return path
  } else {
    throw new Error('Api NotFound...')
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { data: action.payload, loading: false }
    case 'FETCH_FAILURE':
      return { ...state, loading: false }
    default:
      throw new Error('Actino Type Invalid...')
  }
}

/**
 * @description:
 * @param {type} keyIndex: {string} initParams: {object}
 * @return {type} state: {object} setParams: {function}
 */
const useFetch = (keyIndex, initParams) => {
  const [state, dispatch] = useReducer(reducer, { data: {}, loading: true })
  const [params, setParams] = useState(initParams)

  const fetch = useCallback(async () => {
    dispatch({type: 'FETCH_INIT'})
    try {
      const hitApi = keyPathSplit(keyIndex)
      const result = await axios[hitApi.type](
        hitApi.url,
        (hitApi.type === 'get') ? { params: params || {} } : params
      )

      dispatch({type: 'FETCH_SUCCESS', payload: result})
    } catch(err) {
      console.error(err)
      dispatch({type: 'FETCH_FAILURE'})
    }

  }, [keyIndex, params])

  useEffect(() => {
    fetch()
  }, [fetch])

  return [state, setParams]
}

export default useFetch
