import React, { useEffect } from 'react'
import CheckoutCard from './CheckoutCard'
import { Button } from 'flowbite-react'


const Cart = ({cart, addToCart, totalPrice, setCurrentTab}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='mt-32 max-w-screen-2xl min-h-screen items-center justify-between mx-auto p-4'>
      {!cart.length &&
        <h1 className='font-bold text-xl'>Your cart is empty</h1>
      }
      {!!cart.length &&
        <div className='flex justify-between'>
          <div className='flex flex-col gap-4'>
            {
              cart.map((c, i) => {
                return (
                  <CheckoutCard product={c} addToCart={addToCart} key={i}/>
                )
              })
            }
          </div>
          <div className='w-1/4'>
            <div className='ml-12  py-8 flex justify-center bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700'>
              <div className='w-72'>
                <div className='flex justify-between mb-4'>
                  <h1 className='font-bold'>Total Price</h1>
                  <h1 className='font-bold'>$ {totalPrice}</h1>
                </div>
                <hr class="my-4 h-0.5 bg-slate-950"></hr>
                <Button onClick={() => { setCurrentTab('Checkout')}} className='w-full'>Buy</Button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Cart