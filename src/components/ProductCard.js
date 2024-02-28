import { Button } from 'flowbite-react'
import React from 'react'

const ProductCard = ({product, addToCart}) => {

  const handleAdd = () => {
    addToCart({
        ...product,
        productId: product.id,
        quantity: 1
    })
  }

  return (
    <div className="w-72 h-86 max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className='flex justify-center'>
            <img className="w-60 h-60 p-8 rounded-t-lg object-center" src={product.image} alt="product image" />
        </a>
        <div className="px-5 pb-5">
            <div className="flex items-center justify-between">
                <span className="text-l font-bold text-black-600 dark:text-white">{product.title}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
                <span className="text-l font-bold text-slate-800 dark:text-white">$ {product.price}</span>
            </div>
            <div>
                <Button onClick={handleAdd}>+ Add to cart</Button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard