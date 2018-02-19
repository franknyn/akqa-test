import { combineReducers } from 'redux'
import products from './products'
import productFilter from './productFilter'

const myApp = combineReducers({
  productFilter,
  products
})

export default myApp
