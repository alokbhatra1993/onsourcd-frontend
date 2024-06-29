import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { fetchSubCategories, fetchCategories } from "../services/api";
import { addProductApi } from "../services/api"; // Ensure this path is correct
import { FaSpinner } from "react-icons/fa6";

export const AddProductForm = () => {
  const navigate = useNavigate();

  const { handleSubmit, control, register, watch, formState: { errors } } = useForm();
  const [categoriesState, setCategoriesState] = useState([]);
  const [subCategoriesState, setSubCategoriesState] = useState([]);
  const [loading,setloading]=useState(false)
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
    console.log({data})
    setloading(true)
    const formData = new FormData();
    formData.append("name", data.productName);
    formData.append("categoryId", data.category);
    formData.append("subcategoryId", data.subcategory);
    formData.append("gst", data.gstNumber);
    formData.append("document", data.document[0]);

    console.log({formData})

    addProductApi(formData).then(response => {
      if (response.ok) {
        navigate("/admin-dashboard/products")
      } else {
        console.error("Failed to add product");
      }
      setloading(false)
    }).catch(error => {
      console.error("Error adding product:", error);
    });
   
  };

  return (
    <div className="add-product-form">
      <h2>Add Product Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Name */}
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            {...register("productName", { required: true })}
          />
          {errors.productName && <p>This field is required</p>}
        </div>

        {/* Product Image Upload */}
        <div className="form-group">
          <label htmlFor="document">Product Image</label>
          <input
            type="file"
            id="document"
            {...register("document", { required: true })}
          />
          {errors.document && <p>This field is required</p>}
        </div>

        {/* GST Number Input */}
        <div className="form-group">
          <label htmlFor="gstNumber">GST Number</label>
          <input
            type="number"
            id="gstNumber"
            {...register("gstNumber", { required: true })}
          />
          {errors.gstNumber && <p>This field is required</p>}
        </div>

        {/* Category Selection */}
        <div className="form-group">
          <label htmlFor="category">Choose Category:</label>
          <select
            id="category"
            {...register("category", { required: true })}
          >
            <option value="">Select Category</option>
            {categoriesState.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && <p>This field is required</p>}
        </div>

        {/* Subcategory Selection */}
        {selectedCategory && (
          <div className="form-group">
            <label htmlFor="subcategory">Choose Subcategory:</label>
            <select
              id="subcategory"
              {...register("subcategory", { required: true })}
            >
              <option value="">Select Subcategory</option>
              {subCategoriesState.map((subcategory) => (
                <option key={subcategory._id} value={subcategory._id}>
                  {subcategory.name}
                </option>
              ))}
            </select>
            {errors.subcategory && <p>This field is required</p>}
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" >  {loading?(<FaSpinner/>):" Add Product"}</button>
      </form>
    </div>
  );
};
