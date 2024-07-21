import React, { useEffect, useState } from 'react';
import { allOrdersApi } from '../../services/api';

const OrdersTable = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        // Assume loadOrders function sets the state correctly with fetched data
        const response = await allOrdersApi() // Adjust the API endpoint accordingly
        const data = await response.json();
        console.log({ data });
        setOrders(data);
    };

    console.log({ orders });

    return (
        <div className=" mx-auto my-10 w-full">
            {/* <div className="mb-4 flex space-x-4">
                <input
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search order"
                />
                <div className="flex space-x-2 items-center">
                    <DatePicker
                        // selected={startDate}
                        // onChange={(date) => setStartDate(date)}
                        // selectsStart
                        // startDate={startDate}
                        // endDate={endDate}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholderText="Start date"
                    />
                    <DatePicker
                        // selected={endDate}
                        // onChange={(date) => setEndDate(date)}
                        // selectsEnd
                        // startDate={startDate}
                        // endDate={endDate}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholderText="End date"
                    />
                </div>
            </div> */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Order ID</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Requirement ID</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Estimated Price</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Seller </th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Buyer </th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Product ID</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Quotation ID</th>
                            {/* <th className="py-2 px-4 bg-gray-200 text-left text-black">Transport Availability</th> */}
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Expected Date</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Status</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Expected Start Date</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Expected End Date</th>
                            {/* <th className="py-2 px-4 bg-gray-200 text-left text-black">Frequency</th> */}
                            {/* <th className="py-2 px-4 bg-gray-200 text-left text-black">Created At</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Updated At</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length > 0 ?
                                (
                                    <>
                                        {orders.map(order => (
                                            <tr key={order._id}>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{order?._id}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{order?.requirementId}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{order?.estimatedPrice}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{
                                                    order?.sellerId?.email
                                                }</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{order.buyerId?.email}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">
                                                    <img src={order.productId?.image} />
                                                    
                                                    </td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{order.quotationId}</td>
                                                {/* <td className="py-2 px-4 border-b border-gray-200 text-black">{order.transportAvailability}</td> */}
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{order.expectedDate}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{order.status}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{order.expectedStartDate}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{order.expectedEndDate}</td>
                                                {/* <td className="py-2 px-4 border-b border-gray-200 text-black">{order.frequency}</td> */}
                                                {/* <td className="py-2 px-4 border-b border-gray-200 text-black">{order.createdAt}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{order.updatedAt}</td> */}
                                            </tr>
                                        ))}
                                    </>
                                ) : null
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersTable;
