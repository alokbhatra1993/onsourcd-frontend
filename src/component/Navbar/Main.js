import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state);
  console.log(user);

  const [mobile, setMobile] = useState(false);
  const [dropdown, setDropdown] = useState({});
  const [profileDropdown, setProfileDropdown] = useState(false); // State for profile dropdown
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    window.scroll(0, 0);
  }, [path]);

  const toggleDropdown = (index) => {
    setDropdown((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement the search functionality here, e.g., redirect to a search results page
    console.log(`Searching for: ${searchQuery}`);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdown(!profileDropdown);
  };

  return (
    <header className="header-area header-three">
      <div className="header-top second-header d-none d-md-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 d-none d-lg-block">
              <div className="header-cta">
                <div className="header-social">
                  <div className="logo">
                    <Link to="/">
                      <img src="assets/img/logo/logo.png" alt="logo" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-none d-lg-block text-right">
              <div className="button_login">
                {!user?.auth?.token ? (
                  <>
                    <Link to="/login" className="btn_login">
                      Login
                    </Link>
                    <Link to="/signup" className="btn_login">
                      Register Now
                    </Link>
                  </>
                ) : null}

                {user?.auth?.token ? (
                  <div className="profile-icon" onClick={toggleProfileDropdown}>
                    <i className="fas fa-user"></i>
                    {profileDropdown && (
                      <ul className="profile-dropdown">
                        <li>
                          <Link to="/settings">Settings</Link>
                        </li>
                        <li>
                          <Link to="/savedaddress">Saved Address</Link>
                        </li>
                        <li>
                          <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                          <Link to="/logout">Logout</Link>
                        </li>
                      </ul>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="header-sticky" className="menu-area">
        <div className="container">
          <div className="second-menu">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4">
                <div className="main-menu text-center">
                  <nav id="mobile-menu">
                    <ul className="text-left">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/">Blogs</Link>
                      </li>
                      <li>
                        <Link to="/room">Products</Link>
                      </li>
                      <li>
                        <Link to="/service">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="search-bar">
                  <form className="search-form" onSubmit={handleSearchSubmit}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for Products"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <button type="submit" className="search-btn">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile-menu mean-container">
                  <div className="mean-bar">
                    <span
                      className={`meanmenu-reveal ${mobile ? "meanclose" : ""}`}
                      onClick={() => setMobile(!mobile)}
                    >
                      {mobile ? (
                        "X"
                      ) : (
                        <span>
                          <span>
                            <span></span>
                          </span>
                        </span>
                      )}
                    </span>
                    <nav className="mean-nav">
                      {mobile && (
                        <ul style={{ display: mobile ? "block" : "none" }}>
                          {[
                            "Thailand",
                            "Bali",
                            "Ladakh",
                            "Vietnam",
                            "SriLanka",
                            "Maldives",
                            "Dubai",
                          ].map((item, index) => (
                            <li key={index} className="has-sub">
                              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                              <span
                                className={`mean-expand ${
                                  dropdown[index] ? "mean-clicked" : ""
                                }`}
                                onClick={() => toggleDropdown(index)}
                              >
                                {dropdown[index] ? "-" : "+"}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
