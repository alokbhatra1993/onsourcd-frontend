import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ordersByRequirementId } from '../../services/api';
import { useSelector } from 'react-redux';

const RequirementOrders = () => {
    const location = useLocation();
    const user = useSelector((state) => state);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            const response = await ordersByRequirementId(location?.state?.reqId, user?.token);
            if (response.ok) {
                const data = await response.json();
                setOrders(data);
            }
        } catch (error) {
            console.error("Failed to fetch orders:", error);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Requirement Orders</h2>
            <div className="overflow-x-auto">
                <div className="overflow-y-auto max-h-96">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Order ID</th>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Estimated Price</th>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Product ID</th>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Transport Availability</th>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Expected Date</th>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {orders.map((order) => (
                                <tr key={order._id} className="hover:bg-gray-100 transition duration-300">
                                    <td className="py-3 px-6 border-b text-blue-600 cursor-pointer">{order._id}</td>
                                    <td className="py-3 px-6 border-b text-black">{order.estimatedPrice}</td>
                                    <td className="py-3 px-6 border-b text-black">{order.productId}</td>
                                    <td className="py-3 px-6 border-b text-black">{order.transportAvailability ? 'Available' : 'Not Available'}</td>
                                    <td className="py-3 px-6 border-b text-black">{new Date(order.expectedDate).toLocaleDateString()}</td>
                                    <td className="py-3 px-6 border-b text-black">{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RequirementOrders;
