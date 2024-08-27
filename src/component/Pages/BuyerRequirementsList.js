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
  const [searchQuery, setSearchQuery] = useState(""); // Step 1: Add search state
  const itemsPerPage = 5;

  useEffect(() => {
    loadMyRequirements();
  }, []);

  const loadMyRequirements = async () => {
    try {
      const response = await fetchMyRequirements(user?.token);
      const data = await response.json();
      console.log({ data });

      setMyRequirements(data?.requirement);
    } catch (error) {
      console.error("Error loading requirements:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Step 2: Filter requirements based on search query
  const filteredRequirements = myRequirements.filter((requirement) =>
    requirement.productId?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRequirements.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredRequirements.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="products">
    <div className="flex justify-between items-center mb-4">
    <div className="relative w-1/2">
      <input
        type="text"
        placeholder="Search Product name"
        className="p-2 pl-10 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
     
    </div>
    <Link className="bg-yellow-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-yellow-600 transition" to="/customer/add-requirement">
      Add Requirement
    </Link>
  </div>

  <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
  <thead className="bg-gray-100">
    <tr>
      <th className="px-4 py-2 text-left text-gray-600 font-semibold">Index</th>
      <th className="px-4 py-2 text-left text-gray-600 font-semibold">Product Name</th>
      <th className="px-4 py-2 text-left text-gray-600 font-semibold">Product Image</th>
      <th className="px-4 py-2 text-left text-gray-600 font-semibold">Quantity</th>
      <th className="px-4 py-2 text-left text-gray-600 font-semibold">Minimum Amount</th>
      <th className="px-4 py-2 text-left text-gray-600 font-semibold">Maximum Amount</th>
      <th className="px-4 py-2 text-left text-gray-600 font-semibold">Frequency</th>
      <th className="px-4 py-2 text-left text-gray-600 font-semibold">Total Orders</th>
      <th className="px-4 py-2 text-left text-gray-600 font-semibold">Start/End Date</th>
      <th className="px-4 py-2 text-left text-gray-600 font-semibold">Description</th>
      <th className="px-4 py-2 text-left text-gray-600 font-semibold">Delivery Address</th>
      <th className="px-4 py-2 text-left text-gray-600 font-semibold">Actions</th>
    </tr>
  </thead>
  <tbody>
    {currentItems.length > 0 ? (
      currentItems.map((requirement, index) => (
        <tr key={requirement._id} className="border-t hover:bg-gray-50">
          <td className="px-4 py-2">{startIndex + index + 1}</td>
          <td className="px-4 py-2">{requirement.productId?.name || 'N/A'}</td>
          <td className="px-4 py-2">
            {requirement.productId?.image ? (
              <img
                src={requirement.productId.image}
                alt={requirement.productId.name}
                className="max-w-20 h-auto rounded-md shadow-sm"
              />
            ) : (
              'No Image'
            )}
          </td>
          <td className="px-4 py-2">{requirement.quantity}</td>
          <td className="px-4 py-2">{requirement.minimumAmount}</td>
          <td className="px-4 py-2">{requirement.maximumAmount}</td>
          <td className="px-4 py-2">{requirement.frequency}</td>
          <td className="px-4 py-2">{requirement.totalOrders}</td>
          <td className="px-4 py-2">
            {requirement.expectedStartDate?.slice(0, 10)}-
            {requirement.expectedEndDate?.slice(0, 10)}
          </td>
          <td className="px-4 py-2">
            <span
              data-tooltip-id={`desc-tooltip-${requirement._id}`}
              data-tooltip-content={requirement.description}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              {requirement.description?.slice(0, 10)}...
            </span>
            <Tooltip id={`desc-tooltip-${requirement._id}`} place="top" clickable={true} />
          </td>
          <td className="px-4 py-2">
            <span
              data-tooltip-id={`address-tooltip-${requirement._id}`}
              data-tooltip-html={
                `<div>${requirement.deliveryAddress}</div>
                 <div>${requirement.deliveryCity}, ${requirement.deliveryState}</div>
                 ${requirement.deliveryZipCode}`
              }
              className="cursor-pointer text-blue-600 hover:underline"
            >
              {requirement.deliveryAddress?.slice(0, 20)}...
            </span>
            <Tooltip id={`address-tooltip-${requirement._id}`} place="top" clickable={true} />
          </td>
          <td className="px-4 py-2">
            <button
              onClick={() => {
                console.log({ requirement });
                navigate("/customer/requirement-quotations", { state: { requirementId: requirement?._id } });
              }}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow hover:bg-yellow-600 transition"
            >
              Quotations
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="12" className="px-4 py-6 text-center text-gray-500">
          No requirements found.
        </td>
      </tr>
    )}
  </tbody>
</table>


<div className="pagination flex justify-center items-center space-x-3 mt-6">
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-600 text-white shadow-lg hover:bg-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <FaChevronLeft className="w-5 h-5" />
  </button>
  
  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => handlePageChange(index + 1)}
      disabled={currentPage === index + 1}
      className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold transition-colors ${currentPage === index + 1
          ? 'bg-yellow-600 hover:bg-yellow-700'
          : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
        }`}
    >
      {index + 1}
    </button>
  ))}
  
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-600 text-white shadow-lg hover:bg-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <FaChevronRight className="w-5 h-5" />
  </button>
</div>

    </div>
  );
};

export default BuyerRequirementsList;
