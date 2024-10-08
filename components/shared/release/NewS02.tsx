import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const NewS02 = () => {
  const maps = [{ img: "new_s02_map01.png" }, { img: "new_s02_map02.png" }];
  const news02group01 = [
    { img: "new_s2_p01.png" },
    { img: "new_s2_p02.png" },
    { img: "new_s2_p03.png" },
    { img: "new_s2_p04.png" },
    { img: "new_s2_p05.png" },
    { img: "new_s2_p06.png" },
  ];
  const news02group02 = [
    { img: "new_s02_3_p1-1.png", text: "new_s02_3_p1-1t.png" },
    { img: "new_s02_3_p1-2.png", text: "new_s02_3_p1-2t.png" },
    { img: "new_s02_3_p1-3.png", text: "new_s02_3_p1-3t.png" },
    { img: "new_s02_3_p1-4.png", text: "new_s02_3_p1-4t.png" },
  ];

  const news02group03 = [
    { img: "new_s02_4_p1-1.png", text: "new_s02_4_p1-1t.png" },
    { img: "new_s02_4_p1-2.png", text: "new_s02_4_p1-2t.png" },
    { img: "new_s02_4_p1-3.png", text: "new_s02_4_p1-3t.png" },
  ];

  const new02group04 = [
    { img: "new_s02_2_p1-1.png" },
    { img: "new_s02_2_p1-2.png" },
    { img: "new_s02_2_p1-3.png" },
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

      <div className="w-full md:w-3/4 mx-auto mt-5 md:mt-10">
        <div className="w-full">
          <Swiper
            key={"news02map"}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={600}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className=""
          >
            {maps.map((item, index) => {
              return (
                <SwiperSlide key={item.img}>
                  <img src={`/images/release/new/${item.img}`} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="my-5 md:my-14 flex flex-col lg:flex-col items-center gap-10 w-11/12 md:w-3/4 mx-auto">
        <div className="p-2 lg:p-10">
          <img
            src="/images/release/new/new_s2_text2.png"
            alt=""
            className="w-full"
            data-aos="fade"
          />
        </div>
        <div className="w-full ">
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
            modules={[Pagination, Autoplay]}
            className=""
          >
            {news02group01.map((item, index) => {
              return (
                <SwiperSlide key={item.img}>
                  <img src={`/images/release/new/${item.img}`} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="my-5 md:my-14 flex flex-col lg:flex-col items-center gap-10 w-11/12 md:w-3/4 mx-auto">
        <div className=" my-5 md:my-12 gap-10 w-11/12 md:w-2/4 mx-auto">
          <img
            src="/images/release/new/new_s02_2_title.png"
            alt=""
            className="w-full"
            data-aos="fade-up"
          />
        </div>

        <div className="w-full ">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={600}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="w-full"
          >
            {new02group04.map((item, index) => {
              return (
                <SwiperSlide key={item.img}>
                  <img
                    src={`/images/release/new/${item.img}`}
                    alt=""
                    className="w-full"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="my-5 md:my-14 flex items-center gap-10 w-11/12 md:w-3/4 mx-auto">
        <div className="w-full">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={600}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            className=""
          >
            {news02group02.map((item, index) => {
              return (
                <SwiperSlide key={item.img}>
                  <div className="flex items-center gap-10 flex-col lg:flex-row">
                    <div className="order-2 lg:order-1 ">
                      <img src={`/images/release/new/${item.img}`} alt="" />
                    </div>
                    <div className="order-1 lg:order-2 p-2 lg:p-10">
                      <img src={`/images/release/new/${item.text}`} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="my-5 md:my-14 flex items-center gap-10 w-11/12 md:w-3/4 mx-auto">
        <div className="w-full">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={600}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            className=""
          >
            {news02group03.map((item, index) => {
              return (
                <SwiperSlide key={item.img}>
                  <div className="flex items-center gap-10 flex-col lg:flex-row">
                    <div className="order-2 lg:order-2 ">
                      <img src={`/images/release/new/${item.img}`} alt="" />
                    </div>
                    <div className="order-1 lg:order-1 p-2 lg:p-10">
                      <img src={`/images/release/new/${item.text}`} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className=" absolute bottom-0 left-0 w-[45%]">
        <img
          src="/images/release/section02_bottom2.png"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default NewS02;
