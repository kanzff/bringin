import { Button } from 'flowbite-react'
import React from 'react'
import star from '../assets/star.png'


const CheckoutCard = ({product, addToCart}) => {

  const handleAdd = () => {
    addToCart({
        ...product,
        productId: product.id,
        quantity: 1
    })
  }

  return (
    <div className="flex max-w-screen-md justify-between items-center bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
            <a href="#" className='flex justify-center'>
                <img className="w-60 h-60 p-8 rounded-t-lg object-center" src={product.image} alt="product image" />
            </a>
            <div className="flex items-center gap-12 justify-center mb-8">
                <span className="text-l font-bold text-slate-800 dark:text-white">$ {product.price}</span>
                <div className='flex items-center gap-2'>
                    <img src={star} className="h-4" alt="Star"></img>
                    <p className='font-bold text-yellow-300'>{product.rating.rate}</p>
                </div>
            </div>
        </div>
        <div className="px-5 max-w-sm items-center">
            <div className="flex items-center justify-between">
                <span className="text-l font-bold text-black-600 dark:text-white">{product.title}</span>
            </div>
        </div>
        <div className='pr-8'>
            <div className="flex items-center justify-center mb-2">
                <span className="text-l font-bold text-slate-800 dark:text-white">$ {product.totalPrice}</span>
            </div>
            <hr class="my-4 h-0.5 bg-slate-950"></hr>
            <div className='flex gap-4'>
                <Button size='xs' className='' onClick={handleAdd}>-</Button>
                <p>{product.quantity}</p>
                <Button size='xs' className='' onClick={handleAdd}>+</Button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutCard