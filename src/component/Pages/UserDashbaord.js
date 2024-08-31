import React, { useEffect, useState } from "react";
import { fetchUserDashboard } from "../../services/api";
import { useSelector } from "react-redux";

const UserDashbaord = () => {
    const user = useSelector((state) => state);

    const [data, setData] = useState({
        pendingOrders: 0,
        completedOrders: 0,
        quotesPending: 0,
        quotesAccepted: 0
    });

    console.log({user});
    

    useEffect(() => {
        loadDashboard()
    }, [])

    const loadDashboard = async () => {
        try {
            const response = await fetchUserDashboard(user?.token, user?.userType);
            const results = await response.json();
            console.log({ results });

            setData({
                pendingOrders: results?.pendingorders,
                completedOrders: results?.completedOrders ,
                quotesPending: results?.quotationPending ,
                quotesAccepted: results?.quotationAccepted
            })

        } catch (error) {
            console.error("Error loading requirements:", error);
        }
    };

    return (
        <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen w-full">
            <h1 className="text-3xl font-light mb-12 text-center text-black">Order Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-light mb-1 text-black">Pending Orders</h2>
                    <p className="text-gray-700 text-xl">{data?.pendingOrders}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-light mb-1 text-black">Completed Orders</h2>
                    <p className="text-gray-700 text-xl">{data?.completedOrders}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-light mb-1 text-black">Quotes Pending</h2>
                    <p className="text-gray-700 text-xl">{data?.quotesPending}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-light mb-1 text-black">Quotes Accepted</h2>
                    <p className="text-gray-700 text-xl">{data?.quotesAccepted}</p>
                </div>
            </div>
        </div>
    )

}

export default UserDashbaord;
