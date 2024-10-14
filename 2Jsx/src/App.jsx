import { useState } from 'react'
import Welcome from './welcomeMassage'
import viteLogo from '/vite.svg'
import Jsxrules from './jsxrules'
import Greetings from './Greetings'
import ProductInfo from './ProductInfo'
import List from './List'
import Users from './user'
import Product from './ProductList'

const App = () => {
  return (
  <div> 
  <Greetings />
  <ProductInfo />
  <List />
  <Users />
  <Product />
  </div>)
}


export default App
