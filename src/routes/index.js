import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../component/Navbar/Main";
import Footer from "../component/Footer/Main";
import Home from "../component/Home/Main";
import Login from "../component/Auth/Login";
import Signup from "../component/Auth/Signup";
import SaveAddressForm from "../component/Auth/SaveAddressForm";
import { SavedAddress } from "../component/SavedAddress";
import { SellerDashboard } from "../component/SellerDashboard";
import BuyerDashboard from "../component/BuyerDashboard";
import { AdminDashBaord } from "../component/AdminDashBaord";
import { AddProductForm } from "../component/AddProductForm";
import Products from "../component/Products";
import Categeories from "../component/Pages/Categeories";
import ExploreCategories from "../component/Home/ExploreCategories";
import PlatformFeatures from "../component/Home/PlatformFeatures";
import SustainabilityGoals from "../component/Home/SustainabilityGoals";
import BlogSection from "../component/Home/BlogSection";
import PartnerSection from "../component/Home/PartnerSection";
import FAQSection from "../component/Home/FAQSection";
import SellerBuyerTabs from "../component/Home/SellerBuyerTabs";
import B2BSection from "../component/Home/B2BSection";
import { useSelector } from "react-redux";
import AddRequirements from "../component/Pages/AddRequirements";
import BuyerRequirementsList from "../component/Pages/BuyerRequirementsList";
import VerifyEmail from "../component/Auth/VerifyEmail";
import VerficationSuccessEmail from "../component/Auth/VerficationSuccessEmail";
import ProductDetail from "../component/Auth/ProductDetail";
import Blog from "../component/Auth/Blogs";
import BlogDetail from "../component/Auth/BlogDetail";
import Contact from "../component/Auth/Contact";
import CompanyDetail from "../component/CompanyDetail";
import { ToastContainer } from "react-bootstrap";
import SellerRequirements from "../component/Pages/SellerRequirements";
import RequirementQuotation from "../component/Pages/RequirementQuotation";
import RequirementOrders from "../component/Pages/RequirementOrders";
import AdminOrders from "../component/Pages/AdminOrders";
import SellerList from "../component/Pages/SellerList";
import BuyerList from "../component/Pages/BuyerList";
import SellerOrders from "../component/Pages/SellerOrders";
import SellerProducts from "../component/Pages/SellerProducts";
import CustomerProducts from "../component/Pages/CustomerProducts";
import AdminQuotation from "../component/Pages/AdminQuotation";
import BuyerOrders from "../component/Pages/BuyerOrders";
import TermsOfUse from "../component/Home/TermsOfUse";
import PrivacyPolicy from "../component/Home/PrivacyPolicy";
import ForgotPassword from "../component/Auth/ForgotPassword";
import OrderDashboard from "../component/Pages/OrdersDashboard";
import AdminRequirements from "../component/Pages/AdminRequirements";
import UndeliveredShipment from "../component/Home/UndeliveredShipment";
import ReturnShipments from "../component/Home/ReturnShipments";
import ProductListingPolicy from "../component/Home/ProductListingPolicy";
import InfringementPolicy from "../component/Home/InfringementPolicy";
import PrivateRoute from "./privateRoute";
import UserDashbaord from "../component/Pages/UserDashbaord";

const Routing = () => {
  const user = useSelector((state) => state);
  const isAuthenticated = user?.token && user?.isVerifiedEmail

  const [showNavbar, setShowNavbar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const adminPaths = [
      "/admin-dashboard",
      "/add-product",
      "/admin-dashboard/add-category",
      "/admin-dashboard/see-orders",
    ];

    const customerPaths = [
      "/customer",
    ];

    if (adminPaths.some((path) => location.pathname.startsWith(path)) ||
      customerPaths.some((path) => location.pathname.startsWith(path))) {
      setShowNavbar(false);
      setShowFooter(false);
    } else {
      setShowNavbar(true);
      setShowFooter(true);
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {showNavbar && <Navbar />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="productdetail" element={<ProductDetail />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="blogdetail" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="verified" element={<VerficationSuccessEmail />} />
        <Route path="termsofuse" element={<TermsOfUse />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="undeliveredshipment" element={<UndeliveredShipment />} />
        <Route path="returnshipments" element={<ReturnShipments />} />
        <Route path="productlistingpolicy" element={<ProductListingPolicy />} />
        <Route path="infringementpolicy" element={<InfringementPolicy />} />

        <Route path="forgot-password" element={<ForgotPassword />} />

        {/* BUYER SELLER */}
        <Route
          path="/customer/*"
          element={
            user?.userType === "buyer" ? (
              <BuyerDashboard />
            ) : (
              <SellerDashboard />
            )
          }
        >
          <Route path="add-new-address" element={<PrivateRoute element={SaveAddressForm} isAuthenticated={isAuthenticated} />} />
          <Route path="savedaddress" element={<PrivateRoute element={SavedAddress} isAuthenticated={isAuthenticated} />} />
          <Route path="requirements" element={<PrivateRoute element={BuyerRequirementsList} isAuthenticated={isAuthenticated} />} />
          <Route path="new-requirements" element={<PrivateRoute element={SellerRequirements} isAuthenticated={isAuthenticated} />} />
          <Route path="requirement-quotations" element={<PrivateRoute element={RequirementQuotation} isAuthenticated={isAuthenticated} />} />
          <Route path="add-requirement" element={<PrivateRoute element={AddRequirements} isAuthenticated={isAuthenticated} />} />
          <Route path="company-detail" element={<PrivateRoute element={CompanyDetail} isAuthenticated={isAuthenticated} />} />
          <Route path="requirement-orders" element={<PrivateRoute element={RequirementOrders} isAuthenticated={isAuthenticated} />} />
          <Route path="seller-orders" element={<PrivateRoute element={SellerOrders} isAuthenticated={isAuthenticated} />} />
          <Route path="seller-products" element={<PrivateRoute element={SellerProducts} isAuthenticated={isAuthenticated} />} />
          <Route path="orders" element={<PrivateRoute element={BuyerOrders} isAuthenticated={isAuthenticated} />} />
          <Route path="customer-products" element={<PrivateRoute element={CustomerProducts} isAuthenticated={isAuthenticated} />} />
          <Route path="my-dashboard" element={<PrivateRoute element={UserDashbaord} isAuthenticated={isAuthenticated} />} />
        </Route>

        {/* Admin dashboard  */}
        <Route path="/admin-dashboard/*" element={<AdminDashBaord />}>
          <Route path="add-product" element={<AddProductForm />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categeories />} />
          <Route path="explorecategories" element={<ExploreCategories />} />
          <Route path="platformfeatures" element={<PlatformFeatures />} />
          <Route path="sustainabilitygoals" element={<SustainabilityGoals />} />
          <Route path="blogsection" element={<BlogSection />} />
          <Route path="partnersection" element={<PartnerSection />} />
          <Route path="faqsection" element={<FAQSection />} />
          <Route path="sellerbuyertabs" element={<SellerBuyerTabs />} />
          <Route path="B2BSection" element={<B2BSection />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="sellers" element={<SellerList />} />
          <Route path="buyers" element={<BuyerList />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="quotation" element={<AdminQuotation />} />
          <Route path="order-dashboard" element={<OrderDashboard />} />
          <Route path="requirements" element={<AdminRequirements />} />
        </Route>
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

export default Routing;
