import React, { useEffect } from 'react'
import CheckoutCard from './CheckoutCard'
import { Button } from 'flowbite-react'
import star from '../assets/star.png'



const ProductDetail = ({cart, addToCart, totalPrice, currentProduct}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
    console.log(currentProduct)
  }, [])

  const handleAdd = () => {
    addToCart({
        ...currentProduct,
        productId: currentProduct.id,
        quantity: 1,
        totalPrice: currentProduct.price
    })
  }

  return (
    <div className='mt-32 flex max-w-screen-2xl min-h-screen justify-center mx-auto p-4'>
      <div className='h-96 pt-4 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className="flex max-w-screen-md justify-between gap-8 items-center ">
          <div className='flex justify-center'>
            <div>
              <img className="w-60 h-60 p-8 rounded-t-lg object-center" src={currentProduct.image} alt="currentProduct image" />
              <div className="flex items-center gap-12 justify-center mb-2">
                  <span className="text-l font-bold text-slate-800 dark:text-white">$ {currentProduct.price}</span>
                  <div className='flex items-center gap-2'>
                      <img src={star} className="h-4" alt="Star"></img>
                      <p className='font-bold text-yellow-300'>{currentProduct.rating.rate}</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="px-5 max-w-sm items-center">
            <div className="flex items-center justify-between">
                <span className="text-l font-bold text-black-600 dark:text-white">{currentProduct.title}</span>
            </div>
            <hr class="my-4 h-0.5 bg-slate-950"></hr>
            <div className="flex items-center justify-between">
                <span className="text-l font-semibold text-black-600 dark:text-white">{currentProduct.description}</span>
            </div>
          </div>
        </div>
          <div className='flex justify-center mt-8'>
            <Button onClick={handleAdd}>+ Add to cart</Button>
          </div>
      </div>
    </div>
  )
}

export default ProductDetail