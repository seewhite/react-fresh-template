import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import routerList from '@/routers'
import { routerHandler } from '@/utils/help'
// 生成路由平铺数据与父子路由映射
routerHandler.traverseRouterTree(routerList)

const AuthRouter = Props => {
  const { location: { pathname }, history } = Props
  const isLogin = true
  const hit = routerHandler.flatRouterList.find(item => item.path === pathname)

  /**
   * 路由鉴权
   */
  useEffect(() => {
    if (hit) {
      if (hit.auth && !isLogin) {
        history.push('/login')
      }
    } else {
      console.log('未找到路径对应路由配置，重定向至 404')
      history.replace('/404')
    }
  }, [hit, isLogin, history])

  return (
    <>
      <Switch>
        {
          routerList.map(Item => (
            <Route
              key={Item.name}
              path={Item.path}
              render={() => (<Item.component meta={Item.meta} />)}
            />
          ))
        }
      </Switch>
    </>
  )
}


export default AuthRouter