import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FaBox, FaClipboardList, FaTags, FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const CustomerSideBar = () => {
  const user = useSelector((state) => state);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-80 bg-gray-900 text-white h-full py-6 shadow-lg">
      <div className="mb-8 text-center text-2xl font-bold">Customer Dashboard</div>
      <ul className="space-y-4">
        <li className="relative group">
          <Link
            to={user?.userType === "buyer" ? "/customer/customer-products" : "/customer/seller-products"} className={`flex items-center p-3 rounded-lg ${isActive('/customer/add-product') ? 'bg-yellow-900' : 'bg-gray-800'
              } hover:bg-yellow-900 transition duration-300`}
          >
            <FaBox className="text-yellow-400 text-lg mr-3" />
            <span className="text-white font-medium">Products</span>
          </Link>
          <MdKeyboardArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-white transition duration-300" />
        </li>
        <li className="relative group">
          <Link
            to={user?.userType === "buyer" || user?.userType === "manufacturer" ? "/customer/requirements" : "/customer/new-requirements"}
            className={`flex items-center p-3 rounded-lg ${isActive('/customer/requirements') || isActive('/customer/new-requirements') ? 'bg-yellow-900' : 'bg-gray-800'
              } hover:bg-yellow-900 transition duration-300`}
          >
            <FaClipboardList className="text-yellow-400 text-lg mr-3" />
            <span className="text-white font-medium">
              {user?.userType === "buyer" || user?.userType === "manufacturer" ? "My Requirements" : "New Requirements"}
            </span>
          </Link>
          <MdKeyboardArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-white transition duration-300" />
        </li>
        <li className="relative group">
          <Link
            to={user?.userType ? "/customer/seller-orders" : "/customer/orders"}
            className={`flex items-center p-3 rounded-lg ${isActive('/customer/seller-orders') || isActive('/customer/orders') ? 'bg-yellow-900' : 'bg-gray-800'
              } hover:bg-yellow-900 transition duration-300`}
          >
            <FaShoppingCart className="text-yellow-400 text-lg mr-3" />
            <span className="text-white font-medium">Orders</span>
          </Link>
          <MdKeyboardArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-white transition duration-300" />
        </li>
        <li className="relative group">
          {/* {user?.userType === "seller" && (
            <Link
              to="/customer/quotations"
              className={`flex items-center p-3 rounded-lg ${
                isActive('/customer/quotations') ? 'bg-yellow-900' : 'bg-gray-800'
              } hover:bg-yellow-900 transition duration-300`}
            >
              <FaTags className="text-yellow-400 text-lg mr-3" />
              <span className="text-white font-medium">My Quotations</span>
            </Link>
          )} */}

          {user?.userType === "buyer" && (
            <Link
              to="/customer/company-detail"
              className={`flex items-center p-3 rounded-lg ${isActive('/customer/company-detail') ? 'bg-yellow-900' : 'bg-gray-800'
                } hover:bg-gray-900 transition duration-300`}
            >
              <FaTags className="text-yellow-400 text-lg mr-3" />
              <span className="text-white font-medium">Company Details</span>
            </Link>
          )}

          <MdKeyboardArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-white transition duration-300" />
        </li>
      </ul>
    </div>
  );
};

export default CustomerSideBar;
