import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import axios from 'axios'
import { baseUrl } from '../api/api'
import { Carousel, Spinner, Pagination } from 'flowbite-react'
import WideProductCard from '../components/WideProductCard'
import Cart from '../components/Cart'

const Landing = () => {

    // const [newProducts, setNewProducts] = useState([])
    // const [newProductsIndex, setNewProductsIndex] = useState({start: 0, end: 6})
    const [currentTab, setCurrentTab] = useState('Main')
    const [products, setProducts] = useState([])
    const [fullProducts, setFullProducts] = useState([])
    const [topProducts, setTopProducts] = useState([])
    // const [productsLimit, setProductsLimit] = useState(15)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)


    useEffect(() => {
        // getProducts(15, 0, null, true)
        getPx()
    }, [])

    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    const searchProducts = (search) => {
        const filtered = fullProducts.filter(e => e.title.toLowerCase().includes(search.toLowerCase()));
        splitProducts(filtered)
    }

    const getPx = async (limit) => {
        const params = {
            limit,
        }
        setIsLoading(true)
        axios.get(`https://fakestoreapi.com/products`, {params})
        .then(res => {
            setFullProducts([...res.data])
            splitProducts([...res.data])
            const sortedData = res.data.sort((a, b) => {
                return b.rating.rate - a.rating.rate
            })
            let newTopProducts = []
            for (let i = 0; i < sortedData.length; i += 3) {
                newTopProducts.push(sortedData.slice(i, i + 3));
            }
            setTopProducts(newTopProducts)
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
        setProducts(temp)
    }

    const addToCart = (item) => {
        if (cart.find((e) => e.productId === item.id)) {
            let newArr = []
            cart.map((e) => {
                if (e.productId === item.id) {
                    newArr.push({
                        ...item,
                        productId: item.id,
                        quantity: e.quantity + 1
                    })
                } else {
                    newArr.push(e)
                }
            })
            setCart(newArr)
        } else {
            setCart([...cart, {
                ...item,
                productId: item.id,
                quantity: item.quantity
            }])
        }
        console.log('cart', cart)
        setCartCount(cartCount + 1)
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

    return (
        <>
            <Navbar setCurrentTab={setCurrentTab} searchProducts={searchProducts} getPx={getPx} cartCount={cartCount} ></Navbar>
            {/* product list */}
            {currentTab === 'Main' &&
                <div className='mt-32 max-w-screen-2xl items-center justify-between mx-auto p-4'>
                    {!!topProducts.length &&
                        <div>
                            <h1 className='font-bold text-2xl ml-10 mb-6'>Top Products</h1>
                            <div className=" mb-8 w-full flex  ">
                                <Carousel slideInterval={2000} className='bg-orange-200 rounded-lg px-20 pt-6 pb-12'>
                                    <WideProductCard product={topProducts[0]}/>
                                    <WideProductCard product={topProducts[1]}/>
                                    <WideProductCard product={topProducts[2]}/>
                                </Carousel>
                            </div>
                        </div>
                    }
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
                                            return <ProductCard product={product} key={i} addToCart={addToCart}/>
                                        })
                                    }

                                </div>
                            </div>
                        }
                        {!!products.length &&
                            <div className='flex justify-center'>
                                <Pagination currentPage={currentPage} totalPages={products.length} onPageChange={onPageChange} />
                            </div>
                        }
                    </div>
                </div>
            }
            {currentTab === 'Cart' &&
                <Cart cart={cart} addToCart={addToCart}/>
            }
            {/* footer */}
            <Footer></Footer>
        </>
    )
}

export default Landing