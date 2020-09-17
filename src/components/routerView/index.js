import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { routerHandler } from '@/utils/help'

const RouteView = ({ name, children }) => {
  const childRouteList = routerHandler.parentToChildrenMap[name]

  return (
    <Switch>
      {
        childRouteList && childRouteList.map(Item => (
          <Route
            key={Item.name} path={Item.path}
            component={Item.component} exact={Item.exact}
          />
        ))
      }
      {children ? children : null}
    </Switch>
  )
}

RouteView.defaultProps = {
  name: ''
}

RouteView.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element
}

export default React.memo(RouteView)
