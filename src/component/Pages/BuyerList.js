import React, { useEffect, useState } from 'react'
import { fetchBuyers } from '../../services/api'

const BuyerList = () => {

    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        loadBuyers()
    }, [])

    const loadBuyers = async () => {
        try {
            const response = await fetchBuyers();
            const data = await response.json()
            setBuyers(data)
        } catch (error) {
            throw error
        }

    }
    return (
        <div className=" mx-auto my-10 w-full">

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Name</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Email</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Phone</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-black">Verified </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.length > 0 ?
                                (
                                    <>
                                        {buyers.map(buyer => (
                                            <tr key={buyer._id}>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{buyer?.name}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{buyer?.email}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{buyer?.phone}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{
                                                    buyer?.isVerifiedEmail===true?"Yes":"No"
                                                }</td>


                                            </tr>
                                        ))}
                                    </>
                                ) : null
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BuyerList
