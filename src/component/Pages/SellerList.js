import React, { useEffect, useState } from 'react'
import { fetchSellers } from '../../services/api'

const SellerList = () => {

    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        loadSellers()
    }, [])

    const loadSellers = async () => {
        const response = await fetchSellers();
        console.log({ response });
        const data = await response.json()
        console.log({ data });
        setSellers(data)
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
                            sellers.length > 0 ?
                                (
                                    <>
                                        {sellers.map(seller => (
                                            <tr key={seller._id}>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{seller?.name}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{seller?.email}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{seller?.phone}</td>
                                                <td className="py-2 px-4 border-b border-gray-200 text-black">{
                                                    seller?.isVerifiedEmail===true?"Yes":"No"
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

export default SellerList
