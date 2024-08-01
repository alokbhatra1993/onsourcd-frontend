import React, { useState } from "react";
import "animate.css";

const SellerBuyerTabs = () => {
  const [activeTab, setActiveTab] = useState("buyer");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="py-8 animate__animated animate__fadeIn">
      <div className="container mx-auto px-4">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg overflow-hidden animate__animated animate__fadeInUp">
            {/* Heading */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 py-2 px-6 rounded-t-lg text-center animate__animated animate__fadeInDown">
              <h2 className="text-2xl font-semibold text-white mb-0">
                Tell Us Your Requirement
              </h2>
            </div>
            {/* Tabs */}
            <div className="bg-white py-4 px-4 flex justify-center animate__animated animate__fadeIn">
              <div className="flex space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="hidden"
                    name="tab"
                    value="buyer"
                    checked={activeTab === "buyer"}
                    onChange={() => handleTabChange("buyer")}
                  />
                  <span
                    className={`tabButton ${
                      activeTab === "buyer"
                        ? "bg-yellow-600 text-white"
                        : "text-yellow-600 bg-gray-200 hover:bg-yellow-200"
                    } flex items-center justify-center h-10 px-6 text-sm font-medium rounded-md animate__animated animate__fadeIn`}
                  >
                    Buyer
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="hidden"
                    name="tab"
                    value="seller"
                    checked={activeTab === "seller"}
                    onChange={() => handleTabChange("seller")}
                  />
                  <span
                    className={`tabButton ${
                      activeTab === "seller"
                        ? "bg-yellow-600 text-white"
                        : "text-yellow-600 bg-gray-200 hover:bg-yellow-200"
                    } flex items-center justify-center h-10 px-6 text-sm font-medium rounded-md animate__animated animate__fadeIn`}
                  >
                    Seller
                  </span>
                </label>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-b-lg shadow-lg overflow-hidden p-6 animate__animated animate__fadeIn">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="category"
                      className="text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="border-gray-300 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500 w-full"
                    >
                      <option value="">Select Category</option>
                      {/* Add your category options here */}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="product"
                      className="text-sm font-medium text-gray-700"
                    >
                      Product
                    </label>
                    <select
                      id="product"
                      name="product"
                      className="border-gray-300 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500 w-full"
                    >
                      <option value="">Select Product</option>
                      {/* Add your product options here */}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="quantity"
                      className="text-sm font-medium text-gray-700"
                    >
                     Available Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      className="border-gray-300 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500 w-full"
                      placeholder="Enter Available Quantity"
                    />
                  </div>

                  {activeTab === "buyer" ? (
                    <div className="flex flex-col">
                      <label
                        htmlFor="pincode"
                        className="text-sm font-medium text-gray-700"
                      >
                        Pincode
                      </label>
                      <input
                        type="tel"
                        id="pincode"
                        name="pincode"
                        pattern="[0-9]{6}"
                        className="border-gray-300 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500 w-full"
                        placeholder="Enter Pincode"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <label
                        htmlFor="city"
                        className="text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="border-gray-300 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500 w-full"
                        placeholder="Enter City"
                      />
                    </div>
                  )}

                  <div className="flex flex-col">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-gray-700"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="border-gray-300 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500 w-full"
                      placeholder="Enter Company Name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border-gray-300 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500 w-full"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="mobile"
                      className="text-sm font-medium text-gray-700"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      pattern="[0-9]{10}"
                      className="border-gray-300 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500 w-full"
                      placeholder="Enter Mobile Number"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="pincode"
                      className="text-sm font-medium text-gray-700"
                    >
                      Pincode
                    </label>
                    <input
                      type="tel"
                      id="pincode"
                      name="pincode"
                      pattern="[0-9]{6}"
                      className="border-gray-300 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500 w-full"
                      placeholder="Enter Pincode"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md mt-4 focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500 w-full animate__animated animate__fadeInUp"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerBuyerTabs;
