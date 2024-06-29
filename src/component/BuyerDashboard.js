import React from 'react'
import { Outlet } from 'react-router-dom'; // Outlet is used for nested routes
import CustomerSideBar from './Pages/CustomerSideBar';


const BuyerDashboard = () => {
  return (
    <div className='parent-admin'>
      <CustomerSideBar/>
      <Outlet/>
    </div>
  )
}

export default BuyerDashboard