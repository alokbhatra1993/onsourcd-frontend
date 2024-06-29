import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addRequirement, fetchProductApi } from "../../services/api";
import { useSelector } from "react-redux";
import { fetchAddress } from "../../services/googleApi";

import { FaSpinner } from "react-icons/fa6";
import { Toast, ToastBody } from "react-bootstrap";

const AddRequirements = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state);

  const [detectLocationLoading, setDetectLocationLoading] = useState(false);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
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
  }, []);

  const detectLocation = async () => {
    setDetectLocationLoading(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const locationAddress =
            (await fetchAddress(latitude, longitude)) || "";
          const { address_components, formatted_address } = locationAddress;
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

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <ToastBody />
      <h2 className="text-3xl font-bold text-center mb-6">Add Requirements</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Product</label>
            <select
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
            {errors.productId && (
              <span className="text-red-500 text-sm">Product is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Minimum Amount
            </label>
            <input
              {...register("minimumAmount", { required: true })}
              type="number"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.minimumAmount && (
              <span className="text-red-500 text-sm">
                Minimum amount is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Maximum Amount
            </label>
            <input
              {...register("maximumAmount", { required: true })}
              type="number"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.maximumAmount && (
              <span className="text-red-500 text-sm">
                Maximum amount is required
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Frequency</label>
            <select
              {...register("frequency", { required: true })}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="OneTime">One Time</option>
            </select>
            {errors.frequency && (
              <span className="text-red-500 text-sm">
                Frequency is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Expected Start Date
            </label>
            <input
              {...register("expectedStartDate", { required: true })}
              type="date"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.expectedStartDate && (
              <span className="text-red-500 text-sm">
                Expected start date is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Expected End Date
            </label>
            <input
              {...register("expectedEndDate", { required: true })}
              type="date"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.expectedEndDate && (
              <span className="text-red-500 text-sm">
                Expected end date is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Quantity</label>
            <input
              {...register("quantity", { required: true })}
              type="number"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.quantity && (
              <span className="text-red-500 text-sm">Quantity is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Delivery Address
            </label>
            <input
              {...register("deliveryAddress", { required: true })}
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.expectedStartDate && (
              <span className="text-red-500 text-sm">
                Delivery Address is required
              </span>
            )}
          </div>
          <div className="mb-4 flex items-end">
            <button
              type="button"
              onClick={detectLocation}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {detectLocationLoading ? <FaSpinner /> : "Detect Location"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Delivery City
            </label>
            <input
              {...register("deliveryCity", { required: true })}
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
            {errors.deliveryCity && (
              <span className="text-red-500 text-sm">City is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Delivery State
            </label>
            <input
              {...register("deliveryState", { required: true })}
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
            {errors.deliveryState && (
              <span className="text-red-500 text-sm">State is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Delivery Zip Code
            </label>
            <input
              {...register("deliveryZipCode", { required: true })}
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
            {errors.deliveryZipCode && (
              <span className="text-red-500 text-sm">
                Zip Code is required
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            {...register("description")}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {loading ? <FaSpinner /> : <>Submit</>}
        </button>
      </form>
    </div>
  );
};

export default AddRequirements;
