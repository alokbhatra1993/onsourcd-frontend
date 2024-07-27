import React, { useEffect, useState } from "react";
import { fetchSellers } from "../../services/api";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const SellerList = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    loadSellers();
  }, []);

  const loadSellers = async () => {
    const response = await fetchSellers();
    const data = await response.json();
    setSellers(data);
  };

  return (
    <div className="container mx-auto my-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Seller List</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-yellow-500 text-left text-sm uppercase font-semibold text-white" style={{ backgroundColor: '#f6b60d' }}>Name</th>
              <th className="py-4 px-6 bg-yellow-500 text-left text-sm uppercase font-semibold text-white" style={{ backgroundColor: '#f6b60d' }}>Email</th>
              <th className="py-4 px-6 bg-yellow-500 text-left text-sm uppercase font-semibold text-white" style={{ backgroundColor: '#f6b60d' }}>Phone</th>
              <th className="py-4 px-6 bg-yellow-500 text-left text-sm uppercase font-semibold text-white" style={{ backgroundColor: '#f6b60d' }}>Verified</th>
            </tr>
          </thead>
          <tbody>
            {sellers.length > 0 ? (
              sellers.map((seller) => (
                <tr key={seller._id} className="hover:bg-gray-100">
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">{seller?.name}</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">{seller?.email}</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">{seller?.phone}</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">
                    {seller?.isVerifiedEmail ? (
                      <FiCheckCircle className="text-green-500" />
                    ) : (
                      <FiXCircle className="text-red-500" />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 px-6 text-center text-gray-500">
                  No sellers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerList;
