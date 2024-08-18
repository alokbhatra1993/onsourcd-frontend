import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { fetchNewRequirements } from "../../services/api";
import { useSelector } from "react-redux";
import AddQuotation from "./AddQuotation";
import { toast, ToastContainer } from "react-toastify";
import DataTable from "react-data-table-component";

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

  // Search and filter state
  const [searchId, setSearchId] = useState("");
  const [searchProductName, setSearchProductName] = useState(""); // New state for product name
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    loadNewRequirements();
    fethCurrentCordinates();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [myRequirements, searchId, searchProductName, startDate, endDate]);

  const loadNewRequirements = async () => {
    try {
      const response = await fetchNewRequirements(user?.token);
      const results = await response.json();
      console.log({ results });

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

    if (searchProductName) {
      filtered = filtered.filter((req) =>
        req.productId.name.toLowerCase().includes(searchProductName.toLowerCase())
      );
    }

    if (startDate) {
      filtered = filtered.filter(
        (req) => req.expectedStartDate?.slice(0, 10) >= startDate
      );
    }

    if (endDate) {
      filtered = filtered.filter(
        (req) => req.expectedEndDate?.slice(0, 10) <= endDate
      );
    }

    setFilteredRequirements(filtered);
  };


  const resetFilter = () => {
    // setFilteredRequirements([])
    setSearchProductName("")
    setSearchId("")
    setStartDate("")
    setEndDate("")
  }

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

  // Define columns for DataTable
  const columns = [
    {
      name: 'Requirement Id',
      selector: row => row._id,
      cell: row => (
        <span
          data-tooltip-id={`id-tooltip-${row._id}`}
          data-tooltip-content={row._id}
          className="text-gray-600 underline cursor-pointer"
        >
          {row._id?.slice(0, 4)}...
          <Tooltip id={`id-tooltip-${row._id}`} place="top" clickable={true} />
        </span>
      ),
    },
    {
      name: 'Product Name',
      selector: row => row.productId.name,
    },
    {
      name: 'Product Image',
      cell: row => (
        <img
          src={row.productId.image}
          alt={row.productId.name}
          className="w-24 h-24 object-cover"
        />
      ),
    },
    {
      name: 'Quantity (MT)',
      selector: row => row.quantity,
    },
    {
      name: 'Frequency',
      selector: row => row.frequency,
    },
    {
      name: 'Total Orders',
      selector: row => row.totalOrders,
    },
    {
      name: 'Expected Start Date',
      selector: row => row.expectedStartDate?.slice(0, 10),
    },
    {
      name: 'Expected End Date',
      selector: row => row.expectedEndDate?.slice(0, 10),
    },
    {
      name: 'Description',
      cell: row => (
        <span
          data-tooltip-id={`desc-tooltip-${row._id}`}
          data-tooltip-content={row.description}
        >
          {row.description?.slice(0, 20)}...
          <Tooltip id={`desc-tooltip-${row._id}`} place="top" clickable={true} />
        </span>
      ),
    },
    {
      name: 'Quotation Status',
      cell: row => (
        <span
          className={
            row.quotations && row.quotations[0]
              ? row.quotations[0].status === "pending"
                ? "text-orange-600"
                : row.quotations[0].status === "accepted"
                  ? "text-green-600"
                  : "text-red-600"
              : "text-gray-500"
          }
        >
          {row.quotations && row.quotations[0] ? row.quotations[0].status : "No quotation"}
        </span>
      ),
    },
    {
      name: 'Area Range',
      cell: row => `${haversineDistance(row.latitude, row.longitude)} km`,
    },
    {
      name: 'Actions',
      cell: row => (
        <button
          onClick={() => handleOpenAddQuotation(row._id)}
          className="bg-yellow-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-600 transition"
        >
          Add/View Quotation
        </button>
      ),
    },
  ];

  return (
    <div className="p-4">
      <ToastContainer />
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-700">New Requirements</h2>
      </div>

      <div className="mb-4 flex space-x-4 items-center">
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border border-gray-300 rounded p-2 w-1/4"
        />
        <input
          type="text"
          placeholder="Search by Product Name" // New search input
          value={searchProductName}
          onChange={(e) => setSearchProductName(e.target.value)}
          className="border border-gray-300 rounded p-2 w-1/4"
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border border-gray-300 rounded p-2"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border border-gray-300 rounded p-2"
        />
        <button
          onClick={resetFilter}
          className="bg-yellow-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-600 transition"
        >
          Reset
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full">
          <DataTable
            columns={columns}
            data={filteredRequirements}
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 20]}
            highlightOnHover
            responsive
            striped
            customStyles={{
              headRow: {
                style: {
                  backgroundColor: "#f8fafc",
                  fontWeight: "bold",
                },
              },
              rows: {
                style: {
                  minHeight: "72px",
                },
              },
            }}
          />
        </div>
      </div>

      {openAddQuotation && (
        <AddQuotation
          isOpen={openAddQuotation}
          closeModal={closeModal}
          requirementId={selectedRequirmentId}
        />
      )}
    </div>
  );
};

export default SellerRequirements;
