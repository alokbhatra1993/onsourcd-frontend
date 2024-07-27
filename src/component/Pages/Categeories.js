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
    const data = await response.json();
    setCategoriesState(data?.categories);
  };

  return (
    <div className="categories p-8 bg-gray-100 min-h-screen w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Category List</h2>
        <Link
          to="/admin-dashboard/add-category"
          className="bg-[#f6b60d] text-black px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          Add Category
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#f6b60d]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider w-1/3">
                Index
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider w-1/3">
                Category Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider w-1/3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categoriesState.length > 0 ? (
              categoriesState.map((category, index) => (
                <tr key={category.id} className="hover:bg-gray-50 transition duration-300">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{category.name}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="bg-red-500 text-white px-2 py-1 text-xs rounded-lg shadow-md hover:bg-red-600 transition duration-300">
                        Delete
                      </button>
                      <button className="bg-[#f6b60d] text-black px-2 py-1 text-xs rounded-lg shadow-md hover:bg-[#e5a609] transition duration-300">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categeories;
