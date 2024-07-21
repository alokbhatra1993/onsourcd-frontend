import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ordersByRequirementId } from '../../services/api';
import { useSelector } from 'react-redux';

const RequirementOrders = () => {
    const location = useLocation();
    const user = useSelector((state) => state);

    console.log({ location });


    useEffect(() => {
        loadOrders()
    }, [])

    const loadOrders=async()=>{
        try {
            const response = await ordersByRequirementId(location?.state?.reqId, user?.token)
            console.log({response});
            if(response.ok){
                const data = await response.json()
            }
        } catch (error) {
            
        }
    }
    return (
        <div>

        </div>
    )
}

export default RequirementOrders
