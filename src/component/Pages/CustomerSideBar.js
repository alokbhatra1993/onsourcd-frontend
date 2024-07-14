import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const CustomerSideBar = () => {
  const user = useSelector((state) => state);


  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li><Link to="/customer/products"> Products</Link></li>
        <li><Link
          to={user && user?.userType === "buyer" ? "/customer/requirements" : "/customer/new-requirements"}>
          {user && user?.userType === "buyer" ? "My Requirements" : "New Requirements"}
        </Link></li>
        <li><Link to="/customer/orders">Orders</Link></li>
        <li><Link to="/customer/quotations">
          {user && user?.userType === "buyer" ? "New Quotations" : "My Quotations"}
        </Link></li>
      </ul>
    </div>
  )
}

export default CustomerSideBar
