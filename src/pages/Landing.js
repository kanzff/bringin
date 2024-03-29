import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import axios from 'axios'
import { Carousel, Spinner, Pagination, Button, Select, Dropdown } from 'flowbite-react'
import WideProductCard from '../components/WideProductCard'
import Cart from '../components/Cart'
import ProductDetail from '../components/ProductDetail'
import CheckoutForm from '../components/CheckoutForm'

const Landing = () => {

    const [currentTab, setCurrentTab] = useState('Main')
    const [currentProduct, setCurrentProduct] = useState({})
    const [products, setProducts] = useState([])
    const [fullProducts, setFullProducts] = useState([])
    const [topProducts, setTopProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [category, setCategory] = useState('All')


    useEffect(() => {
        getPx()
    }, [])

    useEffect(() => {
        let countTotalPrice = 0
        cart.map(c => {
            countTotalPrice += c.totalPrice
        })

        setTotalPrice(Math.round(countTotalPrice * 100) / 100)
    }, [cart])

    useEffect(() => {
        selectCategory(category)
    }, [category])

    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    const searchProducts = (search) => {
        const filtered = fullProducts.filter(e => e.title.toLowerCase().includes(search.toLowerCase()));
        splitProducts(filtered)
    }


    const selectCategory = (category) => {
        if (category === 'all') {
            splitProducts(fullProducts)
        } else {
            const filtered = fullProducts.filter(e => e.category === category);
            splitProducts(filtered)
        }
    }

    const getPx = async (limit) => {
        const params = {
            limit,
        }
        setIsLoading(true)
        axios.get(`https://fakestoreapi.com/products`, {params})
        .then(res => {
            setFullProducts([...res.data])
            console.log([...res.data])
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
                        quantity: e.quantity + 1,
                        totalPrice: Math.round((e.totalPrice + e.price) * 100) / 100
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
                quantity: item.quantity,
                totalPrice: item.price
            }])
        }
        setCartCount(cartCount + 1)
    }

    const removeFromCart = (item) => {
        if (cart.find((e) => e.productId === item.id)) {
            let newArr = []
            cart.map((e) => {
                if (e.productId === item.id) {
                    if (e.quantity > 1) {
                        newArr.push({
                            ...item,
                            productId: item.id,
                            quantity: e.quantity - 1,
                            totalPrice: Math.round((e.totalPrice - e.price) * 100) / 100
                        })
                    }
                } else {
                    newArr.push(e)
                }
            })
            setCart(newArr)
        }
        setCartCount(cartCount - 1)
    }

    return (
        <>
            <Navbar setCurrentTab={setCurrentTab} currentTab={currentTab} searchProducts={searchProducts} getPx={getPx} cartCount={cartCount} ></Navbar>
            {/* product list */}
            {currentTab === 'Main' &&
                <div className='mt-32 max-w-screen-2xl items-center justify-between mx-auto p-4'>
                    {!!topProducts.length &&
                        <div>
                            <h1 className='font-bold text-2xl ml-10 mb-6 text-orange-400'>Top Products</h1>
                            <div className=" mb-8 w-full flex  ">
                                <Carousel slideInterval={2000} className='bg-orange-400 rounded-lg px-20 pt-6 pb-12'>
                                    <WideProductCard product={topProducts[0]} setCurrentTab={setCurrentTab} setCurrentProduct={setCurrentProduct}/>
                                    <WideProductCard product={topProducts[1]} setCurrentTab={setCurrentTab} setCurrentProduct={setCurrentProduct}/>
                                    <WideProductCard product={topProducts[2]} setCurrentTab={setCurrentTab} setCurrentProduct={setCurrentProduct}/>
                                </Carousel>
                            </div>
                        </div>
                    }
                    <div className='available-product'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-2xl ml-10 text-orange-400'>Available Products</h1>
                            <div className='mr-10'>
                                <Dropdown label={category.toUpperCase()}>
                                    <Dropdown.Item onClick={() => {setCategory('all')}}>All</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={() => {setCategory('electronics')}}>Electronic</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setCategory('jewelery')}}>Jewelery</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setCategory(`men's clothing`)}}>Men's Clothing</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setCategory(`women's clothing`)}}>Women's Clothing</Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>
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
                                            return <ProductCard product={product} key={i} addToCart={addToCart} setCurrentTab={setCurrentTab} setCurrentProduct={setCurrentProduct}/>
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
                <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} totalPrice={totalPrice} setCurrentTab={setCurrentTab} setCurrentProduct={setCurrentProduct}/>
            }
            {currentTab === 'Detail' &&
                <ProductDetail currentProduct={currentProduct} addToCart={addToCart} setCurrentTab={setCurrentTab}/>
            }
            {currentTab === 'Checkout' &&
                <CheckoutForm/>
            }
            {/* footer */}
            <Footer></Footer>
        </>
    )
}

export default Landing