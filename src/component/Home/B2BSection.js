import React, { useState } from "react";
import { MdAttachMoney, MdCreditCard, MdVerifiedUser, MdLocalShipping, MdTrendingUp, MdLocalOffer, MdPeople } from "react-icons/md";

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
                ? "bg-white text-gray-800 w-40 shadow-lg border border-gray-300"
                : "bg-yellow-200 text-gray-800 w-40"
            } py-2 px-4 md:px-6 rounded-r-lg focus:outline-none hover:bg-white hover:border-gray-300 transition duration-300 transform hover:scale-105`}
          >
            Supplier
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeTab === "buyer" && (
            <>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <MdAttachMoney className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">No Subscription Fees</h3>
                  <p className="text-sm text-gray-700">
                    Generate Quotes without any Subscription Charges
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <MdCreditCard className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Get Lowest Prices</h3>
                  <p className="text-sm text-gray-700">
                    Choose the most Competitive Prices from our Sellers.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <MdVerifiedUser className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Quality Assurance</h3>
                  <p className="text-sm text-gray-700">
                    Ensure Quality with Products that are thoroughly verified.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <MdLocalShipping className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Logistics Support</h3>
                  <p className="text-sm text-gray-700">
                    Simplify your Operations with our Logistics Support.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === "supplier" && (
            <>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <MdTrendingUp className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Expand Your Reach</h3>
                  <p className="text-sm text-gray-700">
                    Reach more customers with our supplier network.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <MdLocalOffer className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Exclusive Offers</h3>
                  <p className="text-sm text-gray-700">
                    Access special deals and promotions.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <MdPeople className="text-3xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Community Support</h3>
                  <p className="text-sm text-gray-700">
                    Join a community of like-minded suppliers.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="p-6 flex flex-col justify-center items-center h-full text-center">
                  <div className="bg-yellow-500 p-4 rounded-full mb-4">
                    <MdLocalShipping className="text-3xl text-white" />
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
