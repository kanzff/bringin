import React from 'react'
import star from '../assets/star.png'


const WideProductCard = ({product, setCurrentProduct, setCurrentTab}) => {
    // console.log(product)

  const goToDetail = (item) => {
    setCurrentTab('Detail')
    setCurrentProduct(item)
  }

  return (
    <div className='flex w-full gap-2 justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className="w-72 h-96 max-w-sm bg-white " onClick={() => { goToDetail(product[0])}} >
            <a href="#" className='flex justify-center'>
                <img className="w-60 h-60 p-8 rounded-t-lg object-center" src={product[0].image} alt="product image" />
            </a>
            <div className="flex flex-col justify-between px-5 pb-5 h-[9rem]">
                <div className="flex items-center justify-between">
                    <span className="text-l font-bold text-black-600 dark:text-white">{product[0].title}</span>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <span className="text-l font-bold text-slate-800 dark:text-white">$ {product[0].price}</span>
                    <div className='flex items-center gap-2'>
                        <img src={star} className="h-4" alt="Star"></img>
                        <p className='font-bold text-yellow-300'>{product[0].rating.rate}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-72 h-96 max-w-sm bg-white " onClick={() => { goToDetail(product[1])}}>
            <a href="#" className='flex justify-center'>
                <img className="w-60 h-60 p-8 rounded-t-lg object-center" src={product[1].image} alt="product image" />
            </a>
            <div className="flex flex-col justify-between px-5 pb-5 h-[9rem]">
                <div className="flex items-center justify-between">
                    <span className="text-l font-bold text-black-600 dark:text-white">{product[1].title}</span>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <span className="text-l font-bold text-slate-800 dark:text-white">$ {product[1].price}</span>
                    <div className='flex items-center gap-2'>
                        <img src={star} className="h-4" alt="Star"></img>
                        <p className='font-bold text-yellow-300'>{product[1].rating.rate}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-72 h-96 max-w-sm bg-white"  onClick={() => { goToDetail(product[2])}}>
            <a href="#" className='flex justify-center'>
                <img className="w-60 h-60 p-8 rounded-t-lg object-center" src={product[2].image} alt="product image" />
            </a>
            <div className=" flex flex-col justify-between px-5 pb-5 h-[9rem]">
                <div className="flex items-center justify-between">
                    <span className="text-l font-bold text-black-600 dark:text-white">{product[2].title}</span>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <span className="text-l font-bold text-slate-800 dark:text-white">$ {product[2].price}</span>
                    <div className='flex items-center gap-2'>
                        <img src={star} className="h-4" alt="Star"></img>
                        <p className='font-bold text-yellow-300'>{product[2].rating.rate}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WideProductCard