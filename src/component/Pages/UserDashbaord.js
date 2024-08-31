import React, { useEffect, useState } from "react";
import { fetchUserDashboard } from "../../services/api";
import { useSelector } from "react-redux";

const UserDashbaord = () => {
    const user = useSelector((state) => state);

    console.log({user});
    

    useEffect(() => {
        loadDashboard()
    }, [])

    const loadDashboard = async () => {
        try {
            const response = await fetchUserDashboard(user?.token, user?.userType);
            const results = await response.json();
            console.log({ results });

        } catch (error) {
            console.error("Error loading requirements:", error);
        }
    };

    return (
        <div>
            Order Completed
        </div>
    )

}

export default UserDashbaord;
