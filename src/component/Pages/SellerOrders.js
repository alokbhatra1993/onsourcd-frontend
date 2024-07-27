import React, { useEffect } from 'react'
import { fetchOrdersBySeller } from '../../services/api';

const SellerOrders = () => {
    const user = useSelector((state) => state);
    const [orders, setOrders] = uses


    useEffect(() => {
        loadOrders()
    }, [])

    const loadOrders = async () => {
        try {
            const response = await fetchOrdersBySeller(user?.token);
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
