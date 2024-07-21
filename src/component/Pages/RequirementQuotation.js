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

    fetchQuotations();
  }, []);

  console.log({ quotations });

  const handleAccpetOrder = async (qId) => {
    try {
      const response = await acceptOrderApi(qId, user?.token);
      console.log({ response });
    } catch (error) {
      console.log({ error });
    }

  }

  return (
    <div className="container mx-auto py-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">Quotations</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full ">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-black">ID</th>
              <th className="py-2 px-4 border-b text-black">Requirement ID</th>
              <th className="py-2 px-4 border-b text-black">Estimated Price</th>
              <th className="py-2 px-4 border-b text-black">GST</th>
              <th className="py-2 px-4 border-b text-black">Quality Description</th>
              <th className="py-2 px-4 border-b text-black">Transport Availability</th>
              <th className="py-2 px-4 border-b text-black">Status</th>
              <th className="py-2 px-4 border-b text-black">Created At</th>
              <th className="py-2 px-4 border-b text-black">Updated At</th>
              <th className="py-2 px-4 border-b text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              quotations?.length > 0 ? (
                <>
                  {quotations.map((quotation) => (
                    <tr key={quotation._id}>
                      <td className="py-2 px-4 border-b text-black">{quotation._id}</td>
                      <td className="py-2 px-4 border-b text-black">{quotation.requirementId}</td>
                      <td className="py-2 px-4 border-b text-black">{quotation.estimatedPrice}</td>
                      <td className="py-2 px-4 border-b text-black">{quotation.gst ? 'Yes' : 'No'}</td>
                      <td className="py-2 px-4 border-b text-black">{quotation.qualityDescription}</td>
                      <td className="py-2 px-4 border-b text-black">{quotation.transportAvailability ? 'Yes' : 'No'}</td>
                      <td className="py-2 px-4 border-b text-black">{quotation.status}</td>
                      <td className="py-2 px-4 border-b text-black">{new Date(quotation.createdAt).toLocaleString()}</td>
                      <td className="py-2 px-4 border-b text-black">{new Date(quotation.updatedAt).toLocaleString()}</td>
                      <td className="py-2 px-4 border-b text-black">
                        {
                          quotation?.status === "pending" ? (
                            <button
                              onClick={() => {
                                handleAccpetOrder(quotation?._id)
                              }}
                            >Accept </button>
                          ) : (
                            <>
                              {
                                quotation?.status == "rejected" ? (
                                  <button disabled className='bg-red-600'>Rejected</button>
                                ) : (
                                  <button
                                    onClick={() => {
                                      navigate("/customer/requirement-orders",{state:{reqId:quotation.requirementId}})
                                    }}
                                    className='bg-green-600'>
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
                <p>
                  No Qutation found yet
                </p>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequirementQuotation;
