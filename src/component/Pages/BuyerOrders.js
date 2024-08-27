import React, { useEffect, useState } from 'react';
import { fetchOrdersByBuyer } from '../../services/api';
import { useSelector } from 'react-redux';

const BuyerOrders = () => {
    const user = useSelector((state) => state);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            const response = await fetchOrdersByBuyer(user?.token, user?._id);
            const data = await response.json();
            console.log({ data });
            setOrders(data);
        } catch (error) {
            throw error;
        }
    };

    console.log({ orders });

    return (
        <div className="p-6 bg-gray-100 min-h-screen w-100">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">My Orders</h2>
            </div>

            <div className="overflow-x-auto">
                <div className="max-h-[600px] overflow-y-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Index</th>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Quotation Id</th>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Product Name</th>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Product Image</th>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Expected Date</th>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Payment Progress</th>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {orders?.length > 0 ? (
                                orders.map((order, index) => (
                                    <tr key={order._id} className="hover:bg-gray-100 transition duration-300">
                                        <td className="py-3 px-6 border-b text-gray-800">{index + 1}</td>
                                        <td className="py-3 px-6 border-b text-blue-600 cursor-pointer underline" title={order?.quotationId}>{order?.quotationId?.slice(0, 3)}...</td>
                                        <td className="py-3 px-6 border-b text-gray-800">{order?.productId?.name}</td>
                                        <td className="py-3 px-6 border-b">
                                            <img src={order?.productId?.image} alt={order?.productId?.name} className="w-16 h-16 object-cover rounded-md" />
                                        </td>
                                        <td className="py-3 px-6 border-b text-gray-800">{order?.expectedDate?.slice(0, 10)}</td>
                                        <td className={`py-3 px-6 border-b font-bold ${order?.paymentProgress === 'in-transit' ? 'text-orange-600' : 'text-green-600'}`}>
                                            {order?.paymentProgress === 'in-transit' ? 'Pending' : 'Received'}
                                        </td>
                                        <td className={`py-3 px-6 border-b font-bold ${order?.status === 'cancelled' ? 'text-red-600' :
                                            order?.status === 'pending' ? 'text-orange-600' :
                                                order?.status === 'delivered' ? 'text-green-600' :
                                                    order?.status === 'dispatched' ? 'text-blue-600' : ''
                                            }`}>
                                            {order?.status}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="py-3 px-6 text-center text-gray-500">No orders found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BuyerOrders;
