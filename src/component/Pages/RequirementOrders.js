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
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Requirement Orders</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-black">ID</th>
                        <th className="py-2 px-4 border-b text-black">Estimated Price</th>
                        {/* <th className="py-2 px-4 border-b text-black">Seller ID</th> */}
                        {/* <th className="py-2 px-4 border-b text-black">Buyer ID</th> */}
                        <th className="py-2 px-4 border-b text-black">Product ID</th>
                        {/* <th className="py-2 px-4 border-b text-black">Quotation ID</th> */}
                        <th className="py-2 px-4 border-b text-black">Transport Availability</th>
                        <th className="py-2 px-4 border-b text-black">Expected Date</th>
                        <th className="py-2 px-4 border-b text-black">Status</th>
                        {/* <th className="py-2 px-4 border-b text-black">Expected Start Date</th> */}
                        {/* <th className="py-2 px-4 border-b text-black">Expected End Date</th> */}
                        {/* <th className="py-2 px-4 border-b text-black">Frequency</th> */}
                        {/* <th className="py-2 px-4 border-b text-black">Created At</th> */}
                        {/* <th className="py-2 px-4 border-b text-black">Updated At</th> */}
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td className="py-2 px-4 border-b text-black">{order._id}</td>
                            <td className="py-2 px-4 border-b text-black">{order.estimatedPrice}</td>
                            {/* <td className="py-2 px-4 border-b text-black">{order.sellerId}</td> */}
                            {/* <td className="py-2 px-4 border-b text-black">{order.buyerId}</td> */}
                            <td className="py-2 px-4 border-b text-black">{order.productId}</td>
                            {/* <td className="py-2 px-4 border-b text-black">{order.quotationId}</td> */}
                            <td className="py-2 px-4 border-b text-black">{order.transportAvailability ? 'Available' : 'Not Available'}</td>
                            <td className="py-2 px-4 border-b text-black">{new Date(order.expectedDate).toLocaleDateString()}</td>
                            <td className="py-2 px-4 border-b text-black">{order.status}</td>
                            {/* <td className="py-2 px-4 border-b text-black">{new Date(order.expectedStartDate).toLocaleDateString()}</td> */}
                            {/* <td className="py-2 px-4 border-b text-black">{new Date(order.expectedEndDate).toLocaleDateString()}</td> */}
                            {/* <td className="py-2 px-4 border-b text-black">{order.frequency}</td> */}
                            {/* <td className="py-2 px-4 border-b text-black">{new Date(order.createdAt).toLocaleDateString()}</td> */}
                            {/* <td className="py-2 px-4 border-b text-black">{new Date(order.updatedAt).toLocaleDateString()}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RequirementOrders;
