import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetail = () => {
  // Example data for similar blogs
  const similarBlogs = [
    {
      id: 1,
      title: 'Tech Innovations in Agriculture',
      image: 'https://images.unsplash.com/photo-1508857650881-64475119d798?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Tech',
      date: 'July 6, 2024',
    },
    {
      id: 2,
      title: 'Sustainable Farming Practices',
      image: 'https://images.unsplash.com/photo-1530541835461-dedaf9cf368a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Sustainability',
      date: 'July 4, 2024',
    },
    {
      id: 3,
      title: 'Future Trends in Precision Farming',
      image: 'https://images.unsplash.com/photo-1518994603110-1912b3272afd?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Tech',
      date: 'July 3, 2024',
    },
    {
      id: 4,
      title: 'Organic Farming: Benefits and Challenges',
      image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Sustainability',
      date: 'July 2, 2024',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-80 object-cover object-center"
            alt="Agriculture Blog"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Agriculture B2B: Innovations and Insights</h1>
            <p className="text-sm text-gray-600 mb-2">Published on July 5, 2024</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Agriculture has always been the backbone of our economy. With the advent of new technologies and innovative practices,
              the B2B sector in agriculture is witnessing a transformation like never before. In this blog, we will delve into the latest
              trends, technologies, and insights that are shaping the future of agriculture B2B.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              From precision farming to sustainable practices, the agriculture industry is embracing change to meet the growing demands
              and challenges. Companies are now focusing on improving efficiency, reducing waste, and promoting sustainable farming
              practices. The use of IoT, AI, and big data analytics is revolutionizing the way we approach farming and agriculture.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Innovations</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              One of the key innovations in agriculture B2B is precision farming. This approach uses data-driven techniques to optimize
              field-level management with regard to crop farming. Sensors, GPS, and IoT devices collect data that helps farmers make
              informed decisions, resulting in better yields and resource management.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Another significant innovation is the use of drones for monitoring crop health, irrigation, and soil conditions. Drones
              provide real-time data and high-resolution images that can be analyzed to detect issues early and take corrective actions.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Sustainability in Agriculture</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Sustainability is at the core of modern agriculture practices. Farmers are adopting methods that not only increase
              productivity but also protect the environment. Crop rotation, conservation tillage, and organic farming are some of the
              sustainable practices being implemented widely.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Water conservation is another critical aspect of sustainable farming. Efficient irrigation systems and rainwater harvesting
              techniques are helping farmers conserve water and reduce dependency on groundwater.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Future Outlook</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              The future of agriculture B2B looks promising with continuous advancements in technology and sustainable practices.
              Collaboration between tech companies and agricultural businesses is paving the way for innovative solutions that address
              the challenges faced by the industry. The focus on sustainability and efficiency will drive the growth and success of the
              agriculture sector in the coming years.
            </p>
          </div>
        </div>

        {/* Similar Blogs Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Similar Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarBlogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={blog.image} className="w-full h-48 object-cover object-center" alt={blog.title} />
                <div className="p-4">
                  <span className="text-sm text-gray-600">{blog.category}</span>
                  <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-3">{blog.title}</h3>
                  <p className="text-sm text-gray-700">{blog.date}</p>
                  <Link to={`/blogdetail/${blog.id}`} className="block mt-2 bg-[#f6b60d] hover:bg-[#d99d0c] text-white px-4 py-2 rounded-lg shadow-md">Read Article</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
