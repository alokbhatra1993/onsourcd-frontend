import React, { useEffect, useState } from 'react';
import { allOrdersApi, updateOrderPayment, updateOrderStatus } from '../../services/api';
import { useSelector } from 'react-redux';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatDate } from '../../services/commonFunctions';

const OrdersTable = () => {
    const user = useSelector((state) => state);

    const [orders, setOrders] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [actionType, setActionType] = useState('');
    const [selectetStatus, setSelectedStatus] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Adjust the number of items per page
    const [searchTerm, setSearchTerm] = useState('');
    const [expectedDateFilter, setExpectedDateFilter] = useState('');

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
            if(response?.status===200){
                toast.success("Payment status updated")
                loadOrders(); // Reload orders after updating payment status

            }
        } catch (error) {
            console.error('Failed to update payment status:', error);
        }
    };

    const handleStatus = async (orderId) => {
        try {
            const response = await updateOrderStatus(user?.token, orderId, selectetStatus);
            console.log({ response });
            if (response?.status === 200) {
                toast.success(`Order ${selectetStatus}`);
            } else {
                toast.error("Failed to update status");
            }
            loadOrders(); // Reload orders after updating status
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    };

    const showModal = (orderId, type, status) => {
        console.log({ status });
        setSelectedOrderId(orderId);
        setActionType(type);
        if (status) setSelectedStatus(status);
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

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDateFilterChange = (e) => {
        setExpectedDateFilter(e.target.value);
    };

    const filteredOrders = orders.filter((order) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            (!searchTerm ||
                order._id.toLowerCase().includes(searchTermLower) ||
                order.requirementId?._id?.toLowerCase().includes(searchTermLower) ||
                order.sellerId?.email.toLowerCase().includes(searchTermLower) ||
                order.buyerId?.email.toLowerCase().includes(searchTermLower)) &&
            (!expectedDateFilter || order.expectedDate?.slice(0, 10) === expectedDateFilter)
        );
    });

    const paginatedOrders = filteredOrders.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="my-10 w-full">
            <ToastContainer />
            <div className="mb-4 flex  gap-1 mx-4">
                <input
                    type="text"
                    placeholder="Search by ID, buyer or seller email"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="px-4 py-2 border rounded w-3/4 "
                />
                <div className='w-1/2 flex gap-4'>
                    <input

                        type="date"
                        value={expectedDateFilter}
                        onChange={handleDateFilterChange}
                        className="px-4 py-2 border rounded w-3/4"
                    />
                    <button className='w-1/4' onClick={() => {
                        setExpectedDateFilter('')
                        setSearchTerm('')
                    }}>Reset </button>
                </div>

            </div>
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
                        {paginatedOrders.length > 0 ? (
                            paginatedOrders.map((order) => (
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
                                    <td className="py-3 px-1 border border-gray-300 text-black">{formatDate( order?.expectedDate?.slice(0, 10))}</td>
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
                                            value={order.status}
                                            onChange={(e) => showModal(order._id, 'status', e.target.value)}
                                            className="px-2 py-1 border rounded"
                                        >
                                            {[
                                                'Pending',
                                                'dispatched',
                                                'delivered',
                                                'cancelled',
                                            ].map((status) => (
                                                <option key={status} value={status}>
                                                    {status}
                                                </option>
                                            ))}
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
                                <td colSpan="10" className="py-3 px-6 text-center">
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h3 className="text-xl mb-4">Confirm Action</h3>
                        <p>Are you sure you want to {actionType} for Order ID: {selectedOrderId}?</p>
                        {actionType === 'status' && (
                            <p>Changing status to <span className="font-bold text-red-500">{selectetStatus}</span></p>
                        )}
                        <div className="flex justify-end mt-4">
                            <button onClick={handleCancelAction} className="px-4 py-2 bg-gray-500 text-white rounded mr-2">
                                Cancel
                            </button>
                            <button onClick={handleConfirmAction} className="px-4 py-2 bg-blue-500 text-white rounded">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`px-3 py-1 mx-1 rounded ${pageNumber === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
                            }`}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default OrdersTable;
