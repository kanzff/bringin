import React from 'react'
import CheckoutCard from './CheckoutCard'


const Cart = ({cart, addToCart}) => {
  console.log('sis', cart)
  return (
    <div className='mt-32 max-w-screen-2xl items-center justify-between mx-auto p-4'>
      {!cart.length &&
        <h1>Your cart is empty</h1>
      }
      {!!cart.length &&
        <div className='flex flex-col gap-4'>
          {
            cart.map((c, i) => {
              return (
                <CheckoutCard product={c} addToCart={addToCart} key={i}/>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default Cart