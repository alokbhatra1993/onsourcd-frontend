import React, { useEffect, useState } from "react";
import { fetchCategories, addCategory, fetchSubCategories } from "../../services/api";
import { toast, ToastContainer } from "react-toastify";

const Categories = () => {
  const [categoriesState, setCategoriesState] = useState([]);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showSubcategoriesModal, setShowSubcategoriesModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [subcategoriesState, setSubcategoriesState] = useState([]);
  const [currentCategoryName, setCurrentCategoryName] = useState("");
  const [newSubcategoryName, setNewSubcategoryName] = useState("");
  const [currentCategoryId, setCurrentCategoryId] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const response = await fetchCategories();
    const data = await response.json();
    setCategoriesState(data?.categories);
  };

  const handleAddCategory = async () => {
    await addCategory(newCategoryName);
    setShowAddCategoryModal(false);
    loadCategories(); // Reload categories after adding
  };

  const handleShowSubcategories = async (categoryId, categoryName) => {
    const response = await fetchSubCategories(categoryId);
    const data = await response.json();
    setSubcategoriesState(data?.subCategories);
    setCurrentCategoryName(categoryName);
    setCurrentCategoryId(categoryId);
    setShowSubcategoriesModal(true); // Show modal
  };

  const addNewSubCategory = async () => {
    if (!newSubcategoryName.trim()) {
      toast.error("Subcategory name cannot be blank");
      return;
    }

    const response = await fetch(
      `https://onsourcd-backend.vercel.app/api/products/sub-category`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newSubcategoryName, categoryId: currentCategoryId }),
      }
    );

    if (response.ok) {
      // Clear input and refresh subcategories
      setNewSubcategoryName("");
      handleShowSubcategories(currentCategoryId, currentCategoryName);
    } else {
      toast.error("Failed to add subcategory");
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(
        `https://onsourcd-backend.vercel.app/api/products/category/${categoryId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success("Category deleted");
        loadCategories()
      } else {
        toast.error("Failed to add subcategory");
      }

    } catch (error) {
      toast.error("Failed to add subcategory");

    }
  }

  return (
    <div className="categories p-8 bg-gray-100 min-h-screen w-full">
      <ToastContainer />
      <div className="flex justify-between items-center mb-8 p-4 bg-white shadow rounded-lg">
  <h2 className="text-lg font-semibold text-gray-700">Category List</h2>
  <button
    onClick={() => setShowAddCategoryModal(true)}
    className="bg-[#f6b60d] text-black px-4 py-1 text-sm rounded-md shadow hover:bg-yellow-500 hover:text-white transition duration-300 transform hover:-translate-y-1 hover:scale-105"
    style={{ width: '200px' }}
  >
    Add Category
  </button>
</div>




      {/* Category Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#f6b60d]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider w-1/4">
                Index
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider w-1/4">
                Category Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider w-1/4">
                Actions
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider w-1/4">
                Subcategories
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
  {categoriesState.length > 0 ? (
    categoriesState.map((category, index) => (
      <tr key={category.id} className="hover:bg-gray-50 transition duration-300">
        <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{index + 1}</td>
        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-700">{category.name}</td>
        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
          <div className="flex space-x-4">
            <button
              onClick={() => {
                deleteCategory(category?._id);
              }}
              className="bg-red-500 text-white px-4 py-2 text-xs font-bold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </div>
        </td>
        <td className="px-4 py-4 whitespace-nowrap text-sm">
          <button
            onClick={() => handleShowSubcategories(category?._id, category?.name)}
            className="text-black-500 text-xs hover:text-blue-700 hover:underline transition duration-300 font-medium"
          >
            View Subcategories
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
        No categories found.
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>

      {/* Add Category Modal */}
      {showAddCategoryModal && (
      <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex justify-center items-center">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-extrabold mb-6 text-gray-800">Add New Category</h2>
        <input
          type="text"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="Enter category name"
          className="border border-gray-300 p-3 rounded-lg w-full mb-6 text-gray-700 focus:outline-none focus:border-[#f6b60d] focus:ring-1 focus:ring-[#f6b60d] transition duration-300"
        />
        <div className="flex justify-end">
          <button
            onClick={() => setShowAddCategoryModal(false)}
            className="bg-red-500 text-white px-3 py-2 text-sm rounded-lg shadow-md hover:bg-red-600 transition duration-300 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleAddCategory}
            className="bg-[#f6b60d] text-black px-3 py-2 text-sm rounded-lg shadow-md hover:bg-[#e5a609] transition duration-300"
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
    
      )}

      {/* Subcategories Modal */}
      {showSubcategoriesModal && (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full relative">
        <button
          onClick={() => setShowSubcategoriesModal(false)}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 w-8 h-8 flex items-center justify-center hover:bg-red-600 transition duration-300 focus:outline-none"
        >
          ✕
        </button>
        <div className="flex mb-4">
          <input
            type="text"
            value={newSubcategoryName}
            onChange={(e) => setNewSubcategoryName(e.target.value)}
            placeholder="Enter new subcategory"
            required
            className="border border-gray-300 p-3 rounded-l-lg w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
          <button
            onClick={addNewSubCategory}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-3 rounded-r-lg shadow-md hover:from-yellow-500 hover:to-yellow-600 transition duration-300 focus:outline-none"
          >
            + Add
          </button>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">{currentCategoryName} - Subcategories</h2>
        {subcategoriesState.length > 0 ? (
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {subcategoriesState.map((subcategory) => (
              <li key={subcategory._id} className="pl-4">{subcategory.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No subcategories found.</p>
        )}
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setShowSubcategoriesModal(false)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    
      )}
    </div>
  );
};

export default Categories;
