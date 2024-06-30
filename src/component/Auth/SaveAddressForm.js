import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useForm } from "react-hook-form";
import { fetchAddress } from "../../services/googleApi";
import { useSelector } from "react-redux";
import { fetchUserAddress } from "../../services/addressApi";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const SaveAddressForm = () => {
  const user = useSelector((state) => state);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const { register, setValue, handleSubmit } = useForm();
  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 0,
    lng: 0,
  };

  const onLoad = (map) => {
    setMap(map);
  };

  useEffect(() => {
    handleUseCurrentLocation();
  }, []);

  const handleUseCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          console.log("position", position);
          const { latitude, longitude } = position.coords;
          setMarkerPosition({ lat: latitude, lng: longitude });
          const locationAddress =
            (await fetchAddress(latitude, longitude)) || "";
          console.log("locationAddress", locationAddress);
          const { address_components, formatted_address } = locationAddress;
          setValue("latitude", latitude);
          setValue("longitude", longitude);
          setValue("userId", user?._id);
          setValue("address", formatted_address);
          setValue("country", address_components[5].long_name);
          setValue("state", address_components[4].long_name);
          setValue("city", address_components[2].long_name);
          setValue("zipcode", address_components[6].long_name);
        },
        (error) => {
          console.log({ error });
        }
      );
    } else {
    }
  };

  const onSubmit = async (data) => {
    setLoading(true)
    const response = await fetch("http://localhost:5000/api/address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setLoading(false)
    const responseData = await response.json();
      console.log({data});
    if (response.ok) {
      // Handles successful login
      navigate("/customer/savedaddress")
    } else {
      
    }
  };


  return (
    <div className="saved-address-container ">
      {/* <h2>Add New Address</h2> */}
      <div className="map-container">
        <LoadScript googleMapsApiKey="AIzaSyCL_QSk4NjKCD376dCE3LM93zIkn234Yrs">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
          >
            <Marker
              position={markerPosition}
              draggable={true}
            // onDragEnd={onMarkerDragEnd}
            />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="address-form">
        <h3>Add New Address</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Address"
            {...register("address")}
            disabled
          />
          <input
            type="text"
            placeholder="City"
            {...register("city")}
            disabled
          />
          <input
            type="text"
            placeholder="State"
            {...register("state")}
            disabled
          />
          <input
            type="text"
            placeholder="Zip Code"
            {...register("zipcode")}
            disabled
          />
          <input type="text" placeholder="Landmark" {...register("landmark")} />
          <button type="submit">
            {loading ? (<FaSpinner />) : "Save Address"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SaveAddressForm;
