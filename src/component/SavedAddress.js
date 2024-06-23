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
    console.log({ data });
    setUserSavedAddress(data);
  };

  return (
    <div className="new-address">
      <h2>Saved Addresses</h2>
      {userSavedAddress && userSavedAddress.length > 0 ? (
        <ul className="address-list">
          {userSavedAddress.map((address, index) => (
            <li key={index} className="address-item">
              <p><strong>Address:</strong> {address.address}</p>
              <p><strong>City:</strong> {address.city}</p>
              <p><strong>State:</strong> {address.state}</p>
              <p><strong>Zip Code:</strong> {address.zipcode}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved addresses found.</p>
      )}
      <Link to="/add-new-address" className="add-address-link">Add New Address</Link>
    </div>
  );
};
