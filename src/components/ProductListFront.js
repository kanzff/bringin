import React from 'react'

export const ProductListFront = ({product}) => {
    return (
        <>
            <div className='my-4 p-2 flex justify-start items-center'>
                <div className='w-[30rem] flex justify-start items-center'>
                    <img className="w-24 pr-4  rounded-t-lg" src={product.image} alt="product image" />    
                    <p>{product.name}</p>
                </div>
                <p className='w-56'>{new Date(product.createdAt).toLocaleDateString('id-EN', {day: 'numeric', month: 'long', year: 'numeric'})}</p>
                <p className='w-56'>Rp. {product.price}</p>
            </div>  
        </>
    )
}
