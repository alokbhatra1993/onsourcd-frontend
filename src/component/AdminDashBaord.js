import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'; // Outlet is used for nested routes



export const AdminDashBaord = () => {
  return (
    <div className="parent-admin">
     <Sidebar/>
     <Outlet/>
    </div>
  )
}
