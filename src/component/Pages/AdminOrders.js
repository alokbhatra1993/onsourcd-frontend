import React, { useEffect, useState } from 'react';
import { allOrdersApi, updateOrderPayment, updateOrderStatus } from '../../services/api';
import { useSelector } from 'react-redux';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const OrdersTable = () => {
    const user = useSelector((state) => state);

    const [orders, setOrders] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [actionType, setActionType] = useState('');

    const [selectetStatus, setSelectedStatus] = useState();


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

    const handlePaymentProgress = async (orderId) => {
        try {
            const response = await updateOrderPayment(user?.token, orderId);
            console.log({ response });
            // Reload orders after updating payment status
            loadOrders();
        } catch (error) {
            console.error('Failed to update payment status:', error);
        }
    };

    const handleStatus = async (orderId) => {
        try {
            // Add your status update logic here

            console.log('Status update logic for orderId:', orderId);
            try {
                const response = await updateOrderStatus(user?.token, orderId, selectetStatus);
                console.log({ response });
                // Reload orders after updating payment status
                loadOrders();
            } catch (error) {
                console.error('Failed to update payment status:', error);
            }
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    };

    const showModal = (orderId, type, status) => {
        setSelectedOrderId(orderId);
        setActionType(type);
        if (status)
            setSelectedStatus(status)
        setModalVisible(true);
    };

    const handleConfirmAction = () => {
        if (actionType === 'payment') {
            handlePaymentProgress(selectedOrderId);
        } else if (actionType === 'status') {
            handleStatus(selectedOrderId);
        }
        setModalVisible(false);
    };



    const handleCancelAction = () => {
        setModalVisible(false);
        setSelectedOrderId(null);
        setActionType('');
    };



    return (
        <div className="my-10 w-full">
            <div className="overflow-x-auto max-h-[800px] overflow-y-scroll shadow-lg rounded-lg">
                <table className="min-w-full bg-white rounded-lg overflow-hidden border border-gray-300">
                    <thead className="bg-yellow-500">
                        <tr>
                            {[
                                'Order ID',
                                'Requirement ID',
                                'Quotation ID',
                                'Estimated Price',
                                'Seller',
                                'Buyer',
                                'Product',
                                'Expected Date',
                                'Address',
                                'Status',
                                'Payment',
                            ].map((header) => (
                                <th key={header} className="py-3 px-1 text-left text-white font-semibold border border-gray-300">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id} className="hover:bg-gray-200 transition duration-300">
                                    <td className="py-3 px-1 border border-gray-300 text-blue-500 underline cursor-pointer" title={order?._id}>{order?._id.slice(0, 3)}...</td>
                                    <td className="py-3 px-1 border border-gray-300 text-blue-500 underline cursor-pointer" title={order?.requirementId}>{order?.requirementId?._id?.slice(0, 3)}...</td>
                                    <td className="py-3 px-1 border border-gray-300 text-blue-500">{order.quotationId.slice(0, 3)}...</td>
                                    <td className="py-3 px-1 border border-gray-300 text-black">Rs.{order?.estimatedPrice}</td>
                                    <td className="py-3 px-1 border border-gray-300 text-black"
                                        data-tooltip-id={`seller-email-${order.id}`}
                                        data-tooltip-html={`
                                        <div>
                                        <strong>Name:</strong> ${order?.sellerId?.name}<br />
                                        <strong>Phone:</strong> ${order?.sellerId?.phone}<br />
                                       <strong>Email:</strong> ${order?.sellerId?.email}
                                        </div>
                                    `}>
                                        <p className='text-blue-500 underline cursor-pointer'>
                                            {order.sellerId?.email}
                                        </p>
                                        <Tooltip id={`seller-email-${order.id}`} place="top" effect="solid" className="custom-tooltip" />
                                    </td>
                                    <td className="py-3 px-1 border border-gray-300 text-black" data-tooltip-id={`buyer-email-${order.id}`} data-tooltip-html={`
                                        <div>
                                        <strong>Name:</strong> ${order?.buyerId?.name}<br />
                                        <strong>Phone:</strong> ${order?.buyerId?.phone}<br />
                                       <strong>Email:</strong> ${order?.buyerId?.email}
                                        </div>
                                    `}>
                                        <p className='text-blue-500 underline cursor-pointer'>
                                            {order.buyerId?.email}
                                        </p>
                                        <Tooltip id={`buyer-email-${order.id}`} place="top" effect="solid" className="custom-tooltip" />
                                    </td>
                                    <td className="py-3 px-1 border border-gray-300 text-black">
                                        <img src={order.productId?.image} alt="Product" className="h-10 w-10 rounded-full object-cover" />
                                    </td>
                                    <td className="py-3 px-1 border border-gray-300 text-black">{order?.expectedDate?.slice(0, 10)}</td>
                                    <td>
                                        <span
                                            data-tooltip-id={`address-tooltip-${order._id}`}
                                            data-tooltip-html={
                                                `<div>
                                                   ${order?.requirementId?.deliveryAddress} 
                                           </div>
                                              <div>
                                              ${order?.requirementId?.deliveryCity},${order?.requirementId?.deliveryState}
                                             </div>
                                           ${order?.requirementId?.deliveryZipCode} `

                                            }
                                        >
                                            <p className="cursor-pointer text-black"> {order?.requirementId?.deliveryAddress?.slice(0, 20)}...</p>
                                        </span>
                                        <Tooltip id={`address-tooltip-${order._id}`} place="top" clickable={true} />
                                    </td>
                                    <td className="py-3 px-1 border border-gray-300 text-black">
                                        <select
                                            className="px-3 py-1 rounded text-sm bg-white border border-gray-300"
                                            value={order?.status}
                                            onChange={(e) => showModal(order?._id, 'status', e.target.value)}
                                        >
                                            <option value="pending" disabled>Pending</option>
                                            <option value="dispatched">Dispatch</option>
                                            <option value="delivered">Delivered</option>
                                            <option value="cancelled">Cancel</option>
                                        </select>
                                    </td>
                                    <td className="py-3 px-1 border border-gray-300 text-black">
                                        <select
                                            className="px-3 py-1 rounded text-sm bg-white border border-gray-300"
                                            value={order?.paymentProgress}
                                            onChange={() => showModal(order?._id, 'payment', null)}
                                        >
                                            <option value="in-transit">Pending</option>
                                            <option value="received">Received</option>
                                        </select>
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="10" className="py-3 px-1 text-center text-gray-500 border border-gray-300">No orders found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Confirm Order Payment</h2>
                        <p className='text-black'>Are you sure you want to update the {actionType} status for this order?</p>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleCancelAction}
                                className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
                            >
                                No
                            </button>
                            <button
                                onClick={handleConfirmAction}
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrdersTable;
