import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/actions';
import { FaBox, FaList, FaUserTie, FaUser, FaClipboardList, FaFileInvoice, FaClipboard, FaSignOutAlt, FaArrowRight } from 'react-icons/fa';
import './Sidebar.css'; // Import the CSS file for additional styling

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    dispatch(setUserData({ token: null }));
    navigate("/");
  };

  const getLinkClass = (path) => (
    location.pathname === path ? 'flex-1 hover:text-gray-400 text-black bg-yellow-400' : 'flex-1 hover:text-gray-400 text-white'
  );

  return (
    <div className="sidebar bg-gray-800 text-white w-64 min-h-screen flex flex-col justify-between">
      <ul className="sidebar-list p-4 space-y-4">
      <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUser className="mr-3" />
            <Link to="/admin-dashboard/order-dashboard" className={getLinkClass("/admin-dashboard/order-dashboard")}>Dashboard</Link>
          </div>
          <FaArrowRight />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaBox className="mr-3" />
            <Link to="/admin-dashboard/products" className={getLinkClass("/admin-dashboard/products")}>Products</Link>
          </div>
          <FaArrowRight />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaList className="mr-3" />
            <Link to="/admin-dashboard/categories" className={getLinkClass("/admin-dashboard/categories")}>Categories</Link>
          </div>
          <FaArrowRight />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUserTie className="mr-3" />
            <Link to="/admin-dashboard/sellers" className={getLinkClass("/admin-dashboard/sellers")}>Seller List</Link>
          </div>
          <FaArrowRight />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaUser className="mr-3" />
            <Link to="/admin-dashboard/buyers" className={getLinkClass("/admin-dashboard/buyers")}>Buyer List</Link>
          </div>
          <FaArrowRight />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaClipboardList className="mr-3" />
            <Link to="/admin-dashboard/orders" className={getLinkClass("/admin-dashboard/orders")}>Orders</Link>
          </div>
          <FaArrowRight />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaFileInvoice className="mr-3" />
            <Link to="/admin-dashboard/quotation" className={getLinkClass("/admin-dashboard/quotation")}>Quotation</Link>
          </div>
          <FaArrowRight />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaClipboard className="mr-3" />
            <Link to="/admin-dashboard/requirements" className={getLinkClass("/admin-dashboard/requirements")}>Requirements</Link>
          </div>
          <FaArrowRight />
        </li>
      </ul>
      <div className="p-4">
        <button
          className="bg-[#f6b60d] text-black flex items-center w-full text-center hover:text-gray-400 text-white"
          onClick={handleClick}
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
