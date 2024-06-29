import React, { useState } from "react";

const B2BSection = () => {
  const [activeTab, setActiveTab] = useState("buyer");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/girl-is-picking-lettuce-into-basket-nursery_1150-17274.jpg?t=st=1719552761~exp=1719556361~hmac=84074d4ee6e0b51eee990e1a00f1caab1dca9be3595845b1d7965a2c9e303645&w=900')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold leading-tight text-white">
            Why Buyers Choose Us
          </h2>
        </div>
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => handleTabChange("buyer")}
            className={`${
              activeTab === "buyer"
                ? "bg-white text-black w-40"
                : "bg-yellow-200 text-gray-800 w-40"
            } py-2 px-4 md:px-6 rounded-l-lg focus:outline-none hover:bg-yellow-600 transition duration-300`}
          >
            Buyer
          </button>
          <button
            onClick={() => handleTabChange("supplier")}
            className={`${
              activeTab === "supplier"
                ? "bg-yellow-500 text-white w-40"
                : "bg-yellow-200 text-gray-800 w-40"
            } py-2 px-4 md:px-6 rounded-r-lg focus:outline-none hover:bg-yellow-600 transition duration-300`}
          >
            Supplier
          </button>
        </div>
        {/* Accordion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeTab === "buyer" && (
            <>
              {/* Buyer Card 1: Get Lowest Price */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <h3 className="text-lg font-semibold mb-2 text-black">Get Lowest Price</h3>
                  <p className="text-sm text-black">
                    Get rates at least 1% lower than the existing market rates.
                  </p>
                </div>
              </div>

              {/* Buyer Card 2: Get Credit */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <h3 className="text-lg font-semibold mb-2 text-black">Get Credit</h3>
                  <p className="text-sm text-black">
                    Do not worry about working capital. Grow with our credit.
                  </p>
                </div>
              </div>

              {/* Buyer Card 3: Additional Buyer Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <h3 className="text-lg font-semibold mb-2 text-black">Additional Buyer Card</h3>
                  <p className="text-sm text-black">
                    Additional content for the buyer tab.
                  </p>
                </div>
              </div>

              {/* Buyer Card 4: Another Buyer Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <h3 className="text-lg font-semibold mb-2 text-black">Another Buyer Card</h3>
                  <p className="text-sm text-black">
                    More content for the buyer tab.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === "supplier" && (
            <>
              {/* Supplier Card 1: Expand Your Reach */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <h3 className="text-lg font-semibold mb-2 text-black">Expand Your Reach</h3>
                  <p className="text-sm text-black">
                    Reach more customers with our supplier network.
                  </p>
                </div>
              </div>

              {/* Supplier Card 2: Supplier Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <h3 className="text-lg font-semibold mb-2 text-black">Supplier Card</h3>
                  <p className="text-sm text-black">
                    Content for the supplier tab.
                  </p>
                </div>
              </div>

              {/* Supplier Card 3: Additional Supplier Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <h3 className="text-lg font-semibold mb-2 text-black">Additional Supplier Card</h3>
                  <p className="text-sm text-black">
                    More content for the supplier tab.
                  </p>
                </div>
              </div>

              {/* Supplier Card 4: Another Supplier Card */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <h3 className="text-lg font-semibold mb-2 text-black">Another Supplier Card</h3>
                  <p className="text-sm text-black">
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
