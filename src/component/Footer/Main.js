import React from "react";
import { Link } from "react-router-dom";
import "animate.css"; // Import animate.css styles

const Footer = () => {
  return (
    <footer className="footer-bg footer-p" style={{ backgroundColor: "#f6b60d" }}>
      <div className="footer-top pt-5 pb-5" style={{ backgroundColor: "#372800" }}>
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-3 col-md-6 mb-4 animate__animated animate__fadeInUp">
              <div className="footer-widget">
                <div className="f-widget-title mb-4">
                  <img src="assets/img/logo/logo.png" alt="logo" className="animate__animated animate__fadeInUp" />
                  <h2 className="footer-heading mt-3 text-white animate__animated animate__fadeInUp">
                    Your Trusted B2B Partner
                  </h2>
                  <p className="footer-text text-white animate__animated animate__fadeInUp">
                    We provide comprehensive B2B solutions for sourcing, supply chain management, and more. Partner with us to streamline your business operations.
                  </p>
                </div>
                <div className="footer-social mt-3 animate__animated animate__fadeInUp">
                  <Link to="#" className="text-white mx-2">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#" className="text-white mx-2">
                    <i className="fab fa-whatsapp"></i>
                  </Link>
                  <Link to="#" className="text-white mx-2">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="#" className="text-white mx-2">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* Column 2 */}
            <div className="col-lg-3 col-md-6 mb-4 animate__animated animate__fadeInUp">
              <div className="footer-widget">
                <div className="f-widget-title mb-4">
                  <h2 className="text-white animate__animated animate__fadeInUp">Contact Us</h2>
                </div>
                <div className="f-contact">
                  <ul className="list-unstyled">
                    <li className="mb-2 flex items-center animate__animated animate__fadeInUp">
                      <i className="icon fal fa-phone text-white mr-2"></i>
                      <span className="text-white">+91-9257-6464-69</span>
                    </li>
                    <li className="mb-2 flex items-center animate__animated animate__fadeInUp">
                      <i className="icon fal fa-phone text-white mr-2"></i>
                      <span className="text-white">+91-9257-6464-69</span>
                    </li>
                    <li className="mb-2 flex items-center animate__animated animate__fadeInUp">
                      <i className="icon fal fa-envelope text-white mr-2"></i>
                      <Link to="#" className="text-white animate__animated animate__fadeInUp">contact@onsourcd.com</Link>
                    </li>
                    <li className="flex items-center animate__animated animate__fadeInUp">
                      <i className="icon fal fa-map-marker-check text-white mr-2"></i>
                      <span className="text-white">1Pratap nagar, Jaipur, Rajasthan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Column 3 */}
            <div className="col-lg-3 col-md-6 mb-4 animate__animated animate__fadeInUp">
              <div className="footer-widget">
                <div className="f-widget-title mb-4">
                  <h2 className="text-white animate__animated animate__fadeInUp">Product Categories</h2>
                </div>
                <div className="footer-link">
                  <ul className="list-unstyled">
                    <li className="animate__animated animate__fadeInUp">
                      <Link to="/services/sourcing" className="text-white">Briquettes</Link>
                    </li>
                    <li className="animate__animated animate__fadeInUp">
                      <Link to="/services/supply-chain" className="text-white">Pellets</Link>
                    </li>
                    <li className="animate__animated animate__fadeInUp">
                      <Link to="/services/consulting" className="text-white">Loose</Link>
                    </li>
                    <li className="animate__animated animate__fadeInUp">
                      <Link to="/services/custom-solutions" className="text-white">Custom Solutions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Column 4 */}
            <div className="col-lg-3 col-md-6 mb-4 animate__animated animate__fadeInUp">
              <div className="footer-widget">
                <div className="f-widget-title mb-4">
                  <h2 className="text-white animate__animated animate__fadeInUp">Quick Links</h2>
                </div>
                <div className="footer-link">
                  <ul className="list-unstyled">
                    <li className="animate__animated animate__fadeInUp">
                      <Link to="/about-us" className="text-white">About Us</Link>
                    </li>
                    <li className="animate__animated animate__fadeInUp">
                      <Link to="/careers" className="text-white">Careers</Link>
                    </li>
                    <li className="animate__animated animate__fadeInUp">
                      <Link to="/news" className="text-white">News</Link>
                    </li>
                    <li className="animate__animated animate__fadeInUp">
                      <Link to="/contact-us" className="text-white">Contact Us</Link>
                    </li>
                    <li className="animate__animated animate__fadeInUp">
                      <Link to="/privacy-policy" className="text-white">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap" style={{ backgroundColor: "#f6b60d" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="mb-0 text-black animate__animated animate__fadeInUp">
                &copy; {new Date().getFullYear()} B2B Platform. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
