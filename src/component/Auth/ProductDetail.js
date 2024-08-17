import React, { useState } from 'react';

const ProductDetail = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

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
    {
      title: 'Rice Husk',
      description: 'Rice Husk hard outer covering of rice grains major agriculture product',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Rice_chaffs.jpg',
    },
    {
      title: 'Loose',
      description: 'Rice Husk hard outer covering of rice grains major agriculture product',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Rice_chaffs.jpg',
    },
    {
      title: 'Pelletes',
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
      title: 'Loose',
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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`mx-1 px-3 py-1 rounded-full ${currentPage === i ? 'bg-[#f6b60d] text-white' : 'bg-gray-200 text-gray-700'} hover:bg-[#d99d0c] transition duration-300`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-yellow-500">Our Collection Of Products</h1>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentProducts.map((product, index) => (
          <div key={index} className="card shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body p-4 bg-white">
              <h5 className="card-title text-lg font-semibold text-[#372800]">{product.title}</h5>
              <p className="card-text text-gray-600 mb-4">{product.description}</p>
              <a href="signup" className="bg-[#f6b60d] hover:bg-[#d99d0c] text-white px-4 py-2 rounded-lg shadow-md">Ask for a Quote</a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={handlePrevPage}
          className={`mx-1 px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-[#f6b60d] hover:text-white transition duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {renderPageNumbers()}
        <button
          onClick={handleNextPage}
          className={`mx-1 px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-[#f6b60d] hover:text-white transition duration-300 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
