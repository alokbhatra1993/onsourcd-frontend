import React, { useEffect, useState } from "react";
import { fetchCategories, addCategory, fetchSubCategories } from "../../services/api";
import { toast } from "react-toastify";

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
      `http://localhost:5000/api/products/sub-category`,
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

  return (
    <div className="categories p-8 bg-gray-100 min-h-screen w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Category List</h2>
        <button
          onClick={() => setShowAddCategoryModal(true)}
          className="bg-[#f6b60d] text-black px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300"
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
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{category.name}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="bg-red-500 text-white px-2 py-1 text-xs rounded-lg shadow-md hover:bg-red-600 transition duration-300">
                        Delete
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => handleShowSubcategories(category?._id, category?.name)}
                      className="text-blue-500 hover:underline"
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
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add New Category</h2>
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Enter category name"
              className="border border-gray-300 p-2 rounded-lg w-full mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setShowAddCategoryModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCategory}
                className="bg-[#f6b60d] text-black px-4 py-2 rounded-lg shadow-md hover:bg-[#e5a609] transition duration-300"
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subcategories Modal */}
      {showSubcategoriesModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex">
              <input
                type="text"
                value={newSubcategoryName}
                onChange={(e) => setNewSubcategoryName(e.target.value)}
                placeholder="Subcategory name"
                required
                className="border border-gray-300 p-2 rounded-lg w-full mb-4"
              />
              <button
                onClick={addNewSubCategory}
                className="ml-2 bg-[#f6b60d] text-black px-4 py-2 rounded-lg shadow-md hover:bg-[#e5a609] transition duration-300"
              >
                + New
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4">{currentCategoryName} - Subcategories</h2>
            {subcategoriesState.length > 0 ? (
              <ul className="list-disc list-inside text-gray-600">
                {subcategoriesState.map((subcategory) => (
                  <li key={subcategory._id}>{subcategory.name}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No subcategories found.</p>
            )}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowSubcategoriesModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
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
