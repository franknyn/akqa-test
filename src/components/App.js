import './App.css'
import React from 'react'
import { Container } from 'reactstrap'
import ProductList from './ProductList'
import Data from '../products.json'

const App = () => (
  <Container className="App">
    <ProductList products={Data}/>
  </Container>
)
export default App