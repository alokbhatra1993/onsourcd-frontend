import React from 'react'
import { Link } from 'react-router-dom'


const CustomerSideBar = () => {
  return (
    <div className="sidebar">
    <ul className="sidebar-list">
      <li><Link to="/customer/products"> Products</Link></li>
      <li><Link to="/customer/requirements">Requirements</Link></li>
      <li><Link to="/customer/orders">Orders</Link></li>
      <li><Link to="/customer/quotations">Quotation</Link></li>
    </ul>
  </div>
  )
}

export default CustomerSideBar
