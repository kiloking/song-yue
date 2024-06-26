import React from 'react'

const Section04 = () => {
  return (
  <div className='w-full md:pt-24 md:pb-[230px] pt-8 pb-16 relative'>
    <video
      autoPlay
      muted
      loop
      style={{ height: "100%", width: "100%", objectFit: "cover" }} //object-fit:cover
      className=' absolute top-0 left-0 right-0 w-full h-[100%] z-0'
    >
      <source src={'https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/bg.mp4'} type="video/mp4" />
    </video>
    <div className='md:w-4/12 w-1/2 mx-auto relative'>
      <img src="/images/release/section04_title.png" alt="" className='w-full' data-aos="fade-up" />
      <div className=' absolute bottom-4 md:bottom-14 -left-[32px] md:-left-[240px]   w-[10%]' data-aos="fade"><img src="/images/release/bird03.png" alt="" className='w-full' /></div>
      <div className=' absolute bottom-10 md:bottom-24 -right-[32px] md:-right-[200px]  w-[20%]' data-aos="fade"><img src="/images/release/bird04.png" alt="" className='w-full' /></div>
      
    </div>

    <div className='md:w-3/4 w-full mx-auto mt-10'>
      <img src="/images/release/section04_p01.png" alt="" className='w-full' data-aos="zoom-out" />
    </div>

    <div className='md:w-[25%] w-1/2 mx-auto relative md:mt-16 mt-10'>
      <img src="/images/release/section04_subtitle.png" alt="" className='w-full' data-aos="fade-up" />
      
    </div>

    <div className='md:w-3/4 w-full mx-auto mt-10'>
      <img src="/images/release/section04_label.png" alt="" className='w-full' data-aos="zoom-out" />
    </div>

    <div className=' absolute bottom-0 right-0 w-full'><img src="/images/release/section04_bottom.png" alt="" className='w-full' /></div>
  </div>
  )
}

export default Section04