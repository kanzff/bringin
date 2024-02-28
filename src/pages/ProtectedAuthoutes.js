import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedAuthRoutes = ({children}) => {
    const access_token = localStorage.getItem('access_token')

    if (!!access_token) return <Navigate to='/'/>
    return children
}

export default ProtectedAuthRoutes