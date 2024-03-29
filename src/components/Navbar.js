import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bit_logo  from '../assets/bit_logo.jpg'
import cart_logo from '../assets/cart_logo.png'
import back from '../assets/back.png'

const Navbar = ({setCurrentTab, searchProducts, cartCount, currentTab}) => {
    const navigate = useNavigate()
    const access_token = localStorage.getItem('access_token')

    const [search, setSearch] = useState('')

    const logout = () => {
        localStorage.clear()
        navigate('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        searchProducts(search)
    }

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div onClick={() => {setCurrentTab('Main')}} className="flex items-center space-x-3 rtl:space-x-reverse hover:cursor-pointer">
                    <img src={bit_logo} className="w-28" alt="Bit Logo"></img>
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bringin</span> */}
                </div>
                {currentTab === 'Main' &&
                    <div className="items-center" id="navbar-sticky">
                        <form>   
                            <div className="relative">
                                <input onChange={(e)=> setSearch(e.target.value)} type="text" id="default-search" className="block w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search products" required></input>
                                <button onClick={handleSubmit} type="submit" className="text-white absolute end-2.5 bottom-2.5  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>  
                }
                <div className='flex items-center'>
                    {currentTab !== 'Main' &&
                        <button onClick={() => setCurrentTab('Main')} type="button" className="mr-4 text-orange-400 border border-orange-400 hover:bg-slate-100  font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <div className='flex items-center gap-4'>
                                <img src={back} className="w-6" alt="Bit Logo"></img>
                            </div>
                        </button>
                    }
                    <button onClick={() => setCurrentTab('Cart')} type="button" className="mr-4 text-orange-400 border border-orange-400 hover:bg-slate-100  font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <div className='flex items-center gap-4'>
                            <img src={cart_logo} className="w-6" alt="Bit Logo"></img>
                            <p>{cartCount} Items</p>
                        </div>
                    </button>      
                </div>

            </div>
        </nav>
    )
}

export default Navbar