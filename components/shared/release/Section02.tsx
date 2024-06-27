import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Section02 = () => {
  const data = [
    { img: "section02_p01.png" },
    { img: "section02_p02.png" },
    { img: "section02_p03.png" },
    { img: "section02_p04.png" },
  ];
  return (
    <div className="w-full pt-10 md:pt-24 md:pb-20 pb-8 relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ height: "100%", width: "100%", objectFit: "cover" }} //object-fit:cover
        className=" absolute top-0 left-0 right-0 w-full h-[100%] z-0  pointer-events-none"
      >
        <source
          src={"https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/bg.mp4"}
          type="video/mp4"
        />
      </video>
      <div className="w-4/12 mx-auto relative">
        <img
          src="/images/release/section02_title.png"
          alt=""
          className="w-full"
          data-aos="fade-up"
        />
        <div
          className=" absolute bottom-4 md:bottom-14 -left-[30px] md:-left-32   w-[10%]"
          data-aos="fade"
        >
          <img src="/images/release/bird01.png" alt="" className="w-full" />
        </div>
        <div
          className=" absolute bottom-4 md:bottom-10 -right-[30px] md:-right-32  w-[10%]"
          data-aos="fade"
        >
          <img src="/images/release/bird02.png" alt="" className="w-full" />
        </div>
      </div>

      <div className="w-full md:w-3/4 mx-auto mt-10">
        <img
          src="/images/release/section02_map.png"
          alt=""
          className="w-full"
          data-aos="zoom-out"
        />
      </div>

      <div className="my-14 flex items-center gap-10 w-full md:w-3/4 mx-auto">
        <div className="w-1/2">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={600}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className=""
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={item.img}>
                  <img src={`/images/release/${item.img}`} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="md:p-10">
          <img
            src="/images/release/section02_text.png"
            alt=""
            className="w-full"
            data-aos="fade"
          />
        </div>
      </div>

      <div className=" absolute bottom-0 right-0 w-[45%]">
        <img
          src="/images/release/section02_bottom.png"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Section02;
