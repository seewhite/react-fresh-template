import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// antd 全局配置
import { ConfigProvider  } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'dayjs/locale/zh-cn'

import Loading from '@cpts/loading'
import AuthRouter from '@cpts/authRouter'

// 权限路由
const App = () => (
  <Router>
    <ConfigProvider locale={zhCN} componentSize="middle">
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={AuthRouter} />
        </Switch>
      </Suspense>
    </ConfigProvider>
  </Router>
)

export default App
