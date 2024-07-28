import React, { useEffect, useState } from 'react'
import { fetchOrdersByBuyer, fetchOrdersBySeller } from '../../services/api';
import { useSelector } from 'react-redux';

const BuyerOrders = () => {
    const user = useSelector((state) => state);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        loadOrders()
    }, [])

    const loadOrders = async () => {
        try {
            const response = await fetchOrdersByBuyer(user?.token, user?._id);
            const data = await response.json();
            console.log({ data });
            setOrders(data)
        } catch (error) {
            throw error;
        }
    }

    console.log({ orders });


    return (
        <div className="products">
            <div className="justify-content">
                <h2>My Orders</h2>
            </div>

            <table className="product-table">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Quotation Id</th>
                        <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Expected Date</th>
                        <th>Payment Progress</th>
                        <th>Status</th>


                    </tr>
                </thead>
                <tbody>
                    {orders?.length > 0 ? (
                        <>
                            {orders.map((order, index) => (
                                <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td className='cursor-pointer text-blue-500 underline' title={order?.quotationId}>{order?.quotationId?.slice(0, 3)}...</td>
                                    <td>{order?.productId?.name}</td>
                                    <td>
                                        <img src={order?.productId?.image} />
                                    </td>
                                    <td>{order?.expectedDate?.slice(0, 10)}</td>
                                    <td className={`font-bold ${order?.paymentProgress === 'in-transit' ? 'text-orange-600' : 'text-green-600'
                                        }`}>
                                        {order?.paymentProgress === 'in-transit' ? 'Pending' : 'Received'}
                                    </td>
                                    <td className={`font-bold ${order?.status === 'cancelled' ? 'text-red-600' :
                                        order?.status === 'pending' ? 'text-orange-600' :
                                            order?.status === 'delivered' ? 'text-green-600' :
                                                order?.status === 'dispatched' ? 'text-blue-600' : ''
                                        }`}>
                                        {order?.status}
                                    </td>

                                </tr>
                            ))}
                        </>
                    ) : (
                        <tr>
                            <td colSpan="17">No orders found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default BuyerOrders
