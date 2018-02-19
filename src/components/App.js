import './App.css'
import React from 'react'
import { Container } from 'reactstrap'
import Header from '../components/Header'
import FilteredProductList from '../containers/FilteredProductList'
const App = () => (
  <Container className="App">
    <Header />
    <FilteredProductList />
  </Container>
)
export default App