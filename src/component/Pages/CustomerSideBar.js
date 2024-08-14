import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FaBox, FaClipboardList, FaTags, FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdMenu } from 'react-icons/md';

const CustomerSideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const user = useSelector((state) => state);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`flex flex-col h-screen py-6 shadow-lg transition-all ${collapsed ? 'w-20' : 'w-80'} bg-gray-900 text-white`}>
            <div className="flex justify-between items-center mb-8">
                <button onClick={toggleSidebar} className="text-white focus:outline-none p-2 w-10 text-center m-3">
                    <MdMenu className="text-xl" />
                </button>
                <div className="text-center text-2xl font-bold">
                    <Link to="/">
                        <img src="../assets/img/logo/logo.png" alt="logo" className={`h-10 mx-auto ${collapsed ? 'hidden' : 'block'}`} />
                    </Link>
                </div>
            </div>
            <ul className="flex-grow space-y-4">
                <li className={`relative group ${collapsed ? 'text-center' : ''}`}>
                    <Link
                        to={user?.userType === "buyer" ? "/customer/customer-products" : "/customer/seller-products"}
                        className={`flex items-center p-3 rounded-lg ${isActive('/customer/add-product') ? 'bg-yellow-900' : 'bg-gray-800'} hover:bg-yellow-700 transition duration-300`}
                    >
                        <FaBox className={`text-yellow-400 text-lg mr-3 ${collapsed ? 'mx-auto' : ''}`} />
                        {!collapsed && <span className="text-white font-medium">Products</span>}
                    </Link>
                    <MdKeyboardArrowDown className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-white transition duration-300 ${collapsed ? 'hidden' : ''}`} />
                </li>
                <li className={`relative group ${collapsed ? 'text-center' : ''}`}>
                    <Link
                        to={user?.userType === "buyer" || user?.userType === "manufacturer" ? "/customer/requirements" : "/customer/new-requirements"}
                        className={`flex items-center p-3 rounded-lg ${isActive('/customer/requirements') || isActive('/customer/new-requirements') ? 'bg-yellow-900' : 'bg-gray-800'} hover:bg-yellow-700 transition duration-300`}
                    >
                        <FaClipboardList className={`text-yellow-400 text-lg mr-3 ${collapsed ? 'mx-auto' : ''}`} />
                        {!collapsed && <span className="text-white font-medium">{user?.userType === "buyer" || user?.userType === "manufacturer" ? "My Requirements" : "New Requirements"}</span>}
                    </Link>
                    <MdKeyboardArrowDown className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-white transition duration-300 ${collapsed ? 'hidden' : ''}`} />
                </li>
                <li className={`relative group ${collapsed ? 'text-center' : ''}`}>
                    <Link
                        to={user?.userType === "seller" ? "/customer/seller-orders" : "/customer/orders"}
                        className={`flex items-center p-3 rounded-lg ${isActive('/customer/seller-orders') || isActive('/customer/orders') ? 'bg-yellow-900' : 'bg-gray-800'} hover:bg-yellow-700 transition duration-300`}
                    >
                        <FaShoppingCart className={`text-yellow-400 text-lg mr-3 ${collapsed ? 'mx-auto' : ''}`} />
                        {!collapsed && <span className="text-white font-medium">Orders</span>}
                    </Link>
                    <MdKeyboardArrowDown className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-white transition duration-300 ${collapsed ? 'hidden' : ''}`} />
                </li>
                <li className={`relative group ${collapsed ? 'text-center' : ''}`}>
                    {user?.userType === "buyer" && (
                        <Link
                            to="/customer/company-detail"
                            className={`flex items-center p-3 rounded-lg ${isActive('/customer/company-detail') ? 'bg-yellow-900' : 'bg-gray-800'} hover:bg-yellow-700 transition duration-300`}
                        >
                            <FaTags className={`text-yellow-400 text-lg mr-3 ${collapsed ? 'mx-auto' : ''}`} />
                            {!collapsed && <span className="text-white font-medium">Company Details</span>}
                        </Link>
                    )}
                    <MdKeyboardArrowDown className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-white transition duration-300 ${collapsed ? 'hidden' : ''}`} />
                </li>
            </ul>
        </div>
    );
};

export default CustomerSideBar;
