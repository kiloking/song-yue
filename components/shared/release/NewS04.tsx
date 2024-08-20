import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const NewS04 = () => {
  const data = [{ img: "section04_p01.png" }, { img: "section04_p02.png" }];
  const news04group01 = [
    { img: "new_s04_2_p01.png" },
    { img: "new_s04_2_p02.png" },
    { img: "new_s04_2_p03.png" },
    { img: "new_s04_2_p04.png" },
  ];
  const news04group02 = [
    { img: "new_s04_3_p01.png" },
    { img: "new_s04_3_p02.png" },
    { img: "new_s04_3_p03.png" },
    { img: "new_s04_3_p04.png" },
  ];
  return (
    <div className="w-full md:pt-24 md:pb-[230px] pt-8 pb-16 relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ height: "100%", width: "100%", objectFit: "cover" }} //object-fit:cover
        className=" absolute top-0 left-0 right-0 w-full h-[100%] z-0 pointer-events-none"
      >
        <source
          src={"https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/bg.mp4"}
          type="video/mp4"
        />
      </video>
      <div className="md:w-4/12 w-1/2 mx-auto relative">
        <img
          src="/images/release/section04_title.png"
          alt=""
          className="w-full"
          data-aos="fade-up"
        />
        <div
          className=" absolute bottom-4 md:bottom-14 -left-[32px] md:-left-[240px]   w-[10%]"
          data-aos="fade"
        >
          <img src="/images/release/bird03.png" alt="" className="w-full" />
        </div>
        <div
          className=" absolute bottom-10 md:bottom-24 -right-[32px] md:-right-[200px]  w-[20%]"
          data-aos="fade"
        >
          <img src="/images/release/bird04.png" alt="" className="w-full" />
        </div>
      </div>

      <div className="md:w-3/4 w-full mx-auto mt-10">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={600}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
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
      <div className="md:w-[25%] w-1/2 mx-auto relative md:mt-16 mt-10">
        <img
          src="/images/release/new/new_s04_2_title.png"
          alt=""
          className="w-full"
          data-aos="fade-up"
        />
      </div>
      <div className="md:w-3/4 w-full mx-auto mt-10">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={600}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className=""
        >
          {news04group01.map((item, index) => {
            return (
              <SwiperSlide key={item.img}>
                <img src={`/images/release/new/${item.img}`} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="md:w-3/4 w-full mx-auto mt-10">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={600}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className=""
        >
          {news04group02.map((item, index) => {
            return (
              <SwiperSlide key={item.img}>
                <img src={`/images/release/new/${item.img}`} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="md:w-[25%] w-1/2 mx-auto relative md:mt-16 mt-10">
        <img
          src="/images/release/section04_subtitle.png"
          alt=""
          className="w-full"
          data-aos="fade-up"
        />
      </div>

      <div className="md:w-3/4 w-full mx-auto mt-10">
        <img
          src="/images/release/section04_label.png"
          alt=""
          className="w-full"
          data-aos="zoom-out"
        />
      </div>

      <div className=" absolute bottom-0 right-0 w-full">
        <img
          src="/images/release/section04_bottom.png"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default NewS04;
