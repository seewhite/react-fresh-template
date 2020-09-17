/*
 * @Description: 路由配置文件
 * @Author: hasayake
 * @Date: 2020-08-24 15:36:15
 * @LastEditTime: 2020-09-17 10:39:09
 * @LastEditors: Please set LastEditors
 */

import { lazy } from 'react'

/*
* @path: 路径 required
* @name: 组件名称 required (切勿重复，唯一值)
* @component: 懒加载组件 required
* @auth: 是否需要权限访问
* @exact: 是否严格匹配
* @meta: 对应路由元信息
*/

/**********************************************************************************************
 * 配置必看：
 * name 值将会被在生成父子路由映射中使用。
 * 因此每个路由配置必须确保 name 值唯一，可采用根据层级命名的方式。
 * 若要实现嵌套路由，只需在对应 children 配置
 * 及在父组件中使用 @/components/routerView 子组件并传入对应 name 参数即可
 **********************************************************************************************/

import Home from '@/views/home'

export default [
  { path: '/404', name: '404', component: lazy(() => import('@/views/404')), auth: false, exact: true, meta: {title: '404'}},
  { path: '/render', name: 'Render', component: lazy(() => import('@/views/render')), auth: true, exact: true, meta: {title: 'render'}},
  { path: '/login', name: 'Login', component: lazy(() => import('@/views/login')), auth: false, exact: true, meta: {title: 'login'}},
  /**
   * 因为子菜单路径期望没有显式前缀 /xxx 而非 /home/xxx
   * 因此首页路径需设置为 /，除首页外的一级菜单必须插入在 Home 组件之前，如此才能正确匹配
   * 下为首页组件配置
   */
  {
    path: '/',
    name: 'Home',
    auth: true,
    exact: false,
    component: Home,
    meta: {title: '首页'},
    // 子路由权限与 / 路由权限一致
    children: [
      { path: '/overview', name: 'Overview', component: lazy(() => import('@/views/overview')), auth: true, exact: true, meta: {title: '概览'}},

      {
        path: '/index',
        name: 'Home-Index',
        auth: true,
        exact: false,
        component: lazy(() => import('@/views/index')),
        meta: {title: '这里是测试'},
        children: [
          { path: '/index/index', name: 'Home-Index-index', component: lazy(() => import('@/views/index1')), auth: true, exact: false, meta: {title: ''}}
        ]
      },
      { path: '/index1', name: 'Home-Index1', component: lazy(() => import('@/views/index1')), auth: true, exact: false, meta: {title: ''}},
      { path: '/total-expenses', name: 'Home-TotalExpenses', component: lazy(() => import('@/views/totalExpenses')), auth: true, exact: false, meta: {title: '费用统计'}}
    ]
  }
]
