import React, { useEffect, useState } from 'react'
import { fetchOrdersBySeller } from '../../services/api';
import { useSelector } from 'react-redux';

const SellerOrders = () => {
    const user = useSelector((state) => state);
    console.log({user});
    const [orders, setOrders] = useState([])

    useEffect(() => {
        loadOrders()
    }, [])

    const loadOrders = async () => {
        try {
            const response = await fetchOrdersBySeller(user?.token , user?._id);
            const data = await response.json();
            setOrders(data)
        } catch (error) {
            throw error;
        }
    }


    return (
        <div>

        </div>
    )
}

export default SellerOrders
