import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/scss";

const slides = [];

const Slider: FC = () => {
  return (
    <div className="slider">
      <Swiper
        modules={[Pagination]}
        navigation
        pagination
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
