import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { fetchProductApi } from '../../services/api';

const SellerProducts = () => {
    const user = useSelector((state) => state);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const response = await fetchProductApi();
            if (response) {
                const data = await response.json();
                setProducts(data?.products);
            }
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };


    return (
        <div className="products p-8 bg-gray-100 min-h-screen">
            <ToastContainer />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="bg-white rounded-lg shadow p-4">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-2"> {product?.category?.name}</p>
                            <p className="text-gray-600 mb-2">{product?.subCategory?.name}</p>
                            <p className="text-gray-600 mb-2">GST: ₹ {product?.gst || 0}</p>
                            {/* <p className="text-gray-600 mb-2">Commission: ₹ {product?.commission || 0}</p> */}

                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">
                        No products found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default SellerProducts;
