import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const ProductDetail = () => {
  const [visibleProducts, setVisibleProducts] = useState(4); // Adjusted to show 4 products initially

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3); // Load 3 more products each time
  };

  const products = [
    {
      title: 'Rice Husk',
      description: 'Rice Husk hard outer covering of rice grains major agriculture product',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Rice_chaffs.jpg',
    },
    {
      title: 'Rice Husk',
      description: 'Rice Husk hard outer covering of rice grains major agriculture product',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Rice_chaffs.jpg',
    },
    {
      title: 'Rice Husk',
      description: 'Rice Husk hard outer covering of rice grains major agriculture product',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Rice_chaffs.jpg',
    },
    {
      title: 'Rice Husk',
      description: 'Rice Husk hard outer covering of rice grains major agriculture product',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Rice_chaffs.jpg',
    },
    // Add more product objects here
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-yellow-500">Our Collection Of Products</h1>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search products..."
          className="form-control w-full rounded-lg border-2 border-gray-300 px-3 py-2"
        />
        <FiSearch className="absolute top-2/4 right-4 transform -translate-y-2/4 text-[#372800]" size={20} />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.slice(0, visibleProducts).map((product, index) => (
          <div key={index} className="card shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body p-4 bg-white">
              <h5 className="card-title text-lg font-semibold text-[#372800]">{product.title}</h5>
              <p className="card-text text-gray-600 mb-4">{product.description}</p>
              <a href="#" className="bg-[#f6b60d] hover:bg-[#d99d0c] text-white px-4 py-2 rounded-lg shadow-md">Ask for a Quote</a>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="text-center mt-6">
          <button
            className="bg-[#f6b60d] hover:bg-[#d99d0c] text-white px-6 py-3 rounded-lg shadow-md"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
