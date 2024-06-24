import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../services/api";
import { Link } from "react-router-dom";

const Categeories = () => {
  const [categoriesState, setCategoriesState] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const response = await fetchCategories();
    console.log({ response });
    const data = await response.json();
    console.log({data});
    setCategoriesState(data?.categories);
  };

  return (
    <div className="products">
      <div className="justify-content">
        <h2>Product List</h2>
        <Link to="/admin-dashboard/add-category">Add Category</Link>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoriesState.length > 0 ? (
            <>
              {categoriesState.map((category, index) => (
                <tr key={category.id}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>
                    <button>Delete</button>
                    <button>Edit</button>
                    {/* <button></button> */}
                  </td>
                </tr>
              ))}
            </>
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default Categeories;
