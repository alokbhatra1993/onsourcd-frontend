import React, { useState } from "react";
import { FiDollarSign, FiCreditCard, FiUsers, FiTrendingUp, FiShoppingCart, FiPackage } from "react-icons/fi";

const B2BSection = () => {
  const [activeTab, setActiveTab] = useState("buyer");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getHeadingText = () => {
    return activeTab === "buyer" ? "Why Buyers Choose Us" : "Why Suppliers Choose Us";
  };

  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/2132118/pexels-photo-2132118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold leading-tight text-white">
            {getHeadingText()}
          </h2>
        </div>
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => handleTabChange("buyer")}
            className={`${
              activeTab === "buyer"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white w-40 shadow-lg"
                : "bg-yellow-200 text-gray-800 w-40"
            } py-2 px-4 md:px-6 rounded-l-lg focus:outline-none hover:bg-yellow-600 transition duration-300 transform hover:scale-105`}
          >
            Buyer
          </button>
          <button
            onClick={() => handleTabChange("supplier")}
            className={`${
              activeTab === "supplier"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white w-40 shadow-lg"
                : "bg-yellow-200 text-gray-800 w-40"
            } py-2 px-4 md:px-6 rounded-r-lg focus:outline-none hover:bg-yellow-600 transition duration-300 transform hover:scale-105`}
          >
            Supplier
          </button>
        </div>
        {/* Accordion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeTab === "buyer" && (
            <>
              {/* Buyer Card 1: Get Lowest Price */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <FiDollarSign className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Get Lowest Price</h3>
                  <p className="text-sm text-gray-700">
                    Get rates at least 1% lower than the existing market rates.
                  </p>
                </div>
              </div>

              {/* Buyer Card 2: Get Credit */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <FiCreditCard className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Get Credit</h3>
                  <p className="text-sm text-gray-700">
                    Do not worry about working capital. Grow with our credit.
                  </p>
                </div>
              </div>

              {/* Buyer Card 3: Additional Buyer Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <FiUsers className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Additional Buyer Card</h3>
                  <p className="text-sm text-gray-700">
                    Additional content for the buyer tab.
                  </p>
                </div>
              </div>

              {/* Buyer Card 4: Another Buyer Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <FiShoppingCart className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Another Buyer Card</h3>
                  <p className="text-sm text-gray-700">
                    More content for the buyer tab.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === "supplier" && (
            <>
              {/* Supplier Card 1: Expand Your Reach */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <FiTrendingUp className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Expand Your Reach</h3>
                  <p className="text-sm text-gray-700">
                    Reach more customers with our supplier network.
                  </p>
                </div>
              </div>

              {/* Supplier Card 2: Supplier Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <FiPackage className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Supplier Card</h3>
                  <p className="text-sm text-gray-700">
                    Content for the supplier tab.
                  </p>
                </div>
              </div>

              {/* Supplier Card 3: Additional Supplier Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <FiUsers className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Additional Supplier Card</h3>
                  <p className="text-sm text-gray-700">
                    More content for the supplier tab.
                  </p>
                </div>
              </div>

              {/* Supplier Card 4: Another Supplier Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <FiShoppingCart className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Another Supplier Card</h3>
                  <p className="text-sm text-gray-700">
                    Additional content for the supplier tab.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
