import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import axios from 'axios'
import { baseUrl } from '../api/api'
import { Carousel, Spinner, Pagination } from 'flowbite-react'
// import perfume1 from '../assets/perfume_1.jpg'
// import perfume2 from '../assets/perfume_2.jpg'
// import perfume3 from '../assets/perfume_3.jpg'
import WideProductCard from '../components/WideProductCard'

const Landing = () => {

    // const [newProducts, setNewProducts] = useState([])
    // const [newProductsIndex, setNewProductsIndex] = useState({start: 0, end: 6})
    const [products, setProducts] = useState([])
    const [topProducts, setTopProducts] = useState([])
    const [productsLimit, setProductsLimit] = useState(15)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(2);


    useEffect(() => {
        // getProducts(15, 0, null, true)
        getPx()
    }, [])

    const onPageChange = (page) => setCurrentPage(page);

    const getPx = async (limit) => {
        const params = {
            limit,
            // offset,
            // search,
            // is_active,
        }
        setIsLoading(true)
        axios.get(`https://fakestoreapi.com/products`, {params})
        .then(res => {
            splitProducts([...res.data])
            const sortedData = res.data.sort((a, b) => {
                return b.rating.rate - a.rating.rate
            })
            let newTopProducts = []
            for (let i = 0; i < sortedData.length; i += 3) {
                newTopProducts.push(sortedData.slice(i, i + 3));
            }
            // console.log('new', newTopProducts)
            setTopProducts(newTopProducts)
            // console.log('all', res.data)
            // setNewProducts(res.data.slice(0, 5))
            setProductsLimit(limit)
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
        })
    }

    const splitProducts = (arr) => {
        let temp = []
        for (let i = 0; i < arr.length; i += 10) {
            temp.push(arr.slice(i, i + 10));
        }
        console.log('new', temp)
        setProducts(temp)
        console.log('length', products.length)
    }

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
            // console.log(res.data)
            // setNewProducts(res.data.slice(0, 5))
            // setProducts(res.data)
            // setProductsLimit(limit)
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
        })
    }

    // const nextProducts = () => {
    //     if (newProductsIndex.start === 0 ) {
    //         setNewProducts(products.slice(5, 10))
    //         setNewProductsIndex({start: 5, end: 10})
    //     } else {
    //         setNewProducts(products.slice(10, 15))
    //         setNewProductsIndex({start: 10, end: 15})
    //     }
    // }

    // const previousProducts = () => {
    //     if (newProductsIndex.start === 10 ) {
    //         setNewProducts(products.slice(5, 10))
    //         setNewProductsIndex({start: 5, end: 10})
    //     } else {
    //         setNewProducts(products.slice(0, 5))
    //         setNewProductsIndex({start: 0, end: 5})
    //     }
    // }

    return (
        <>
            <Navbar getProducts={getProducts} getPx={getPx} ></Navbar>
            {/* product list */}
            <div className='mt-32 max-w-screen-2xl items-center justify-between mx-auto p-4'>
                {!!topProducts.length &&
                    <div>
                        <h1 className='font-bold text-2xl ml-10 mb-6'>Top Products</h1>
                        <div className=" mb-8 w-full flex  ">
                            <Carousel slideInterval={2000} className='bg-slate-400 px-20 pt-6 pb-12'>
                                <WideProductCard product={topProducts[0]}/>
                                <WideProductCard product={topProducts[1]}/>
                                <WideProductCard product={topProducts[2]}/>
                                {/* <img src={perfume1} alt="..." />
                                <img src={perfume2} alt="..." />
                                <img src={perfume3} alt="..." /> */}
                            </Carousel>
                        </div>
                    </div>
                }
                {/* <div className='newest-newest-product mb-8'>
                    <h1 className='font-bold text-2xl ml-10'>Terbaru</h1>
                    {!!isLoading &&
                        <div className='flex m-4 justify-center'>
                            <Spinner color="info" aria-label="Info spinner example" />
                        </div>
                    }
                    <div className='flex my-4'>
                        <button onClick={previousProducts} type='button'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></button>
                        <div className='flex gap-2 mx-4 w-full'>
                             {!!newProducts.length &&
                                newProducts.map((product, i) => {
                                    return <ProductCard product={product} key={i}/>
                                })
                            }
                        </div>
                        <button onClick={nextProducts} type='button'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>
                    </div>
                </div> */}
                <div className='available-product'>
                    <h1 className='font-bold text-2xl ml-10'>Available Products</h1>
                    {!!isLoading &&
                        <div className='flex m-4 justify-center'>
                            <Spinner color="info" aria-label="Info spinner example" />
                        </div>
                    }
                    {!!products[currentPage - 1] &&
                        <div className='flex my-4 '>
                            <div className='flex gap-2 flex-wrap mx-4 w-full'>
                                {!!products[currentPage - 1].length &&
                                    products[currentPage - 1].map((product, i) => {
                                        return <ProductCard product={product} key={i}/>
                                    })
                                }

                            </div>
                        </div>
                    }
                    {!!products.length &&
                        <div className='flex justify-center'>
                            <Pagination currentPage={currentPage} totalPages={2} onPageChange={onPageChange} />
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