import React from 'react'
import ProductFilter from '../containers/ProductFilter'
import { PRODUCT_FILTER_OPTIONS } from '../constants'
const Header = () => (
	  <div className="App-header d-flex justify-content-between p-2">
	    <h4 className="font-weight-bold">Women's tops</h4>
	    <ProductFilter options={PRODUCT_FILTER_OPTIONS} />
	  </div>
)
export default Header