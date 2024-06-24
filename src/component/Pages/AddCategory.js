import React from "react";
import { useForm, Controller } from "react-hook-form";

const AddCategory = () => {
  const { handleSubmit, control } = useForm();

  return (
    <div className="add-product-form">
      <h2>Add Product Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="name"
            {...control.register("name", { required: true })}
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddCategory;
