import React, { useEffect, useState } from 'react'
import { fetchOrdersBySeller } from '../../services/api';
import { useSelector } from 'react-redux';

const SellerOrders = () => {
    const user = useSelector((state) => state);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        loadOrders()
    }, [])

    const loadOrders = async () => {
        try {
            const response = await fetchOrdersBySeller(user?.token, user?._id);
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

                    </tr>
                </thead>
                <tbody>
                    {orders?.length > 0 ? (
                        <>
                            {orders.map((order, index) => (
                                <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>{order?.quotationId}</td>
                                    <td>{order?.productId?.name}</td>
                                    <td>
                                        <img src={order?.productId?.image} />
                                    </td>
                                    <td>{order?.expectedDate?.slice(0,10)}</td>
                                    <td className='text-green-600 font-bold'>Received</td>
                                </tr>
                            ))}
                        </>
                    ) : (
                        <tr>
                            <td colSpan="17">No requirements found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default SellerOrders
