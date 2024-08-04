import React, { useEffect, useState } from 'react';

const OrderDashboard = () => {
    const [data, setData] = useState({
        pendingOrders: 0,
        completedOrders: 0,
        quotesPending: 0,
        quotesAccepted: 0
    });

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch('https://api.example.com/dashboard-data')
            .then(response => response.json())
            .then(data => {
                setData({
                    pendingOrders: data.pendingOrders,
                    completedOrders: data.completedOrders,
                    quotesPending: data.quotesPending,
                    quotesAccepted: data.quotesAccepted
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen w-full">
            <h1 className="text-3xl font-light mb-12 text-center text-black">Order Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-light mb-1 text-black">Pending Orders</h2>
                    <p className="text-gray-700 text-xl">{data.pendingOrders}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-light mb-1 text-black">Completed Orders</h2>
                    <p className="text-gray-700 text-xl">{data.completedOrders}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-light mb-1 text-black">Quotes Pending</h2>
                    <p className="text-gray-700 text-xl">{data.quotesPending}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-light mb-1 text-black">Quotes Accepted</h2>
                    <p className="text-gray-700 text-xl">{data.quotesAccepted}</p>
                </div>
            </div>
        </div>
    );
}

export default OrderDashboard;
