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
        src: "https://videos.pexels.com/video-files/4280455/4280455-uhd_2560_1440_30fps.mp4",
        title: "Your B2B Sourcing Solutions",
        description: "India's most significant B2B platform for Agro Waste",
      },
      {
        id: 2,
        src: "https://videos.pexels.com/video-files/4280455/4280455-uhd_2560_1440_30fps.mp4",
        title: "Your B2B Sourcing Solutions",
        description: "India's most significant B2B platform for Agro Waste",
      },
      {
        id: 3,
        src: "https://videos.pexels.com/video-files/4280455/4280455-uhd_2560_1440_30fps.mp4",
        title: "Your B2B Sourcing Solutions",
        description: "India's most significant B2B platform for Agro Waste",
      },
    ];

    // Slider settings
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 1000, // Adjust speed for smoother autoplay
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
        return <div className="dot"></div>; // Custom paging dots
      },
    };

    return (
      <section className="video-slider-section px-0 h-fit">
        <Slider {...sliderSettings} className="overflow-hidden">
          {videos.map((video) => (
            <div key={video.id} className="relative w-full h-100 md:h-120">
              {/* Video */}
              <video src={video.src} className="w-full h-100 object-cover" autoPlay loop muted />
              {/* Text content */}
              <div className="absolute inset-0 flex items-center text-white justify-center text-center">
                <div className="p-4 rounded-lg max-w-1xl mx-auto bg-opacity-70 text-white">
                  <h3 className="text-4xl md:text-7xl font-bold mb-2 md:mb-4 text-white">{video.title}</h3>
                  <p className="text-lg md:text-xl">{video.description}</p>
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
        <FAQSection />
        <SellerBuyerTabs />
        <B2BSection/>
      </section>
    );
  };

  export default Main;
