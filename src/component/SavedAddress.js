import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserAddress } from "../services/addressApi";
import { useSelector } from "react-redux";
import "./SavedAddress.css";

export const SavedAddress = () => {
  const user = useSelector((state) => state);
  const [userSavedAddress, setUserSavedAddress] = useState([]);

  useEffect(() => {
    mySavedAddress();
  }, []);

  const mySavedAddress = async () => {
    const response = await fetchUserAddress(user?._id);
    console.log({ response });
    const data = await response.json();
    setUserSavedAddress(data);
  };

  return (
    <div className="w-3/4 mx-auto my-10 p-4 bg-white text-black">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold">Saved Addresses</h2>
    <Link
      to="/customer/add-new-address"
      className="text-blue-500 hover:text-blue-700 transition duration-300"
    >
      Add New Address
    </Link>
  </div>
  <div className="h-[600px] overflow-y-auto">
    {userSavedAddress && userSavedAddress.length > 0 ? (
      <ul className="space-y-4 pr-4">
        {userSavedAddress.map((address, index) => (
          <li
            key={index}
            className="border rounded-md p-4 shadow-sm hover:shadow-md transition duration-300"
          >
            <p><strong>Address:</strong> {address.address}</p>
            <p><strong>City:</strong> {address.city}</p>
            <p><strong>State:</strong> {address.state}</p>
            <p><strong>Zip Code:</strong> {address.zipcode}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500">No saved addresses found.</p>
    )}
  </div>
</div>


  );
};
