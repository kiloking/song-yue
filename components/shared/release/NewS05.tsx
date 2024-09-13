import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const NewS05 = () => {
  const imgs = [
    "news05_p01.png",
    "news05_p02.png",
    "news05_p03.png",
    "news05_p04.png",
    "news05_p05.png",
    "news05_p06.png",
  ];
  return (
    <div className="w-full  relative">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={800}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        className=""
      >
        {imgs.map((item, index) => {
          return (
            <SwiperSlide key={item}>
              <img src={`/images/release/new/${item}`} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NewS05;
