import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomerSideBar from './Pages/CustomerSideBar'

export const SellerDashboard = () => {
  return (
    <div className='parent-admin'>
        <CustomerSideBar/>
        <Outlet/>
    
    </div>
  )
}
