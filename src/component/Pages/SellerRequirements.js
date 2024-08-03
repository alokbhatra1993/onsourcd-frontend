import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { fetchNewRequirements } from "../../services/api";
import { useSelector } from "react-redux";
import AddQuotation from "./AddQuotation";
import { toast, ToastContainer } from "react-toastify";

const SellerRequirements = () => {
  const user = useSelector((state) => state);
  const [myRequirements, setMyRequirements] = useState([]);
  const [filteredRequirements, setFilteredRequirements] = useState([]);
  const [myCurrentCordinates, setMyCurrentCordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [selectedRequirmentId, setSelectedRequirementId] = useState([]);
  const [openAddQuotation, setAddOpenQutation] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const requirementsPerPage = 5;

  // Search and filter state
  const [searchId, setSearchId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    loadNewRequirements();
    fethCurrentCordinates();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [myRequirements, searchId, startDate, endDate]);

  const loadNewRequirements = async () => {
    try {
      const response = await fetchNewRequirements(user?.token);
      const results = await response.json();
      setMyRequirements(results);
      setFilteredRequirements(results); // Initial load
    } catch (error) {
      console.error("Error loading requirements:", error);
    }
  };

  const applyFilters = () => {
    let filtered = myRequirements;

    if (searchId) {
      filtered = filtered.filter((req) =>
        req._id.toLowerCase().includes(searchId.toLowerCase())
      );
    }

    if (startDate) {
      filtered = filtered.filter(
        (req) => req.expectedStartDate.slice(0, 10) >= startDate
      );
    }

    if (endDate) {
      filtered = filtered.filter(
        (req) => req.expectedEndDate.slice(0, 10) <= endDate
      );
    }

    setFilteredRequirements(filtered);
    setCurrentPage(1); // Reset to the first page on filtering
  };

  const haversineDistance = (lat1, lon1) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = degreesToRadians(myCurrentCordinates?.latitude - lat1);
    const dLon = degreesToRadians(myCurrentCordinates?.longitude - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(lat1)) *
        Math.cos(degreesToRadians(myCurrentCordinates?.latitude)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance?.toFixed(1);
  };

  const degreesToRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  const fethCurrentCordinates = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        setMyCurrentCordinates({
          latitude: latitude,
          longitude: longitude,
        });
      });
    }
  };

  const handleOpenAddQuotation = (requirementId) => {
    setAddOpenQutation(true);
    setSelectedRequirementId(requirementId);
  };

  const closeModal = () => {
    setAddOpenQutation(false);
    loadNewRequirements();
  };

  // Pagination Logic
  const indexOfLastRequirement = currentPage * requirementsPerPage;
  const indexOfFirstRequirement = indexOfLastRequirement - requirementsPerPage;
  const currentRequirements = filteredRequirements.slice(
    indexOfFirstRequirement,
    indexOfLastRequirement
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="products">
      <ToastContainer />
      <div className="flex justify-between ">
        <h2 className="text-xl font-bold">New Requirements</h2>
      </div>

      <div className="flex justify-between mb-1">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search by ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="border rounded p-2"
          />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded p-2"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded p-2"
          />
          <button onClick={applyFilters} className="bg-blue-500 text-white p-2 rounded">
            Apply Filters
          </button>
        </div>
      </div>

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2">Requirement Id </th>
            <th className="py-2">Product Name</th>
            <th className="py-2">Product Image</th>
            <th className="py-2">Quantity (MT)</th>
            <th className="py-2">Frequency</th>
            <th className="py-2">Total Orders</th>
            <th className="py-2">Expected Start Date</th>
            <th className="py-2">Expected End Date</th>
            <th className="py-2">Description</th>
            <th className="py-2">Quotation Status</th>
            <th className="py-2">Area Range</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRequirements.length > 0 ? (
            <>
              {currentRequirements.map((requirement) => (
                <tr key={requirement._id}>
                  <td className="text-blue-500 underline cursor-pointer">
                    <span
                      data-tooltip-id={`address-tooltip-${requirement._id}`}
                      data-tooltip-content={requirement._id}
                    >
                      <p className="cursor-pointer">
                        {requirement._id.slice(0, 4)}...
                      </p>
                    </span>
                    <Tooltip
                      id={`address-tooltip-${requirement._id}`}
                      place="top"
                      clickable={true}
                    />
                  </td>
                  <td>{requirement.productId.name}</td>
                  <td>
                    <img
                      src={requirement.productId.image}
                      alt={requirement.productId.name}
                      style={{ maxWidth: "100px" }}
                    />
                  </td>
                  <td>{requirement.quantity} </td>
                  <td>{requirement.frequency}</td>
                  <td>{requirement.totalOrders}</td>
                  <td>{requirement.expectedStartDate.slice(0, 10)}</td>
                  <td>{requirement.expectedEndDate.slice(0, 10)}</td>
                  <td>{requirement.description}</td>
                  <td>
                    {requirement?.quotations && requirement?.quotations[0] ? (
                      <span
                        className={
                          requirement.quotations[0].status === "pending"
                            ? "text-orange-600"
                            : requirement.quotations[0].status === "rejected"
                            ? "text-red-600"
                            : requirement.quotations[0].status === "accepted"
                            ? "text-green-600"
                            : ""
                        }
                      >
                        {requirement.quotations[0].status || "empty"}
                      </span>
                    ) : (
                      "empty"
                    )}
                  </td>
                  <td>
                    {haversineDistance(
                      requirement?.latitude,
                      requirement?.longitude
                    )}{" "}
                    KM
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleOpenAddQuotation(requirement?._id);
                      }}
                    >
                      Add/View Quotation
                    </button>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td colSpan="12" className="text-center py-4">
                No requirements found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav>
          <ul className="inline-flex items-center">
            {Array.from({
              length: Math.ceil(filteredRequirements.length / requirementsPerPage),
            }).map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-2 mx-1 ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500 border border-blue-500"
                  } rounded`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {openAddQuotation && (
        <AddQuotation closeModal={closeModal} requirementId={selectedRequirmentId} />
      )}
    </div>
  );
};

export default SellerRequirements;
