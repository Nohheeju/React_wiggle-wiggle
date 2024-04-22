import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MainVisual = () => {
  return (
    <div className="MainVisual">
      <Swiper
        className="mySwiper"
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className="Slide">
          <img src={process.env.PUBLIC_URL + "/Images/slide-img1.png"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainVisual;
