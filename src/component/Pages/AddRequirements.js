import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addRequirement, fetchProductApi, fetchCategories } from "../../services/api";
import { useSelector } from "react-redux";
import { fetchAddress } from "../../services/googleApi";
import { FaSpinner } from "react-icons/fa6";
import { Toast, ToastBody } from "react-bootstrap";

const AddRequirements = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state);

  const [detectLocationLoading, setDetectLocationLoading] = useState(false);
  const [categoriesState, setCategoriesState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalOrders, setTotalOrders] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const [products, setProducts] = useState([]);
  const [location, setLocation] = useState({
    city: "",
    state: "",
    zipCode: "",
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetchProductApi();
        if (response.ok) {
          const data = await response.json();
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    loadProducts();
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const response = await fetchCategories();
      const data = await response.json();
      setCategoriesState(data?.categories || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const detectLocation = async () => {
    setDetectLocationLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const locationAddress = (await fetchAddress(latitude, longitude)) || "";
          const { address_components } = locationAddress;
          setValue("latitude", latitude);
          setValue("longitude", longitude);
          setValue("deliveryState", address_components[4].long_name);
          setValue("deliveryCity", address_components[2].long_name);
          setValue("deliveryZipCode", address_components[6].long_name);
          setDetectLocationLoading(false);
        },
        (error) => {
          setDetectLocationLoading(false);
          console.log({ error });
        }
      );
    } else {
      Toast.error("Something went wrong");
    }
  };

  const calculateTotalOrders = (start, end, frequency) => {
    if (start && end && frequency) {
      const startDate = new Date(start);
      const endDate = new Date(end);
      const timeDiff = endDate - startDate;
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // +1 to include both start and end dates

      if (dayDiff >= 0) {
        let totalOrders = 0;
        switch (frequency) {
          case "Daily":
            totalOrders = dayDiff;
            break;
          case "Weekly":
            totalOrders = Math.ceil(dayDiff / 7);
            break;
          case "Monthly":
            totalOrders = Math.ceil(dayDiff / 30);
            break;
          case "OneTime":
            totalOrders = 1;
            break;
          default:
            totalOrders = 0;
        }
        setTotalOrders(totalOrders);
      } else {
        setTotalOrders(0);
      }
    } else {
      setTotalOrders(0);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const saveRequirementResponse = await addRequirement(data, user?.token);
    if (saveRequirementResponse?.ok) {
      setLoading(false);
      navigate("/customer/requirements");
    } else {
      // show error message
    }
  };

  const handleStartDateChange = (e) => {
    const value = e.target.value;
    setStartDate(value);
    setValue("expectedStartDate", value);
    calculateTotalOrders(value, endDate, getValues("frequency"));
  };

  const handleEndDateChange = (e) => {
    const value = e.target.value;
    setEndDate(value);
    setValue("expectedEndDate", value);
    calculateTotalOrders(startDate, value, getValues("frequency"));
  };

  const handleFrequencyChange = (e) => {
    const value = e.target.value;
    setValue("frequency", value);
    calculateTotalOrders(startDate, endDate, value);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <ToastBody />
      <h2 className="text-3xl font-bold text-center mb-6">Add Requirements</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Category</label>
            <select
              id="category"
              {...register("category", { required: true })}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              {categoriesState.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && <span className="text-red-500 text-sm">Category is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="product" className="block text-gray-700 font-medium mb-2">Product</label>
            <select
              id="product"
              {...register("productId", { required: true })}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.name}
                </option>
              ))}
            </select>
            {errors.productId && <span className="text-red-500 text-sm">Product is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="totalOrders" className="block text-gray-700 font-medium mb-2">Total Orders</label>
            <input
              id="totalOrders"
              {...register("totalOrders")}
              type="number"
              value={totalOrders}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div className="mb-4">
            <label htmlFor="minimumAmount" className="block text-gray-700 font-medium mb-2">Minimum Amount</label>
            <input
              id="minimumAmount"
              {...register("minimumAmount", { required: true })}
              type="number"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.minimumAmount && <span className="text-red-500 text-sm">Minimum amount is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="maximumAmount" className="block text-gray-700 font-medium mb-2">Maximum Amount</label>
            <input
              id="maximumAmount"
              {...register("maximumAmount", { required: true })}
              type="number"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.maximumAmount && <span className="text-red-500 text-sm">Maximum amount is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="frequency" className="block text-gray-700 font-medium mb-2">Frequency</label>
            <select
              id="frequency"
              {...register("frequency", { required: true })}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleFrequencyChange}
            >
              <option value="">Select frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="OneTime">One Time</option>
            </select>
            {errors.frequency && <span className="text-red-500 text-sm">Frequency is required</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div className="mb-4">
            <label htmlFor="expectedStartDate" className="block text-gray-700 font-medium mb-2">Expected Start Date</label>
            <input
              id="expectedStartDate"
              {...register("expectedStartDate", { required: true })}
              type="date"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleStartDateChange}
            />
            {errors.expectedStartDate && <span className="text-red-500 text-sm">Start date is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="expectedEndDate" className="block text-gray-700 font-medium mb-2">Expected End Date</label>
            <input
              id="expectedEndDate"
              {...register("expectedEndDate", { required: true })}
              type="date"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleEndDateChange}
            />
            {errors.expectedEndDate && <span className="text-red-500 text-sm">End date is required</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="mb-4">
            <label htmlFor="deliveryCity" className="block text-gray-700 font-medium mb-2">City</label>
            <input
              id="deliveryCity"
              {...register("deliveryCity", { required: true })}
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.deliveryCity && <span className="text-red-500 text-sm">City is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="deliveryState" className="block text-gray-700 font-medium mb-2">State</label>
            <input
              id="deliveryState"
              {...register("deliveryState", { required: true })}
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.deliveryState && <span className="text-red-500 text-sm">State is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="deliveryZipCode" className="block text-gray-700 font-medium mb-2">Zip Code</label>
            <input
              id="deliveryZipCode"
              {...register("deliveryZipCode", { required: true })}
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.deliveryZipCode && <span className="text-red-500 text-sm">Zip code is required</span>}
          </div>

          <div className="mb-4">
            <button
              type="button"
              className="w-full mt-2 p-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center"
              onClick={detectLocation}
              disabled={detectLocationLoading}
            >
              {detectLocationLoading ? <FaSpinner className="animate-spin" /> : "Detect Location"}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRequirements;
