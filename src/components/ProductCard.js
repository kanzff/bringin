import { Button } from 'flowbite-react'
import React from 'react'
import star from '../assets/star.png'


const ProductCard = ({product, addToCart, setCurrentTab, setCurrentProduct}) => {

  const handleAdd = () => {
    addToCart({
        ...product,
        productId: product.id,
        quantity: 1,
        totalPrice: product.price
    })
  }

  const goToDetail = () => {
    setCurrentTab('Detail')
    setCurrentProduct(product)
  }

  return (
    <div className="w-72 h-[27rem] max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div onClick={goToDetail}  className='flex justify-center hover:cursor-pointer'>
            <img className="w-60 h-60 p-8 rounded-t-lg object-center" src={product.image} alt="product image" />
        </div>
        <div className="px-5 pb-5 h-[12rem] flex flex-col justify-between">
            <div className="flex items-center justify-between">
                <span className="text-l font-bold text-black-600 dark:text-white">{product.title}</span>
            </div>
            <div>
              <div className="flex items-center justify-between mt-4 mb-2">
                  <span className="text-l font-bold text-slate-800 dark:text-white">$ {product.price}</span>
                  <div className='flex items-center gap-2'>
                      <img src={star} className="h-4" alt="Star"></img>
                      <p className='font-bold text-yellow-300'>{product.rating.rate}</p>
                  </div>
              </div>
              <div className='flex justify-center mt-4'>
                  <Button onClick={handleAdd}>+ Add to cart</Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard