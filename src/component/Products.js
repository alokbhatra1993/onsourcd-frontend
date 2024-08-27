import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteProductApi, fetchProductApi } from '../services/api';
import { FaDeleteLeft, FaTrash } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

const Products = () => {
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


  const deleteProduct = async (productID) => {
    try {

      const response = await deleteProductApi(user?.token, productID)

      if (response?.status === 200) {
        toast.success("Product deleted")
        loadProducts()
      }
    } catch (error) {
      toast.success("Something went wrong")
    }
  }

  return (
    <div className="products p-8 bg-gray-100 min-h-screen">
      <ToastContainer />
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Product List</h2>
        <Link
          to="/admin-dashboard/add-product"
          className="bg-[#f6b60d] text-black px-6 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-300"
        >
          Add Product
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-[#f6b60d]">
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">Index</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">Product Image</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">Direct Category</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">Product Subcategory</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">GST</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">Commission</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">Action</th>

            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.length > 0 ? (
              products.map((product, index) => (
                <tr key={product._id} className="hover:bg-gray-50 transition duration-300">
                  <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-sm text-gray-500">{product.name}</td>
                  <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-sm text-gray-500">
                    <img src={product.image} alt={product.name} className="max-w-full h-auto" style={{ maxWidth: '100px' }} />
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-sm text-gray-500">{product?.category?.name}</td>
                  <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-sm text-gray-500">{product?.subCategory?.name}</td>
                  <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-sm text-gray-500">₹ {product?.gst || 0}</td>
                  <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-sm text-gray-500">₹ {product?.commission || 0}</td>
                  <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-sm text-gray-500 text-center">
  <button onClick={() => deleteProduct(product?._id)} className="mx-auto flex justify-center">
    <FaTrash />
  </button>
</td>


                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
