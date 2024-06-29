import React from "react";

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-200">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl shadow-md"
      />
      <div className="p-6 flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-[#372800]">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </div>
        <div>
          <a
            href="#"
            className="block w-full py-2 bg-[#f6b60d] text-[#372800] rounded-b-xl text-center font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/path-cornfield-countryside_181624-47949.jpg")',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold leading-tight text-[#372800]">
            Our Blogs
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Card 1 */}
          <BlogCard
            image="https://img.freepik.com/free-photo/path-cornfield-countryside_181624-47949.jpg?t=st=1719394921~exp=1719398521~hmac=adf6d7e7ba175e35aceda075a29d6b9a6ece71408335345b4967e8223cde54bb&w=900"
            title="Bagasse: A by product of sugar industry and it’s uses"
            description="Lorem Ipsum asdihdih asdiashd asdhoashsd sajoisijn dsaojdasdas jasndasndasdnasj idfbu ck akdjndfnd i dndvi vf ijnnjjnfn o neofeipfjv..."
          />

          {/* Blog Card 2 */}
          <BlogCard
            image="https://img.freepik.com/free-photo/greenfield-with-clouds_1160-111.jpg?t=st=1719394962~exp=1719398562~hmac=db42f0b098b0ff42c5e2bf9e3b4ed2d78274f9adbe5ff0a9569d708071446dd8&w=900"
            title="Bagasse: A by product of sugar industry and it’s uses"
            description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
          />

          {/* Blog Card 3 */}
          <BlogCard
            image="https://img.freepik.com/free-photo/green-grass-white-clouds_1385-374.jpg?t=st=1719394986~exp=1719398586~hmac=cdce3911a02ac78f86742b2b182d725cce027cd6f3a3279f61146ee8df63a6e8&w=900"
            title="Bagasse: A by product of sugar industry and it’s uses"
            description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
