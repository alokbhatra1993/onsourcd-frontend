import React from 'react';
import Slider from 'react-slick';
import './Main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const products = [
    { id: 1, title: 'Product Title 1', description: 'Product Description 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product Title 2', description: 'Product Description 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Product Title 3', description: 'Product Description 3', imageUrl: 'https://via.placeholder.com/150' },
  ];

  const partners = [
    { id: 1, imageUrl: 'https://via.placeholder.com/100x50' },
    { id: 2, imageUrl: 'https://via.placeholder.com/100x50' },
    { id: 3, imageUrl: 'https://via.placeholder.com/100x50' },
    { id: 4, imageUrl: 'https://via.placeholder.com/100x50' },
  ];

  return (
    <main className="main-container">
      {/* Video Slider Section */}
      <section className="video-slider-section">
        <h2>Video Slider</h2>
        <Slider {...sliderSettings}>
          <div className="video-slide">
            <video autoPlay loop muted>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="video-slide">
            <video autoPlay loop muted>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="video-slide">
            <video autoPlay loop muted>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
          </div>
        </Slider>
      </section>

      {/* Product Showcase Section */}
      <section className="product-showcase-section">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        <button className="view-all-button">View All Products</button>
      </section>

      {/* Partner Section */}
      <section className="partner-section">
        <h2>Our Partners</h2>
        <div className="partners-grid">
          {partners.map((partner) => (
            <img key={partner.id} src={partner.imageUrl} alt={`Partner ${partner.id}`} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
