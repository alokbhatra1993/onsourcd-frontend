import React from "react";
import "animate.css"; // Import animate.css styles
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="footer-bg footer-p"
      style={{ backgroundColor: "#f6b60d" }}
    >
      <div
        className="footer-top pt-5 pb-5"
        style={{ backgroundColor: "#372800" }}
      >
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-3 col-md-6 mb-4 animate__animated animate__fadeInUp">
              <div className="footer-widget">
                <div className="f-widget-title mb-4">
                  <Link to="/">
                    <img
                      src="assets/img/logo/logo.png"
                      alt="logo"
                      className="h-8"
                    />
                  </Link>
                  <h2 className="footer-heading mt-3 text-white animate__animated animate__fadeInUp">
                    Your Partner in Sourcing
                  </h2>
                  <p className="footer-text text-white animate__animated animate__fadeInUp">
                    We provide comprehensive B2B solutions for sourcing, supply
                    chain management, and more. Partner with us to streamline
                    your business operations.
                  </p>
                </div>
                <div className="footer-social mt-3 animate__animated animate__fadeInUp">
                  <a
                    href="https://www.facebook.com/share/8f1jXjywQbsSCpRL/?mibextid=qi2Omg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white mx-2"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://wa.me/9257646469"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white mx-2"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/onsourcd?utm_source=qr&igsh=MTJrbXhrcGd2NHluMA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white mx-2"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/onsourcd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white mx-2"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Column 2 */}
            <div className="col-lg-3 col-md-6 mb-4 animate__animated animate__fadeInUp">
              <div className="footer-widget">
                <div className="f-widget-title mb-4">
                  <h2 className="text-white animate__animated animate__fadeInUp">
                    Contact Us
                  </h2>
                </div>
                <div className="f-contact">
                  <ul className="list-unstyled">
                    <li className="mb-2 flex items-center animate__animated animate__fadeInUp">
                      <i
                        className="icon fal fa-phone text-white mr-2"
                        style={{ transform: "rotate(180deg)" }}
                      ></i>
                      <a href="tel:+919257646469" className="text-white">
                        +91-9257646469
                      </a>
                    </li>
                    <li className="mb-2 flex items-center animate__animated animate__fadeInUp">
                      <i
                        className="icon fal fa-phone text-white mr-2"
                        style={{ transform: "rotate(180deg)" }}
                      ></i>
                      <a href="tel:+918360656569" className="text-white">
                        +91-8360656569
                      </a>
                    </li>

                    <li className="mb-2 flex items-center animate__animated animate__fadeInUp">
                      <i className="icon fal fa-envelope text-white mr-2"></i>
                      <a
                        href="mailto:contact@onsourcd.com"
                        className="text-white animate__animated animate__fadeInUp"
                      >
                        contact@onsourcd.com
                      </a>
                    </li>
                    <li className="flex items-center animate__animated animate__fadeInUp">
                      <i className="icon fal fa-map-marker-check text-white mr-2"></i>
                      <span className="text-white">Jaipur, Rajasthan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Column 3 */}
            <div className="col-lg-3 col-md-6 mb-4 animate__animated animate__fadeInUp">
              <div className="footer-widget">
                <div className="f-widget-title mb-4">
                  <h2 className="text-white animate__animated animate__fadeInUp">
                    Policies
                  </h2>
                </div>
                <div className="footer-link">
                  <ul className="list-unstyled">
                    <li className="animate__animated animate__fadeInUp">
                      <a href="/privacypolicy" className="text-white">
                        Privacy Policy
                      </a>
                    </li>

                    <li className="animate__animated animate__fadeInUp">
                      <a href="/termsofuse" className="text-white">
                        Terms of Use
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Column 4 */}
            <div className="col-lg-3 col-md-6 mb-4 animate__animated animate__fadeInUp">
              <div className="footer-widget">
                <div className="f-widget-title mb-4">
                  <h2 className="text-white animate__animated animate__fadeInUp">
                    Quick Links
                  </h2>
                </div>
                <div className="footer-link">
                  <ul className="list-unstyled">
                    <li className="animate__animated animate__fadeInUp">
                      <a href="/about-us" className="text-white">
                        About Us
                      </a>
                    </li>
                    <li className="animate__animated animate__fadeInUp">
                      <a href="/blogs" className="text-white">
                        Blogs
                      </a>
                    </li>
                    <li className="animate__animated animate__fadeInUp">
                      <a href="/contact-us" className="text-white">
                        Products
                      </a>
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
                &copy; {new Date().getFullYear()} All rights reserved with
                Onjubilant Services India Pvt Ltd | All logos and Trademarks
                registered with their respective owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
