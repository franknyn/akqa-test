import React from 'react'
import { Row } from 'reactstrap'
import Product from '../components/Product'

const ProductList = ({ products }) => (
    <Row className="mt-4 no-gutters">
      {products.map((product) =>
        <Product
          key={product.index}
          {...product}
        />
      )}                  
    </Row>        
)

export default ProductList;