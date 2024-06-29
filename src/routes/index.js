import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar/Main';
import Footer from '../component/Footer/Main';
import Home from '../component/Home/Main';
import Login from '../component/Auth/Login';
import Signup from '../component/Auth/Signup';
import SaveAddressForm from '../component/Auth/SaveAddressForm';
import { SavedAddress } from '../component/SavedAddress';
import { SellerDashboard } from '../component/SellerDashboard';
import BuyerDashboard from '../component/BuyerDashboard';
import { AdminDashBaord } from '../component/AdminDashBaord';
import { AddProductForm } from '../component/AddProductForm';
import Products from '../component/Products';
import Categeories from '../component/Pages/Categeories';
import ExploreCategories from '../component/Home/ExploreCategories';
import PlatformFeatures from '../component/Home/PlatformFeatures';
import SustainabilityGoals from '../component/Home/SustainabilityGoals';
import BlogSection from '../component/Home/BlogSection';
import PartnerSection from '../component/Home/PartnerSection';
import FAQSection from '../component/Home/FAQSection';
import SellerBuyerTabs from '../component/Home/SellerBuyerTabs';
import B2BSection from '../component/Home/B2BSection';



const Routing = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [showFooter, setShowFooter] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const adminPaths = [
            '/admin-dashboard',
            '/add-product',
            '/admin-dashboard/add-category',
            '/admin-dashboard/see-orders'
        ];
        if (adminPaths.some(path => location.pathname.startsWith(path))) {
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/add-new-address" element={<SaveAddressForm />} />
                <Route path="/savedaddress" element={<SavedAddress />} />
                <Route path="/seller-dashboard" element={<SellerDashboard />} />
                <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
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
                   
                    {/* <Route path="add-category" element={<AddCategory />} /> */}
                    {/* <Route path="see-orders" element={<SeeOrders />} /> */}
                </Route>
            </Routes>
            {showFooter && <Footer />}
        </>
    );
}

export default Routing;
