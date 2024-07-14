import React from "react";
import Slider from "react-slick";
import 'animate.css';

const partners = [
  "https://ceirglobal.com/wp-content/uploads/2022/10/startup-india-logo.png",
  "https://zeevector.com/wp-content/uploads/MSME-Logo-PNG-Black-and-White.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ministry_of_Commerce_and_Industry.svg/1280px-Ministry_of_Commerce_and_Industry.svg.png",
  "https://ceirglobal.com/wp-content/uploads/2022/10/startup-india-logo.png",
  "https://zeevector.com/wp-content/uploads/MSME-Logo-PNG-Black-and-White.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ministry_of_Commerce_and_Industry.svg/1280px-Ministry_of_Commerce_and_Industry.svg.png",
];

const PartnerSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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

  return (
    <section className="py-12 bg-gradient-to-b from-[#e8f1f2] to-[#f6f9fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#372800] animate__animated animate__fadeInDown">Our Partners</h2>
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="p-4 animate__animated animate__fadeInUp animate__delay-1s">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="rounded-lg mx-auto max-w-full h-auto transition-transform transform hover:scale-105"
                  style={{ maxHeight: "100px" }} // Adjust max height as needed
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PartnerSection;
