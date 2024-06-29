import React from "react";

const SustainabilityGoals = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold leading-tight text-gray-800">
            Our Goals
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Job Creation */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-lg transform hover:scale-105 transition-transform hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-50"></div>
            <div className="p-6 flex flex-col justify-center items-center h-full text-center text-black relative z-10">
              <h3 className="text-lg font-semibold mb-2">Job Creation</h3>
              <p className="text-sm">
                Generating employment opportunities in rural and urban areas.
              </p>
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2: Reduce Carbon-di-Oxide Emission */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-green-200 shadow-lg transform hover:scale-105 transition-transform hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50"></div>
            <div className="p-6 flex flex-col justify-center items-center h-full text-center text-black relative z-10">
              <h3 className="text-lg font-semibold mb-2">
                Reduce Carbon-di-Oxide Emission
              </h3>
              <p className="text-sm">
                Implementing eco-friendly practices to reduce carbon footprint.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 3: Empowering Rural India */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg transform hover:scale-105 transition-transform hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50"></div>
            <div className="p-6 flex flex-col justify-center items-center h-full text-center text-black relative z-10">
              <h3 className="text-lg font-semibold mb-2">Empowering Rural India</h3>
              <p className="text-sm">
                Strengthening rural communities through sustainable initiatives.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 4: Mitigate Stubble Burning */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-red-100 to-red-200 shadow-lg transform hover:scale-105 transition-transform hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-50"></div>
            <div className="p-6 flex flex-col justify-center items-center h-full text-center text-black relative z-10">
              <h3 className="text-lg font-semibold mb-2">Mitigate Stubble Burning</h3>
              <p className="text-sm">
                Promoting alternatives to reduce agricultural residue burning.
              </p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityGoals;
