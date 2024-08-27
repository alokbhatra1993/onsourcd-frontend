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
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Requirement Orders</h2>
        <div className="overflow-x-auto">
          <div className="overflow-y-auto max-h-96">
            <table className="min-w-full bg-white shadow-lg rounded-lg border border-gray-300">
              <thead className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-gray-800">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold border-b border-gray-300">Order ID</th>
                  <th className="py-4 px-6 text-left font-semibold border-b border-gray-300">Estimated Price</th>
                  <th className="py-4 px-6 text-left font-semibold border-b border-gray-300">Product ID</th>
                  <th className="py-4 px-6 text-left font-semibold border-b border-gray-300">Transport Availability</th>
                  <th className="py-4 px-6 text-left font-semibold border-b border-gray-300">Expected Date</th>
                  <th className="py-4 px-6 text-left font-semibold border-b border-gray-300">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order._id} className="hover:bg-yellow-50 transition duration-300">
                    <td className="py-4 px-6 border-b text-blue-600 cursor-pointer" title={`Order ID: ${order._id}`}>{order._id}</td>
                    <td className="py-4 px-6 border-b text-gray-800">{order.estimatedPrice}</td>
                    <td className="py-4 px-6 border-b text-gray-800">{order.productId}</td>
                    <td className="py-4 px-6 border-b text-gray-800">{order.transportAvailability ? 'Available' : 'Not Available'}</td>
                    <td className="py-4 px-6 border-b text-gray-800">{new Date(order.expectedDate).toLocaleDateString()}</td>
                    <td className="py-4 px-6 border-b text-gray-800">{order.status}</td>
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
