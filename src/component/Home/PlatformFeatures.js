import React from "react";
import { FaDollarSign, FaTools, FaTruck, FaSyncAlt } from "react-icons/fa";
import 'animate.css';
import { Link } from 'react-router-dom';

const PlatformFeatures = () => {
  return (
    <section className="py-8 md:py-20 bg-cover bg-center animate__animated animate__fadeIn" style={{ backgroundImage: 'url("https://images.pexels.com/photos/3083008/pexels-photo-3083008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white animate__animated animate__bounceInDown">
            Get Quotes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Card 1: Competitive Pricing */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 md:p-6 transition-transform transform hover:scale-105 animate__animated animate__fadeInUp">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-800 p-3 md:p-4 rounded-full mr-3 md:mr-4">
                <FaDollarSign className="text-white text-2xl md:text-3xl" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">Competitive Pricing</h3>
            </div>
            <p className="text-sm md:text-base text-gray-700">Get competitive pricing from suppliers to minimize your procurement costs.</p>
          </div>

          {/* Card 2: Customized Solutions */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 md:p-6 transition-transform transform hover:scale-105 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-800 p-3 md:p-4 rounded-full mr-3 md:mr-4">
                <FaTools className="text-white text-2xl md:text-3xl" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">Customized Solutions</h3>
            </div>
            <p className="text-sm md:text-base text-gray-700">Tailored solutions to meet your specific needs.</p>
          </div>

          {/* Card 3: Logistics */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 md:p-6 transition-transform transform hover:scale-105 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-800 p-3 md:p-4 rounded-full mr-3 md:mr-4">
                <FaTruck className="text-white text-2xl md:text-3xl" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">Logistics</h3>
            </div>
            <p className="text-sm md:text-base text-gray-700">Efficient and reliable logistics support.</p>
          </div>

          {/* Card 4: Frequency */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 md:p-6 transition-transform transform hover:scale-105 animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-800 p-3 md:p-4 rounded-full mr-3 md:mr-4">
                <FaSyncAlt className="text-white text-2xl md:text-3xl" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">Frequency</h3>
            </div>
            <p className="text-sm md:text-base text-gray-700">Regular updates and communication frequency.</p>
          </div>
        </div>

        {/* Register Now Button */}
        <div className="flex justify-center mt-8 md:mt-12">
          <Link to="/signup" className="px-4 md:px-6 w-40 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 animate__animated animate__pulse animate__infinite">
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
