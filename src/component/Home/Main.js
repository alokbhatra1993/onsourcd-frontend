import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
  // Image data with three images
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Your b2b sourcing solutions",
      description: "India's most significant B2B  platform for Agro Waste",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1559884743-74a57598c6c7?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Your b2b sourcing solutions",
      description: "India's most significant B2B  platform for Agro Waste",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/flagged/photo-1573722398482-f0853718ba49?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Your b2b sourcing solutions",
      description: "India's most significant B2B  platform for Agro Waste",
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="image-slider-section">
      <Slider {...sliderSettings}>
        {images.map((image) => (
          <div key={image.id} className="image-slide">
            {/* Image */}
            <img src={image.src} alt={image.title} className="image-background" />
            {/* Text content */}
            <div className="slide-content">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Main;
