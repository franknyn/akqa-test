import React from 'react'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'
import ProductList from '../components/ProductList'

const getFilteredProducts = (products, filter) => {
  switch (filter) {
    case 'ANY':
      return products
    default:
      return products.filter(p => p.size.includes(filter))
  }
}

const mapStateToProps = state => ({
    products: getFilteredProducts(state.products, state.productFilter)
})

export default connect(mapStateToProps, null)(ProductList)