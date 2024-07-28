import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchMyRequirements } from "../../services/api";
import { useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const BuyerRequirementsList = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state);
  const [myRequirements, setMyRequirements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(myRequirements.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = myRequirements.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="products">
      <div className="flex justify-content">
        <input
          type="text"
          placeholder="Search Product name"
          className="mr-2 p-1 border rounded w-1/2"
        />
        <Link className="bg-yellow-500 p-2" to="/customer/add-requirement"> Add Requirement</Link>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Quantity</th>
            <th>Minimum Amount</th>
            <th>Maximum Amount</th>
            <th>Frequency</th>
            <th>Total Orders</th>
            <th>Start/End Date</th>
            <th>Description</th>
            <th>Delivery Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((requirement, index) => (
              <tr key={requirement._id}>
                <td>{startIndex + index + 1}</td>
                <td>{requirement.productId.name}</td>
                <td>
                  <img
                    src={requirement.productId.image}
                    alt={requirement.productId.name}
                    style={{ maxWidth: "100px" }}
                  />
                </td>
                <td>{requirement.quantity}</td>
                <td>{requirement.minimumAmount}</td>
                <td>{requirement.maximumAmount}</td>
                <td>{requirement.frequency.slice(0, 1)}</td>
                <td>{requirement.totalOrders}</td>
                <td>
                  {requirement.expectedStartDate.slice(0, 10)}-
                  {requirement.expectedEndDate.slice(0, 10)}
                </td>
                <td>
                  <span
                    data-tooltip-id={`desc-tooltip-${requirement._id}`}
                    data-tooltip-content={requirement.description}
                    style={{ cursor: 'pointer' }}
                  >
                    {requirement.description.slice(0, 10)}...
                  </span>
                  <Tooltip id={`desc-tooltip-${requirement._id}`} place="top" clickable={true} />
                </td>
                <td>
                  <span
                    data-tooltip-id={`address-tooltip-${requirement._id}`}
                    data-tooltip-content={
                      requirement.deliveryAddress +
                      " ," + requirement.deliveryCity + ","
                      + requirement.deliveryState + "," +
                      requirement.deliveryZipCode
                    }
                  >
                    {requirement.deliveryAddress.slice(0, 20)}...
                  </span>
                  <Tooltip id={`address-tooltip-${requirement._id}`} place="top" clickable={true} />
                </td>

                <td>
                  <button
                    onClick={() => {
                      console.log({ requirement });
                      navigate("/customer/requirement-quotations", { state: { requirementId: requirement?._id } });
                    }}
                  >
                    Quotations
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12">No requirements found.</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mt-2 w-10 h-10 border border-yellow-500 bg-white text-black disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            className={`mt-2 w-10 h-10 border border-yellow-500 bg-white text-black ${currentPage === index + 1 ? 'bg-yellow-500 ' : ''
              }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="mt-2 w-10 h-10 border border-yellow-500 bg-white text-black disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>

    </div>
  );
};

export default BuyerRequirementsList;
