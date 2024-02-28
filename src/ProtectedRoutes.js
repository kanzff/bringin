import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

const ProtectedRoutes = ({children}) => {
    const access_token = localStorage.getItem('access_token')
    const role = localStorage.getItem('role')

    if (!!access_token && role === 'admin') return children
    if (!!access_token) return <Navigate to='/'/>
    return <Navigate to='/login'/>
}

export default ProtectedRoutes