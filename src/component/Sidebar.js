// src/components/Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for styling
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/actions';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setUserData({ token: null }));
    navigate("/")
  }

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li><Link to="/admin-dashboard/products"> Products</Link></li>
        <li><Link to="/admin-dashboard/categories">Categories</Link></li>
        <li><Link to="/admin-dashboard/sellers">Seller List</Link></li>
        <li><Link to="/admin-dashboard/buyers">Buyer List</Link></li>
        <li><Link to="/admin-dashboard/orders">Orders</Link></li>
        <li><Link to="/admin-dashboard/quotation">Quotation</Link></li>
        <li><Link to="/admin-dashboard/requirements">Requirements</Link></li>
        <li><Link to="/admin-dashboard/requirements">Requirements</Link></li>

        <li><button
          onClick={handleClick}
        >Logout</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
