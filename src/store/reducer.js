const reducer = (state, action) => {
  console.log(state, action, 'reducer')

  switch(action.type) {
    case 'increment':
      return { ...state, name: state.name + '123' }

    case 'incrementKey':
      return {  ...state, key: state.key + 1 }

    default:
      return { ...state }
  }
}

export default reducer
