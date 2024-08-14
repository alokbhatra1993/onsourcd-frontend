import React, { useEffect, useState } from 'react';
import { fetchOrdersBySeller } from '../../services/api';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';

const SellerOrders = () => {
    const user = useSelector((state) => state);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            const response = await fetchOrdersBySeller(user?.token, user?._id);
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error loading orders:', error);
        }
    };

    const columns = [
        {
            name: 'Index',
            selector: (row, index) => index + 1,
            sortable: true,
        },
        {
            name: 'Quotation Id',
            selector: row => row.quotationId,
        },
        {
            name: 'Product Name',
            selector: row => row.productId.name,
        },
        {
            name: 'Product Image',
            cell: row => (
                <img
                    src={row.productId.image}
                    alt={row.productId.name}
                    className="w-24 h-24 object-cover"
                />
            ),
        },
        {
            name: 'Expected Date',
            selector: row => row.expectedDate.slice(0, 10),
        },
        {
            name: 'Payment Progress',
            selector: row => row.paymentProgress,
            cell: row => (
                <span className={`font-bold ${row.status === 'cancelled' ? 'text-red-600' : row.status === 'received' ? 'text-green-600' : 'text-green-500'}`}>
                    {row.paymentProgress}
                </span>
            ),
        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">My Orders</h2>
            <div className="overflow-x-auto">
                <div className="w-full">
                    <DataTable
                        columns={columns}
                        data={orders}
                        pagination
                        paginationPerPage={5}
                        paginationRowsPerPageOptions={[5, 10, 20]}
                        highlightOnHover
                        striped
                        responsive
                        customStyles={{
                            headRow: {
                                style: {
                                    backgroundColor: '#f9fafb',
                                    fontWeight: 'bold',
                                },
                            },
                            rows: {
                                style: {
                                    fontSize: '14px',
                                },
                            },
                            table: {
                                style: {
                                    width: '100%',
                                    minWidth: '1000px', // Ensure minimum width for the table
                                },
                            },
                            pagination: {
                                style: {
                                    borderTop: '1px solid #e5e7eb',
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SellerOrders;
