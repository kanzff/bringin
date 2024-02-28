import React from 'react'

const WideProductCard = ({product}) => {
    console.log(product)
  return (
    <div className='flex w-full gap-2 justify-between'>
        <div className="w-72 h-86 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className='flex justify-center'>
                <img className="w-60 h-60 p-8 rounded-t-lg object-center" src={product[0].image} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <div className="flex items-center justify-between">
                    <span className="text-l font-bold text-black-600 dark:text-white">{product[0].title}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-l font-bold text-slate-800 dark:text-white">$ {product[0].price}</span>
                </div>
            </div>
        </div>
        <div className="w-72 h-86 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className='flex justify-center'>
                <img className="w-60 h-60 p-8 rounded-t-lg object-center" src={product[1].image} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <div className="flex items-center justify-between">
                    <span className="text-l font-bold text-black-600 dark:text-white">{product[1].title}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-l font-bold text-slate-800 dark:text-white">$ {product[1].price}</span>
                </div>
            </div>
        </div>
        <div className="w-72 h-86 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className='flex justify-center'>
                <img className="w-60 h-60 p-8 rounded-t-lg object-center" src={product[2].image} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <div className="flex items-center justify-between">
                    <span className="text-l font-bold text-black-600 dark:text-white">{product[2].title}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-l font-bold text-slate-800 dark:text-white">$ {product[2].price}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WideProductCard