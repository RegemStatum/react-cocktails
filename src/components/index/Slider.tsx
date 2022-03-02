import React, { FC } from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";

// info
import slides from "../../constants/slides";

const Slider: FC = () => {
  return (
    <div className="slider">
      <Swiper modules={[Pagination]} pagination slidesPerView={1}>
        {slides.map((slide) => {
          const { id, name, text, img } = slide;
          return (
            <SwiperSlide key={id}>
              <div
                className="slider__slide"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="slider__dark-mask"></div>
                <h5 className="slider__name">{name}</h5>
                <p className="slider__text">{text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
