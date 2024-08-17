import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setUserData } from "../../redux/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false); // New state variable for dropdown
  const location = useLocation();
  const path = location.pathname;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  // Close mobile menu and dropdown when path changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false); // Close dropdown when path changes
  }, [path]);

  // Helper function to determine if the link is active
  const isActiveLink = (linkPath) => path === linkPath;

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#372800] text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <Link to="/">
              <img src="assets/img/logo/logo.png" alt="logo" className="h-8" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
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
                  className="bg-[#f6b60d] px-4 py-2 rounded-md text-black hover:bg-gray-200"
                >
                  Register Now
                </Link>
              </>
            ) : (
              <div className="relative">
                <div
                  className="profile-icon cursor-pointer text-lg"
                  onClick={toggleDropdown} // Attach click handler to toggle dropdown
                >
                  <i className="fas fa-user"></i>
                </div>
                {dropdownOpen && ( // Conditionally render the dropdown
                  <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50">
                    <li>
                      <Link
                        to="customer/company-detail"
                        className="block px-4 py-2 hover:bg-gray-100 text-black"
                      >
                        Company Profile
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
                          navigate("/login");
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
          <div className="lg:hidden flex items-center">
            <button
              className="text-2xl focus:outline-none text-white"
              onClick={toggleMobileMenu}
              style={{ backgroundColor: "#f6b60d", padding: "8px", borderRadius: "4px" }}
            >
              {mobileMenuOpen ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </div>
      <nav className="bg-[#f6b60d] text-black shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="hidden lg:flex items-center space-x-12">
              <nav className="flex space-x-12 items-center">
                <Link
                  to="/"
                  className={`hover:text-gray-800 ${isActiveLink("/") ? "text-white bg-[#372800] rounded-md px-3 py-2" : ""}`}
                >
                  Home
                </Link>
                <Link
                  to="/blogs"
                  className={`hover:text-gray-800 ${isActiveLink("/blogs") ? "text-white bg-[#372800] rounded-md px-3 py-2" : ""}`}
                >
                  Blogs
                </Link>
                <Link
                  to="/productdetail"
                  className={`hover:text-gray-800 ${isActiveLink("/productdetail") ? "text-white bg-[#372800] rounded-md px-3 py-2" : ""}`}
                >
                  Products
                </Link>
                <Link
                  to="/contact"
                  className={`hover:text-gray-800 ${isActiveLink("/contact") ? "text-white bg-[#372800] rounded-md px-3 py-2" : ""}`}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
            <div className="hidden lg:flex items-center relative flex-grow justify-end">
              <form
                className="flex items-center border border-gray-300 rounded-full px-2 py-1 bg-white shadow-md"
                style={{ width: "calc(70% - 100px)" }}
                onSubmit={handleSearchSubmit}
              >
                <input
                  type="text"
                  className="form-input outline-none px-4 py-2 w-full rounded-l-full"
                  placeholder="Search for Products"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="btn-search text-white bg-[#f6b60d] hover:bg-[#e5a63a] rounded-r-full px-4 py-2 transition duration-300 text-sm flex items-center justify-center"
                >
                  <i className="fas fa-search text-xl"></i>
                </button>
              </form>
              {searchQuery && (
                <div className="absolute right-0 mt-3 bg-white border border-gray-300 rounded-md shadow-lg px-4 py-2">
                  <p>Search results for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#f6b60d] text-black">
              <nav className="p-4 space-y-2">
                <Link
                  to="/"
                  className={`block hover:text-gray-800 ml-4 ${isActiveLink("/") ? "text-white bg-[#372800] rounded-md px-3 py-2" : ""}`}
                >
                  Home
                </Link>
                <Link
                  to="/blogs"
                  className={`block hover:text-gray-800 ${isActiveLink("/blogs") ? "text-white bg-[#372800] rounded-md px-3 py-2" : ""}`}
                >
                  Blogs
                </Link>
                <Link
                  to="/productdetail"
                  className={`block hover:text-gray-800 ${isActiveLink("/productdetail") ? "text-white bg-[#372800] rounded-md px-3 py-2" : ""}`}
                >
                  Products
                </Link>
                <Link
                  to="/contact"
                  className={`block hover:text-gray-800 ${isActiveLink("/contact") ? "text-white bg-[#372800] rounded-md px-3 py-2" : ""}`}
                >
                  Contact Us
                </Link>
                {!user?.token ? (
                  <>
                    <Link
                      to="/login"
                      className="block bg-[#372800] hover:bg-[#372800]/90 text-white px-4 py-2 rounded-md"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block bg-[#f6b60d] hover:bg-[#372800]/90 text-white px-4 py-2 rounded-md"
                    >
                      Register Now
                    </Link>
                  </>
                ) : (
                  <div className="relative">
                    <div
                      className="cursor-pointer text-2xl"
                      onClick={toggleDropdown} // Attach click handler to toggle dropdown
                    >
                      <i className="fas fa-user"></i>
                    </div>
                    {dropdownOpen && (
                      <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50">
                        <li>
                          <Link
                            to="customer/company-detail"
                            className="block px-4 py-2 hover:bg-gray-100 text-black"
                          >
                            Company Profile
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
                              navigate("/login");
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
