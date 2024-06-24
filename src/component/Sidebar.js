// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li><Link to="/admin-dashboard/products"> Products</Link></li>
        <li><Link to="/admin-dashboard/categories">Categories</Link></li>
        <li><Link to="/admin-dashboard/seller-list">Seller List</Link></li>
        <li><Link to="/admin-dashboard/buyer-list">Buyer List</Link></li>
        <li><Link to="/admin-dashboard/orders">Orders</Link></li>
        <li><Link to="/admin-dashboard/quotation">Quotation</Link></li>
        <li><Link to="/admin-dashboard/requirements">Requirements</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
