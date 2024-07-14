import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('select');
  const [sortOption, setSortOption] = useState('Latest');
  const [visibleBlogs, setVisibleBlogs] = useState(6);

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
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  const blogs = [
    {
      id: 1,
      title: 'Tech Innovations in 2024',
      description: 'A detailed look into the most groundbreaking tech innovations of 2024.',
      image: 'https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Tech',
      readTime: '5 mins read',
    },
    {
      id: 2,
      title: 'Health and Wellness Tips',
      description: 'Top tips for maintaining your health and wellness in the modern world.',
      image: 'https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Health',
      readTime: '5 mins read',
    },
    {
      id: 3,
      title: 'Travel Guide: Top Destinations',
      description: 'Explore the top travel destinations you must visit this year.',
      image: 'https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Travel',
      readTime: '5 mins read',
    },
    
    // Add more blog objects here
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 p-4 mb-8 lg:mb-0">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-bold mb-4 text-[#372800]">Blog Categories</h2>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-[#555]">Select Category</label>
              <Dropdown className="w-full">
                <Dropdown.Toggle variant="light" className="w-full text-left bg-white text-[#000] border border-gray-300 rounded-lg shadow-md flex items-center justify-between">
                  {selectedCategory}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-full">
                  <Dropdown.Item onClick={() => handleCategoryChange('Tech')} className="text-[#372800]">
                    Tech
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryChange('Health')} className="text-[#372800]">
                    Health
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryChange('Travel')} className="text-[#372800]">
                    Travel
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#372800]">Sort By</h2>
            <ul className="text-[#555]">
              <li className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-[#f6b60d] border-gray-300"
                    name="sort"
                    value="Latest"
                    checked={sortOption === 'Latest'}
                    onChange={() => handleSortChange('Latest')}
                  />
                  <span className="ml-2">Latest</span>
                </label>
              </li>
              <li className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-[#f6b60d] border-gray-300"
                    name="sort"
                    value="Oldest"
                    checked={sortOption === 'Oldest'}
                    onChange={() => handleSortChange('Oldest')}
                  />
                  <span className="ml-2">Oldest</span>
                </label>
              </li>
              <li className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-[#f6b60d] border-gray-300"
                    name="sort"
                    value="Most Relevant"
                    checked={sortOption === 'Most Relevant'}
                    onChange={() => handleSortChange('Most Relevant')}
                  />
                  <span className="ml-2">Most Relevant</span>
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
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-3/4 p-4">
          <h1 className="text-3xl font-bold mb-6 text-[#372800]">Our Collection Of Blogs</h1>

          {/* Search Bar */}
          <div className="mb-6 relative">
            <input
              type="text"
              placeholder="Search blogs..."
              className="form-control w-full rounded-lg border-2 border-gray-300 px-3 py-2"
            />
            <FiSearch className="absolute top-2/4 right-4 transform -translate-y-2/4 text-[#372800]" size={20} />
          </div>

          {/* Blog Cards */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Adjusted gap */}
              {blogs.slice(0, visibleBlogs).map((blog, index) => (
                <div key={index} className="card shadow-lg rounded-lg overflow-hidden mb-6"> {/* Added bottom margin */}
                  <img src={blog.image} className="card-img-top" alt={blog.title} />
                  <div className="card-body p-4 bg-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm border border-[#f6b60d] text-[#f6b60d] px-2 py-1 rounded-full">{blog.category}</span>
                      <span className="text-sm text-gray-500">{blog.readTime}</span>
                    </div>
                    <h5 className="card-title text-lg font-semibold text-[#372800]">{blog.title}</h5>
                    <p className="card-text text-gray-600 mb-4">{blog.description}</p>
                    <Link to="/blogdetail" className="bg-[#f6b60d] hover:bg-[#d99d0c] text-white px-4 py-2 rounded-lg shadow-md">Read Article</Link>
                  </div>
                </div>
              ))}
            </div>
            {visibleBlogs < blogs.length && (
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
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Adjusted gap */}
              {blogs.slice(0, visibleBlogs).map((blog, index) => (
                <div key={index} className="card shadow-lg rounded-lg overflow-hidden mb-6"> {/* Added bottom margin */}
                  <img src={blog.image} className="card-img-top" alt={blog.title} />
                  <div className="card-body p-4 bg-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm border border-[#f6b60d] text-[#f6b60d] px-2 py-1 rounded-full">{blog.category}</span>
                      <span className="text-sm text-gray-500">{blog.readTime}</span>
                    </div>
                    <h5 className="card-title text-lg font-semibold text-[#372800]">{blog.title}</h5>
                    <p className="card-text text-gray-600 mb-4">{blog.description}</p>
                    <Link to="/blogdetail" className="bg-[#f6b60d] hover:bg-[#d99d0c] text-white px-4 py-2 rounded-lg shadow-md">Read Article</Link>
                  </div>
                </div>
              ))}
            </div>
            {visibleBlogs < blogs.length && (
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

export default Blogs;
