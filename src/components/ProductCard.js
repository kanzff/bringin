import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="w-72 h-86 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className='flex justify-center'>
            <img className="w-60 h-60 p-8 rounded-t-lg object-center" src={product.image} alt="product image" />
        </a>
        <div className="px-5 pb-5">
            <div className="flex items-center justify-between">
                <span className="text-l font-bold text-black-600 dark:text-white">{product.name}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-l font-bold text-blue-600 dark:text-white">IDR {product.price}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard