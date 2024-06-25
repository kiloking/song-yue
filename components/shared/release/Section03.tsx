import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
const Section03 = () => {
  const data=[
    {img:'section03_p01.png'},
    {img:'section03_p02.png'},
    {img:'section03_p03.png'},
    {img:'section03_p04.png'},
    {img:'section03_p05.png'},
    {img:'section03_p06.png'},
    {img:'section03_p07.png'},
    {img:'section03_p08.png'},
  ]
  return (
    <div
      className='bg-center bg-cover bg-no-repeat md:pt-24  md:pb-12 pt-8 pb-8 '
      style={{ backgroundImage: `url('/images/release/section03_bg.png')`}}
      data-aos="fade" data-aos-duration="1000"
    >
      <div className='md:w-[55%] w-2/3 pl-10  md:pl-24'>
        <img src="/images/release/section03_title.png" alt="" className='w-full' /> 
      </div>  
      <div className='md:py-16 py-6 '>
      <Swiper
          slidesPerView={5}
          spaceBetween={20}
          breakpoints={{
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

          }}
          loop={true}
          speed={600}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className=''
        >
          {
            data.map((item,index)=>{
              return(
                <SwiperSlide key={item.img}>
                    <img src={`/images/release/${item.img}`} alt="" />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Section03