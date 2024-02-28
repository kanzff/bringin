import { Navbar } from 'flowbite-react'
import React from 'react'
import ProductCard from './ProductCard'


const Cart = ({cart}) => {
  console.log('sis', cart)
  return (
    <div>
      <ProductCard product={cart[0]}/>
    </div>
  )
}

export default Cart