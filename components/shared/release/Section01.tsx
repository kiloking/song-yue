import React from 'react'

const Section01 = () => {
  return (
    <div
      className='bg-center bg-cover bg-no-repeat  md:h-screen'
      style={{ backgroundImage: `url('/images/release/section01_bg.png')`}}
      data-aos="fade" data-aos-duration="1000"
    >
      <div className='flex w-8/12 mx-auto py-[6%] gap-20 items-center '>
         <div data-aos="fade-up" data-aos-duration="1000"><img src="/images/release/section01_p01.png" alt="" /></div>
         <div data-aos="fade" data-aos-duration="1000"><img src="/images/release/section01_title.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Section01