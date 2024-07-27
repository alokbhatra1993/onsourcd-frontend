import React, { useEffect, useState } from 'react';
import { fetchBuyers } from '../../services/api';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const BuyerList = () => {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    loadBuyers();
  }, []);

  const loadBuyers = async () => {
    try {
      const response = await fetchBuyers();
      const data = await response.json();
      setBuyers(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto my-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Buyer List</h1>
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
            {buyers.length > 0 ? (
              buyers.map((buyer) => (
                <tr key={buyer._id} className="hover:bg-gray-100">
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">{buyer?.name}</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">{buyer?.email}</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">{buyer?.phone}</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">
                    {buyer?.isVerifiedEmail ? (
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
                  No buyers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyerList;
