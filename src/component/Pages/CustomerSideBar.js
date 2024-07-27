import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const CustomerSideBar = () => {
  const user = useSelector((state) => state);


  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li><Link to="/customer/add-product"> Products</Link></li>
        <li><Link
          to={user && user?.userType === "buyer" ? "/customer/requirements" : "/customer/new-requirements"}>
          {user && user?.userType === "buyer" ? "My Requirements" : "New Requirements"}
        </Link></li>
        <li><Link to="/customer/orders">Orders</Link></li>
        {user && user?.userType === "seller" ? (
          < li > <Link to="/customer/quotations">
            My Quotations
          </Link></li>
        ) : null
        }
      </ul>
    </div >
  )
}

export default CustomerSideBar
