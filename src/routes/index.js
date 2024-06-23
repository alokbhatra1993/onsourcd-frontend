import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar/Main';
import Footer from '../component/Footer/Main';
import Home from '../component/Home/Main';

import Login from '../component/Auth/Login';  // Import the Login component
import Signup from '../component/Auth/Signup';  // Import the Signup component
import SaveAddressForm from '../component/Auth/SaveAddressForm';
import { SavedAddress } from '../component/SavedAddress';

const Routing = () => {
    const [homepage, sethomepage] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/home-03" || location.pathname === "/home-04") {
            sethomepage(false);
        } else {
            sethomepage(true);
        }
    }, [location]);

    const [footerpage, setfooterpage] = useState(false);
    useEffect(() => {
        if (location.pathname === "/home-03") {
            setfooterpage(false);
        } else {
            setfooterpage(true);
        }
    }, [location]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {homepage && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                         <Route path="/login" element={<Login />} />  {/* Login Route */}
                <Route path="/signup" element={<Signup />} />  {/* Signup Route */}
                <Route path="/add-new-address" element={<SaveAddressForm />} />  {/* Signup Route */}
                <Route path="/savedaddress" element={<SavedAddress />} />  {/* Signup Route */}

            </Routes>
            {footerpage && <Footer />}
        </>
    );
}

export default Routing;
