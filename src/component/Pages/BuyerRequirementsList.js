import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchMyRequirements } from "../../services/api";
import { useSelector } from "react-redux";

const BuyerRequirementsList = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state);
  const [myRequirements, setMyRequirements] = useState([]);

  useEffect(() => {
    loadMyRequirements();
  }, []);

  const loadMyRequirements = async () => {
    try {
      const response = await fetchMyRequirements(user?.token);
      console.log({ response });
      const data = await response.json();
      setMyRequirements(data?.requirement);
    } catch (error) {
      console.error("Error loading requirements:", error);
    }
  };

  return (
    <div className="products">
      <div className="justify-content">
        <h2>My Requirements</h2>
        <Link to="/customer/add-requirement">Add Requirement</Link>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Name</th>
            <th>Product Image</th>
            {/* <th>Category</th>
            <th>Subcategory</th> */}
            <th>Quantity</th>
            <th>Minimum Amount</th>
            <th>Maximum Amount</th>
            <th>Frequency</th>
            <th>Total Orders</th>
            <th>Expected Start Date</th>
            <th>Expected End Date</th>
            <th>Description</th>
            <th>Delivery Address</th>
            <th>Delivery City</th>
            <th>Delivery State</th>
            <th>Delivery Zip Code</th>
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
                  {/* <td>{requirement.productId.category}</td>
                  <td>{requirement.productId.subCategory}</td> */}
                  <td>{requirement.quantity}</td>
                  <td>{requirement.minimumAmount}</td>
                  <td>{requirement.maximumAmount}</td>
                  <td>{requirement.frequency}</td>
                  <td>{requirement.totalOrders}</td>
                  <td>{requirement.expectedStartDate.slice(0, 10)}</td>
                  <td>{requirement.expectedEndDate.slice(0, 10)}</td>
                  <td>{requirement.description}</td>
                  <td>{requirement.deliveryAddress}</td>
                  <td>{requirement.deliveryCity}</td>
                  <td>{requirement.deliveryState}</td>
                  <td>{requirement.deliveryZipCode}</td>
                  <td>
                    <button
                      onClick={() => {
                        console.log({ requirement });
                        navigate("/customer/requirement-quotations", { state: { requirementId: requirement?._id } })
                      }}
                    >View Quotations</button>
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
    </div>
  );
};

export default BuyerRequirementsList;
