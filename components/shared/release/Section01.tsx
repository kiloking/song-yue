import React from "react";

const Section01 = () => {
  return (
    <div className="bg-center bg-cover bg-no-repeat    relative">
      <div className="   -z-10 w-full ">
        <img src="/images/release/section01_bg.png" alt="" className="w-full" />
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ height: "100%", width: "100%", objectFit: "cover" }} //object-fit:cover
          className=" absolute top-0 left-0 right-0 w-full h-[100%] -z-20  pointer-events-none"
        >
          <source
            src={"https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/bg.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="flex w-8/12 mx-auto md:py-[6%] gap-20 items-center absolute top-5 md:top-10 left-1/2 -translate-x-1/2 z-10 ">
        <div data-aos="fade-up" data-aos-duration="1000">
          <img src="/images/release/section01_p01.png" alt="" />
        </div>
        <div data-aos="fade" data-aos-duration="1000">
          <img src="/images/release/section01_title.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section01;
