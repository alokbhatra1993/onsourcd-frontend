import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { acceptOrderApi, readQuotationByRequirement } from '../../services/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequirementQuotation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state);
  const [quotations, setQuotations] = useState([]);

  useEffect(() => {

    fetchQuotations();
  }, []);

  const fetchQuotations = async () => {
    try {
      const response = await readQuotationByRequirement(location?.state?.requirementId, user?.token)
      if (response?.ok) {
        const data = await response.json();
        setQuotations(data);
      }
    } catch (error) {
      console.error('Error fetching quotations:', error);
    }
  };


  console.log({ quotations });

  const handleAccpetOrder = async (qId) => {
    try {
      const response = await acceptOrderApi(qId, user?.token);
      console.log({ response });
      if (response.ok) {
        fetchQuotations()
      }
    } catch (error) {
      console.log({ error });
    }

  }

  return (
    <div className="container mx-auto py-6 bg-gray-100">
  <h1 className="text-3xl font-semibold mb-6 text-gray-800">Quotations</h1>
  <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 border-b">ID</th>
          <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 border-b">Requirement ID</th>
          <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 border-b">Estimated Price</th>
          <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 border-b">Quality Description</th>
          <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 border-b">Transportation Price</th>
          <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 border-b">Transport Availability</th>
          <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 border-b">Status</th>
          <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 border-b">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {
          quotations?.length > 0 ? (
            <>
              {quotations.map((quotation) => (
                <tr key={quotation._id}>
                  <td className="py-3 px-6 text-sm font-medium text-blue-600 cursor-pointer" title={`${quotation._id}`}>
                    {quotation._id?.slice(0, 4)}...
                  </td>
                  <td className="py-3 px-6 text-sm font-medium text-blue-600 cursor-pointer" title={`Go to requirement: ${quotation.requirementId}`}>
                    {quotation.requirementId?.slice(0, 4)}...
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-900">{quotation.estimatedPrice}</td>
                  <td className="py-3 px-6 text-sm text-gray-900">{quotation.qualityDescription}</td>
                  <td className="py-3 px-6 text-sm text-gray-900">₹ {quotation?.transportationPrice || 0} km/ton</td>
                  <td className="py-3 px-6 text-sm text-gray-900">{quotation.transportAvailability ? 'Yes' : 'No'}</td>
                  <td className="py-3 px-6 text-sm text-gray-900">{quotation.status}</td>
                  <td className="py-3 px-6 text-sm font-medium flex space-x-2">
                    {
                      quotation?.status === "pending" ? (
                        <button
                          onClick={() => handleAccpetOrder(quotation?._id)}
                          className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                        >
                          Accept
                        </button>
                      ) : (
                        <>
                          {
                            quotation?.status == "rejected" ? (
                              <button disabled className='bg-red-600 text-white px-4 py-2 rounded-lg'>
                                Rejected
                              </button>
                            ) : (
                              <button
                                onClick={() => navigate("/customer/requirement-orders", { state: { reqId: quotation.requirementId } })}
                                className='bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors'
                              >
                                View Orders
                              </button>
                            )
                          }
                        </>
                      )
                    }
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td colSpan="8" className="py-3 px-6 text-center text-gray-500">No Quotation found yet</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
</div>

  );
};

export default RequirementQuotation;
