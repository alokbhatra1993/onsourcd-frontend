import React from "react";
import { FiBriefcase, FiActivity, FiUsers, FiAlertCircle } from "react-icons/fi";
import 'animate.css';

const SustainabilityGoals = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate__animated animate__fadeInDown">
          <h2 className="text-4xl font-bold leading-tight text-gray-800">
            Our Goals
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Job Creation */}
          <div className="relative rounded-lg overflow-hidden bg-white shadow-md transform hover:scale-105 transition-transform hover:shadow-xl animate__animated animate__fadeInUp animate__delay-1s">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-50"></div>
            <div className="p-6 flex flex-col justify-center items-center h-full text-center relative z-10">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-full mb-4">
                <FiBriefcase className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Job Creation</h3>
              <p className="text-sm text-gray-700">
                Generating employment opportunities in rural and urban areas.
              </p>
            </div>
          </div>

          {/* Card 2: Reduce Carbon-di-Oxide Emission */}
          <div className="relative rounded-lg overflow-hidden bg-white shadow-md transform hover:scale-105 transition-transform hover:shadow-xl animate__animated animate__fadeInUp animate__delay-1.5s">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50"></div>
            <div className="p-6 flex flex-col justify-center items-center h-full text-center relative z-10">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-full mb-4">
                <FiActivity className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Reduce CO2 Emission
              </h3>
              <p className="text-sm text-gray-700">
                Implementing eco-friendly practices to reduce carbon footprint.
              </p>
            </div>
          </div>

          {/* Card 3: Empowering Rural India */}
          <div className="relative rounded-lg overflow-hidden bg-white shadow-md transform hover:scale-105 transition-transform hover:shadow-xl animate__animated animate__fadeInUp animate__delay-2s">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50"></div>
            <div className="p-6 flex flex-col justify-center items-center h-full text-center relative z-10">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded-full mb-4">
                <FiUsers className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Empowering Rural India</h3>
              <p className="text-sm text-gray-700">
                Strengthening rural communities through sustainable initiatives.
              </p>
            </div>
          </div>

          {/* Card 4: Mitigate Stubble Burning */}
          <div className="relative rounded-lg overflow-hidden bg-white shadow-md transform hover:scale-105 transition-transform hover:shadow-xl animate__animated animate__fadeInUp animate__delay-2.5s">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-50"></div>
            <div className="p-6 flex flex-col justify-center items-center h-full text-center relative z-10">
              <div className="bg-gradient-to-r from-red-400 to-red-600 p-2 rounded-full mb-4">
                <FiAlertCircle className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mitigate Stubble Burning</h3>
              <p className="text-sm text-gray-700">
                Promoting alternatives to reduce agricultural residue burning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityGoals;
