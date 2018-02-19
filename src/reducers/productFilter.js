const productFilter = (state = 'ANY', action) => {
  switch (action.type) {
    case 'SET_PRODUCT_FILTER':
      return action.filter
    default:
      return state
  }
}

export default productFilter
