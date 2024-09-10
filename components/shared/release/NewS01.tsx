import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const NewS01 = () => {
  const data = [{ img: "new_s01_p01.png" }, { img: "new_s01_p02.png" }];
  return (
    <div className="w-fullrelative">
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={600}
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          className=""
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={item.img}>
                <img src={`/images/release/new/${item.img}`} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default NewS01;
