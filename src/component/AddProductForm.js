import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchSubCategories, fetchCategories } from "../services/api";
import { addProductApi } from "../services/api"; // Ensure this path is correct
import { FaSpinner } from "react-icons/fa6";

export const AddProductForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, register, watch, formState: { errors } } = useForm({
    defaultValues: {
      commission: 0, // Set default value for commission
    }
  });
  const [categoriesState, setCategoriesState] = useState([]);
  const [subCategoriesState, setSubCategoriesState] = useState([]);
  const [loading, setLoading] = useState(false);
  const selectedCategory = watch("category");

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      loadSubCategories(selectedCategory);
    }
  }, [selectedCategory]);

  const loadCategories = async () => {
    try {
      const response = await fetchCategories();
      const data = await response.json();
      setCategoriesState(data?.categories || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const loadSubCategories = async (categoryId) => {
    try {
      const response = await fetchSubCategories(categoryId);
      const data = await response.json();
      setSubCategoriesState(data?.subCategories || []);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  // Form submission handler
  const onSubmit = (data) => {
    console.log({ data });
    setLoading(true);
    const formData = new FormData();
    formData.append("name", data.productName);
    formData.append("categoryId", data.category);
    formData.append("subcategoryId", data.subcategory);
    formData.append("gst", data.gstNumber);
    formData.append("document", data.document[0]);
    formData.append("commission", data.commission);

    console.log({ formData });

    addProductApi(formData).then(response => {
      if (response.ok) {
        navigate("/admin-dashboard/products");
      } else {
        console.error("Failed to add product");
      }
      setLoading(false);
    }).catch(error => {
      console.error("Error adding product:", error);
      setLoading(false);
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add Product Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Product Name */}
          <div className="form-group">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              id="productName"
              {...register("productName", { required: true })}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
            {errors.productName && <p className="text-red-600 text-xs">This field is required</p>}
          </div>

          {/* Product Image Upload */}
          <div className="form-group">
            <label htmlFor="document" className="block text-sm font-medium text-gray-700">Product Image</label>
            <input
              type="file"
              id="document"
              {...register("document", { required: true })}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
            {errors.document && <p className="text-red-600 text-xs">This field is required</p>}
          </div>

          {/* GST Number Input */}
          <div className="form-group">
            <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700">GST Price</label>
            <input
              min={0}
              type="number"
              id="gstNumber"
              {...register("gstNumber", { required: true, min: 0 , max:100 })}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
            {errors.gstNumber && <p className="text-red-600 text-xs">This field is required</p>}
          </div>

          {/* Commission Input */}
          <div className="form-group">
            <label htmlFor="commission" className="block text-sm font-medium text-gray-700">% Commission</label>
            <input
              min={0}
              max={100}
              type="number"
              id="commission"
              defaultValue={0} // Set default value to 0
              {...register("commission", { required: true })}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
            {errors.commission && <p className="text-red-600 text-xs">This field is required</p>}
          </div>

          {/* Category Selection */}
          <div className="form-group">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Choose Category:</label>
            <select
              id="category"
              {...register("category", { required: true })}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            >
              <option value="">Select Category</option>
              {categoriesState.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && <p className="text-red-600 text-xs">This field is required</p>}
          </div>

          {/* Subcategory Selection */}
          {selectedCategory && (
            <div className="form-group">
              <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">Choose Subcategory:</label>
              <select
                id="subcategory"
                {...register("subcategory", { required: true })}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              >
                <option value="">Select Subcategory</option>
                {subCategoriesState.map((subcategory) => (
                  <option key={subcategory._id} value={subcategory._id}>
                    {subcategory.name}
                  </option>
                ))}
              </select>
              {errors.subcategory && <p className="text-red-600 text-xs">This field is required</p>}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 flex items-center justify-center"
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};
