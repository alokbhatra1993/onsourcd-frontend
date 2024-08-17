import React from "react";
import ExploreCategories from "../Home/ExploreCategories";
import PlatformFeatures from "../Home/PlatformFeatures";
import SustainabilityGoals from "../Home/SustainabilityGoals";
import BlogSection from "../Home/BlogSection";
import FAQSection from "../Home/FAQSection";
import SellerBuyerTabs from "./SellerBuyerTabs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnerSection from "./PartnerSection";
import B2BSection from "../Home/B2BSection";

const Main = () => {
  // Video data with three videos
  const videos = [
    {
      id: 1,
      src: "https://videos.pexels.com/video-files/8333973/8333973-uhd_2732_1440_25fps.mp4",
      title: "Your Partner in Sourcing",
      description: "India's most significant B2B platform for Waste Procurement",
    },
    {
      id: 2,
      src: "https://videos.pexels.com/video-files/15313009/15313009-uhd_2560_1440_30fps.mp4",
      title: "Your Partner in Sourcing",
      description: "India's most significant B2B platform for Waste Procurement",
    },
    {
      id: 3,
      src: "https://videos.pexels.com/video-files/4280455/4280455-uhd_2560_1440_30fps.mp4",
      title: "Your Partner in Sourcing",
      description: "India's most significant B2B platform for Waste Procurement",
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
    ],
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
  };

  return (
    <section className="video-slider-section px-0 h-fit">
      <Slider {...sliderSettings} className="overflow-hidden">
        {videos.map((video) => (
          <div key={video.id} className="relative w-full h-100 md:h-120">
            <video
              src={video.src}
              className="w-full h-100 object-cover"
              autoPlay
              loop
              muted
            />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="p-4 bg-opacity-70 rounded-lg max-w-1xl mx-auto">
                <h3 className="text-4xl text-white md:text-7xl font-bold mb-2 md:mb-4">
                  {video.title}
                </h3>
                <p className="text-lg text-white md:text-xl">{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <ExploreCategories />
      <PlatformFeatures />
      <SustainabilityGoals />
      <BlogSection />
      <PartnerSection />
      <B2BSection />
      <SellerBuyerTabs />
      <FAQSection />
    </section>
  );
};

export default Main;
