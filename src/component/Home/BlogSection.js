import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css';

const BlogCard = ({ image, title, description, category, readTime }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-200 animate__animated animate__fadeInUp flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl shadow-md"
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm border border-[#f6b60d] text-[#f6b60d] px-2 py-1 rounded-full">
              {category}
            </span>
            <span className="text-sm text-gray-500">{readTime}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#372800]">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </div>
        <div className="mt-auto">
          <Link
            to="/blogdetail"
            className="w-full py-2 text-[#ffc107] rounded-b-xl text-center font-semibold transition duration-300 read-article-button"
          >
            Read Article
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(4);

  const handleShowMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 4);
  };

  const blogs = [
    {
      id: 1,
      title: "Tech Innovations in 2024",
      description:
        "A detailed look into the most groundbreaking tech innovations of 2024.",
      image:
        "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Tech",
      readTime: "5 mins read",
    },
    {
      id: 2,
      title: "Health and Wellness Tips",
      description:
        "Top tips for maintaining your health and wellness in the modern world.",
      image:
        "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Health",
      readTime: "5 mins read",
    },
    {
      id: 3,
      title: "Travel Guide: Top Destinations",
      description: "Explore the top travel destinations you must visit this year.",
      image:
        "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Travel",
      readTime: "5 mins read",
    },
    {
      id: 4,
      title: "Financial Planning for 2024",
      description:
        "How to plan your finances effectively in the upcoming year.",
      image:
        "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Finance",
      readTime: "5 mins read",
    },
    // Add more blog objects here as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-12 text-[#372800] text-center animate__animated animate__fadeInDown">
        Our Collection Of Blogs
      </h1>

      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.slice(0, visibleBlogs).map((blog, index) => (
            <div key={blog.id} className={`animate__animated animate__fadeInUp animate__delay-${index}s`}>
              <BlogCard
                image={blog.image}
                title={blog.title}
                description={blog.description}
                category={blog.category}
                readTime={blog.readTime}
              />
            </div>
          ))}
        </div>
        {visibleBlogs < blogs.length && (
          <div className="text-center mt-6">
            <button
              className="bg-[#f6b60d] hover:bg-[#d99d0c] text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
              onClick={handleShowMore}
            >
              View More Blogs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
