import React from 'react'
import initState from './store'
import reducer from './reducer'

const Context = React.createContext({})

export {
  initState,
  Context,
  reducer
}
