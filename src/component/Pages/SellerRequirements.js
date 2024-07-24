import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNewRequirements } from "../../services/api";
import { useSelector } from "react-redux";
import AddQuotation from "./AddQuotation";
import { toast, ToastContainer } from "react-toastify";

const SellerRequirements = () => {
  const user = useSelector((state) => state);
  const [myRequirements, setMyRequirements] = useState([]);
  const [myCurrentCordinates, setMyCurrentCordinates] = useState({
    latitude: 0,
    longitude: 0
  })

  const [selectedRequirmentId, setSelectedRequirementId] = useState([]);

  const [openAddQuotation, setAddOpenQutation] = useState(false);

  useEffect(() => {
    loadNewRequirements();
    fethCurrentCordinates()
  }, []);

  const loadNewRequirements = async () => {
    try {
      const response = await fetchNewRequirements(user?.token);
      const results = await response.json();
      setMyRequirements(results);
    } catch (error) {
      console.error("Error loading requirements:", error);
    }
  };


  console.log({ myRequirements });

  const haversineDistance = (lat1, lon1) => {
    // lat1 long1 coming fro  user
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = degreesToRadians(myCurrentCordinates?.latitude - lat1);
    const dLon = degreesToRadians(myCurrentCordinates?.longitude - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(myCurrentCordinates?.latitude)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance?.toFixed(1);
  }

  const degreesToRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  }

  const fethCurrentCordinates = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setMyCurrentCordinates({
            latitude: latitude,
            longitude: longitude
          })
        })
    }
  }


  const handleOpenAddQuotation = (requirementId) => {
    setAddOpenQutation(true)
    setSelectedRequirementId(requirementId)
  }

  const closeModal = () => {
    // toast.success("Quotation Updated");
    setAddOpenQutation(false)
    loadNewRequirements();
  }

  return (
    <div className="products">
      <ToastContainer />
      <div className="justify-content">
        <h2>New Requirements</h2>
        {/* <Link to="/customer/add-requirement">Add Requirement</Link> */}
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Quantity</th>
            <th>Frequency</th>
            <th>Total Orders</th>
            <th>Expected Start Date</th>
            <th>Expected End Date</th>
            <th>Description</th>
            <th>Quotation Status</th>
            <th>Area Range</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myRequirements?.length > 0 ? (
            <>
              {myRequirements.map((requirement, index) => (
                <tr key={requirement._id}>
                  <td>{index + 1}</td>
                  <td>{requirement.productId.name}</td>
                  <td>
                    <img
                      src={requirement.productId.image}
                      alt={requirement.productId.name}
                      style={{ maxWidth: "100px" }}
                    />
                  </td>

                  <td>{requirement.quantity}</td>

                  <td>{requirement.frequency}</td>
                  <td>{requirement.totalOrders}</td>
                  <td>{requirement.expectedStartDate.slice(0, 10)}</td>
                  <td>{requirement.expectedEndDate.slice(0, 10)}</td>
                  <td>{requirement.description}</td>
                  <td>
                    {requirement?.quotations && requirement?.quotations[0] ? (
                      <span
                        className={
                          requirement.quotations[0].status === 'pending'
                            ? 'text-orange-600'
                            : requirement.quotations[0].status === 'rejected'
                              ? 'text-red-600'
                              : requirement.quotations[0].status === 'accepted'
                                ? 'text-green-600'
                                : ''
                        }
                      >
                        {requirement.quotations[0].status || 'empty'}
                      </span>
                    ) : (
                      'empty'
                    )}
                  </td>

                  <td>{haversineDistance(requirement?.latitude, requirement?.longitude)} KM</td>

                  <td>
                    <button
                      onClick={() => {
                        handleOpenAddQuotation(requirement?._id)
                      }}
                    >Add/View  Quotation</button>
                    {/* {
                      requirement?.status === "open" ? (
                        <button
                          onClick={() => {
                            handleOpenAddQuotation(requirement?._id)
                          }}
                        >Add/View  Quotation</button>
                      )
                        : (
                          "Closed"
                        )
                    } */}
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td colSpan="17">No requirements found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {
        openAddQuotation ? (
          <AddQuotation closeModal={closeModal} requirementId={selectedRequirmentId} />
        ) : null
      }
    </div>
  );
};

export default SellerRequirements;
