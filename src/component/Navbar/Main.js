import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setUserData } from "../../redux/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state);

  const [mobile, setMobile] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const path = location.pathname;

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
  };

  // Toggle profile dropdown visibility
  const toggleProfileDropdown = () => {
    setProfileDropdown(!profileDropdown);
  };

  return (
    <header className="header-area">
      <div className="header-top bg-blue-900 text-white py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src="assets/img/logo/logo.png" alt="logo" className="h-10" />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {!user?.token ? (
              <>
                <Link
                  to="/login"
                  className="bg-white px-4 py-2 rounded-md text-black hover:bg-gray-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-white px-4 py-2 rounded-md text-black hover:bg-gray-200"
                >
                  Register Now
                </Link>
              </>
            ) : (
              <div className="relative">
                <div
                  className="profile-icon cursor-pointer"
                  onClick={toggleProfileDropdown}
                >
                  <i className="fas fa-user"></i>
                </div>
                {profileDropdown && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50">
                    <li>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 hover:bg-gray-100 text-black"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/savedaddress"
                        className="block px-4 py-2 hover:bg-gray-100 text-black"
                      >
                        Saved Address
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-100 text-black"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
                        onClick={() => {
                          dispatch(setUserData({ token: null }));
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <nav className="menu-area bg-white shadow-lg text-black">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center lg:hidden">
              <button
                className="text-2xl focus:outline-none text-black"
                onClick={() => setMobile(!mobile)}
              >
                {mobile ? "X" : <i className="fas fa-bars"></i>}
              </button>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <nav className="flex space-x-4">
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
                <Link to="/" className="hover:text-gray-300">
                  Blogs
                </Link>
                <Link to="/room" className="hover:text-gray-300">
                  Products
                </Link>
                <Link to="/service" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </nav>
            </div>
            <div className="hidden lg:flex items-center space-x-4 relative">
              <form
                className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white"
                onSubmit={handleSearchSubmit}
              >
                <input
                  type="text"
                  className="form-input outline-none px-2 py-1 w-full"
                  placeholder="Search for Products"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="text-white bg-blue-500 hover:bg-blue-700 rounded-full px-4 py-2 ml-2"
                >
                  <i className="fas fa-search"></i>
                </button>
              </form>
              {searchQuery && (
                <div className="absolute right-0 mt-3 bg-white border border-gray-300 rounded-md shadow-lg px-4 py-2">
                  {/* Display search results here */}
                  <p>Search results for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
          {mobile && (
            <div className="lg:hidden bg-white text-black">
              <nav className="p-4 space-y-2">
                <Link to="/" className="block hover:text-gray-300">
                  Home
                </Link>
                <Link to="/" className="block hover:text-gray-300">
                  Blogs
                </Link>
                <Link to="/room" className="block hover:text-gray-300">
                  Products
                </Link>
                <Link to="/service" className="block hover:text-gray-300">
                  Contact Us
                </Link>
                {!user?.token ? (
                  <>
                    <Link
                      to="/login"
                      className="block bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                    >
                      Register Now
                    </Link>
                  </>
                ) : (
                  <div className="relative">
                    <div
                      className="cursor-pointer"
                      onClick={toggleProfileDropdown}
                    >
                      <i className="fas fa-user text-2xl"></i>
                    </div>
                    {profileDropdown && (
                      <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50">
                        <li>
                          <Link
                            to="/settings"
                            className="block px-4 py-2 hover:bg-gray-100 text-black"
                          >
                            Settings
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/savedaddress"
                            className="block px-4 py-2 hover:bg-gray-100 text-black"
                          >
                            Saved Address
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/profile"
                            className="block px-4 py-2 hover:bg-gray-100 text-black"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
                            onClick={() => {
                              dispatch(setUserData({ token: null }));
                            }}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                )}
              </nav>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
