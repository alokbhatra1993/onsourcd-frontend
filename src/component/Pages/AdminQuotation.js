import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { acceptOrderApi, allQuotationsApi, readQuotationByRequirement } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Tooltip } from "react-tooltip";


const AdminQuotation = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state);
    const [quotations, setQuotations] = useState([]);

    useEffect(() => {

        fetchQuotations();
    }, []);

    const fetchQuotations = async () => {
        try {
            const response = await allQuotationsApi()
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
                            <th className="py-2 px-4 border-b text-black">Transportation Price </th>
                            <th className="py-2 px-4 border-b text-black">Transport Availability</th>
                            <th className="py-2 px-4 border-b text-black">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            quotations?.length > 0 ? (
                                <>
                                    {quotations.map((quotation) => (
                                        <tr key={quotation._id}>
                                            <td className="py-2 px-4 border-b text-blue-600  cursor-pointer" title={`${quotation._id}`}>{quotation._id?.slice(0, 4)}...</td>
                                            <td
                                                className="py-2 px-4 border-b text-blue-600 cursor-pointer"
                                                title={`Go to requirement: ${quotation.requirementId}`}
                                            >
                                                {quotation.requirementId?.slice(0, 4)}...
                                            </td>                      <td className="py-2 px-4 border-b text-black">{quotation.estimatedPrice}</td>
                                            <td className="py-2 px-4 border-b text-black">{quotation.gst ? 'Yes' : 'No'}</td>
                                            <td>
                                                <span
                                                    
                                                    data-tooltip-id={`desc-tooltip-${quotation._id}`}
                                                    data-tooltip-content={quotation.qualityDescription}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                   <p className='text-black'>{quotation.qualityDescription.slice(0, 20)}...</p>
                                                </span>
                                                <Tooltip id={`desc-tooltip-${quotation._id}`} place="top" clickable={true} />
                                            </td>
                                            <td className="py-2 px-4 border-b text-black">₹ {quotation?.transportationPrice || 0} km/ton</td>
                                            <td className="py-2 px-4 border-b text-black">{quotation.transportAvailability ? 'Yes' : 'No'}</td>
                                            <td className="py-2 px-4 border-b text-black">{quotation.status}</td>

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

export default AdminQuotation;
