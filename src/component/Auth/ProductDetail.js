import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Dropdown } from 'react-bootstrap';

const ProductDetail = () => {
  const [selectedCategory, setSelectedCategory] = useState('Rice Husk');
  const [sortOption, setSortOption] = useState('A - Z');
  const [visibleProducts, setVisibleProducts] = useState(6); // Initial number of visible products

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleClearAll = () => {
    setSortOption('');
  };

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
      <div className="flex flex-wrap">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 p-4 mb-8 lg:mb-0 bg-white text-[#372800] rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Product Categories</h2>

          {/* Dropdown for Briquettes */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Briquettes</label>
            <Dropdown className="w-full">
              <Dropdown.Toggle variant="light" className="w-full text-left bg-white text-[#000] border border-gray-300 rounded-lg shadow-md flex items-center justify-between">
                {selectedCategory}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-full">
                <Dropdown.Item onClick={() => handleCategoryChange('Rice Husk')} className="text-[#372800]">
                  Rice Husk
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategoryChange('Sawdust')} className="text-[#372800]">
                  Sawdust
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Dropdown for Pellets */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Pellets</label>
            <Dropdown className="w-full">
              <Dropdown.Toggle variant="light" className="w-full text-left bg-white text-[#000] border border-gray-300 rounded-lg shadow-md flex items-center justify-between">
                {selectedCategory}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-full">
                <Dropdown.Item onClick={() => handleCategoryChange('Wood Pellets')} className="text-[#372800]">
                  Wood Pellets
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategoryChange('Straw Pellets')} className="text-[#372800]">
                  Straw Pellets
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Dropdown for Loose */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Loose</label>
            <Dropdown className="w-full">
              <Dropdown.Toggle variant="light" className="w-full text-left bg-white text-[#000] border border-gray-300 rounded-lg shadow-md flex items-center justify-between">
                {selectedCategory}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-full">
                <Dropdown.Item onClick={() => handleCategoryChange('Loose Biomass')} className="text-[#372800]">
                  Loose Biomass
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategoryChange('Loose Wood Chips')} className="text-[#372800]">
                  Loose Wood Chips
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-4">Sort By</h2>
          <ul>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="sort"
                  value="A - Z"
                  checked={sortOption === 'A - Z'}
                  onChange={() => handleSortChange('A - Z')}
                />
                <span className="ml-2">A - Z</span>
              </label>
            </li>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="sort"
                  value="Z - A"
                  checked={sortOption === 'Z - A'}
                  onChange={() => handleSortChange('Z - A')}
                />
                <span className="ml-2">Z - A</span>
              </label>
            </li>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="sort"
                  value="Relevant"
                  checked={sortOption === 'Relevant'}
                  onChange={() => handleSortChange('Relevant')}
                />
                <span className="ml-2">Relevant</span>
              </label>
            </li>
            <li>
              <button
                className="mt-4 bg-[#f6b60d] hover:bg-[#d99d0c] text-white px-4 py-2 rounded-lg shadow-md"
                onClick={handleClearAll}
              >
                Clear All
              </button>
            </li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-3/4 p-4">
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
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
