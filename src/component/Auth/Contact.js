import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-1 py-16">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Part - Contact Information */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex items-top justify-center">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Let's Talk with Us</h1>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Questions, comments, or feedback? Simply fill in the form and we’ll be in touch shortly.
            </p>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-gray-700 mr-4" size={24} />
              <div className="text-base text-gray-700 leading-relaxed">
               Jaipur Rajasthan<br />
             
              </div>
            </div>
            <div className="flex items-center mb-6">
              <FaPhoneAlt className="text-gray-700 mr-4" size={24} />
              <div className="text-base text-gray-700 leading-relaxed">
                +91-9257646469,
                +91-8360656569
              </div>
            </div>
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-gray-700 mr-4" size={24} />
              <div className="text-base text-gray-700 leading-relaxed">
                contact@onsourcd.com
              </div>
            </div>
          </div>
        </div>

        {/* Right Part - Contact Form */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <form>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mt-8">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mt-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="mt-2 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#f6b60d] hover:bg-[#d99d0c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
