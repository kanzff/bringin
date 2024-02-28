import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import axios from 'axios'
import { baseUrl } from '../api/api'
import { Carousel, Spinner } from 'flowbite-react'
import perfume1 from '../assets/perfume_1.jpg'
import perfume2 from '../assets/perfume_2.jpg'
import perfume3 from '../assets/perfume_3.jpg'

const Landing = () => {

    const [newProducts, setNewProducts] = useState([])
    const [newProductsIndex, setNewProductsIndex] = useState({start: 0, end: 6})
    const [products, setProducts] = useState([])
    const [productsLimit, setProductsLimit] = useState(15)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getProducts(15, 0, null, true)
    }, [])

    const getProducts = async (limit, offset, search, is_active) => {
        const params = {
            limit,
            offset,
            search,
            is_active,
        }
        setIsLoading(true)
        axios.get(`${baseUrl}/product`, {params})
        .then(res => {
            console.log(res.data)
            setNewProducts(res.data.slice(0, 5))
            setProducts(res.data)
            setProductsLimit(limit)
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
        })
    }

    const nextProducts = () => {
        if (newProductsIndex.start === 0 ) {
            setNewProducts(products.slice(5, 10))
            setNewProductsIndex({start: 5, end: 10})
        } else {
            setNewProducts(products.slice(10, 15))
            setNewProductsIndex({start: 10, end: 15})
        }
    }

    const previousProducts = () => {
        if (newProductsIndex.start === 10 ) {
            setNewProducts(products.slice(5, 10))
            setNewProductsIndex({start: 5, end: 10})
        } else {
            setNewProducts(products.slice(0, 5))
            setNewProductsIndex({start: 0, end: 5})
        }
    }

    return (
        <>
            <Navbar getProducts={getProducts} ></Navbar>
            {/* product list */}
            <div className='mt-32 max-w-screen-2xl items-center justify-between mx-auto p-4'>
                <div className="mx-10 mb-8 w-[90rem] flex justify-center h-96">
                    <Carousel>
                        <img src={perfume1} alt="..." />
                        <img src={perfume2} alt="..." />
                        <img src={perfume3} alt="..." />
                    </Carousel>
                    </div>
                <div className='newest-newest-product mb-8'>
                    <h1 className='font-bold text-2xl ml-10'>Terbaru</h1>
                    {!!isLoading &&
                        <div className='flex m-4 justify-center'>
                            <Spinner color="info" aria-label="Info spinner example" />
                        </div>
                    }
                    <div className='flex my-4'>
                        <button onClick={previousProducts} type='button'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></button>
                        <div className='flex mx-4 w-full'>
                             {!!newProducts.length &&
                                newProducts.map((product, i) => {
                                    return <ProductCard product={product} key={i}/>
                                })
                            }
                        </div>
                        <button onClick={nextProducts} type='button'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>
                    </div>
                </div>
                <div className='available-product'>
                    <h1 className='font-bold text-2xl ml-10'>Produk Tersedia</h1>
                    {!!isLoading &&
                        <div className='flex m-4 justify-center'>
                            <Spinner color="info" aria-label="Info spinner example" />
                        </div>
                    }
                    <div className='flex my-4 ml-6'>
                        <div className='flex flex-wrap mx-4 w-full'>
                            {!!products.length &&
                                products.map((product, i) => {
                                    return <ProductCard product={product} key={i}/>
                                })
                            }

                        </div>
                    </div>
                    {!!isLoading ? 
                        <div className='flex m-4 justify-center'>
                            <Spinner color="info" aria-label="Info spinner example" />
                        </div> :
                        <div className='flex justify-center'>
                            <button onClick={() => getProducts(productsLimit + 5, 0)} type="button" className="ml-10 text-blue-600 border border-blue-600 hover:bg-slate-100 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lihat lebih banyak</button>
                        </div>
                    }
                </div>
            </div>
            {/* footer */}
            <Footer></Footer>
        </>
    )
}

export default Landing