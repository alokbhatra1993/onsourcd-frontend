import React, { useEffect, useState } from 'react';
import { allOrdersApi } from '../../services/api';

const OrdersTable = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            const response = await allOrdersApi();
            const data = await response.json();
            console.log({ data });
            setOrders(data);
        } catch (error) {
            console.error('Failed to load orders:', error);
        }
    };

    return (
        <div className="mx-auto my-10 w-full max-w-6xl">
            <div className="overflow-x-auto max-h-96 overflow-y-scroll shadow-lg rounded-lg">
                <table className="min-w-full bg-white rounded-lg overflow-hidden border border-gray-300">
                    <thead className="bg-yellow-500">
                        <tr>
                            {[
                                'Order ID',
                                'Requirement ID',
                                'Estimated Price',
                                'Seller',
                                'Buyer',
                                'Product ID',
                                'Quotation ID',
                                'Expected Date',
                                'Status',
                                'Expected Start Date',
                                'Expected End Date'
                            ].map((header) => (
                                <th key={header} className="py-3 px-5 text-left text-white font-semibold border border-gray-300">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id} className="hover:bg-gray-200 transition duration-300">
                                    <td className="py-3 px-5 border border-gray-300 text-black">{order?._id}</td>
                                    <td className="py-3 px-5 border border-gray-300 text-black">{order?.requirementId}</td>
                                    <td className="py-3 px-5 border border-gray-300 text-black">{order?.estimatedPrice}</td>
                                    <td className="py-3 px-5 border border-gray-300 text-black">{order?.sellerId?.email}</td>
                                    <td className="py-3 px-5 border border-gray-300 text-black">{order.buyerId?.email}</td>
                                    <td className="py-3 px-5 border border-gray-300 text-black">
                                        <img src={order.productId?.image} alt="Product" className="h-10 w-10 rounded-full object-cover" />
                                    </td>
                                    <td className="py-3 px-5 border border-gray-300 text-black">{order.quotationId}</td>
                                    <td className="py-3 px-5 border border-gray-300 text-black">{order.expectedDate}</td>
                                    <td className="py-3 px-5 border border-gray-300 text-black">
                                        <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-5 border border-gray-300 text-black">{order.expectedStartDate}</td>
                                    <td className="py-3 px-5 border border-gray-300 text-black">{order.expectedEndDate}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="11" className="py-3 px-5 text-center text-gray-500 border border-gray-300">No orders found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersTable;
