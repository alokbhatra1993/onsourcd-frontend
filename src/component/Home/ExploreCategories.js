import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import { fetchProductApi } from "../../services/api";
import { useSelector } from "react-redux";

const ExploreCategories = () => {
  const user = useSelector((state) => state);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Briquettes",
      category: "Bagasse",
      image: "https://img.freepik.com/free-photo/overhead-shot-small-pieces-cut-wood-stacked-each-other_181624-27604.jpg?t=st=1719390856~exp=1719394456~hmac=9f74d0e40e7df34dea507c2a9cfea155698aac30c5a21138231af202d21662e9&w=740",
    },
    {
      id: 2,
      name: "Pellets",
      category: "Saw Dust",
      image: "https://img.freepik.com/free-photo/top-view-plant-leaves-pellets-with-copy-space_23-2148895420.jpg?t=st=1719390889~exp=1719394489~hmac=fea9ae8f337fd9f0919f13faf28331e4532b60f9c706e632755f18593ef85a1c&w=826",
    },
    {
      id: 3,
      name: "Loose",
      category: "Mustard Husk and more",
      image: "https://img.freepik.com/premium-photo/loose-soil-before-planting-vegetables-spring-day-agriculture_173815-15135.jpg",
    },
    {
      id: 4,
      name: "Pellets",
      category: "Category D",
      image: "https://img.freepik.com/free-photo/top-view-plant-leaves-pellets-with-copy-space_23-2148895420.jpg?t=st=1719390889~exp=1719394489~hmac=fea9ae8f337fd9f0919f13faf28331e4532b60f9c706e632755f18593ef85a1c&w=826",
    },
  ]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetchProductApi();
      if (response) {
        const data = await response.json();
        setProducts(data?.products);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate__animated animate__fadeInDown">
          <h2 className="text-4xl font-bold leading-tight text-yellow-800">
            Explore Our Products
          </h2>
        </div>
        <div className="overflow-hidden">
          {products.length > 0 ? (
            <Slider {...sliderSettings}>
              {products.map((product) => (
                <div key={product.id} className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
                  <Link to={`/productdetail`}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden animate__animated animate__fadeInUp">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          ) : (
            <p>No products available.</p>
          )}
        </div>
        {/* Register Now button outside the slider */}
        {!user?.token ? (
          <div className="text-center mt-8 w-30 mx-auto flex justify-center">
            <Link to="/signup">
              <button className="bg-yellow-500 text-white py-2 px-4 rounded">
                Register Now
              </button>
            </Link>
          </div>
        ) : null}

      </div>
    </section>
  );
};

export default ExploreCategories;
