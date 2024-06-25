import React from 'react'

function Header() {
  return (
    <div 
      className=' relative'
    >
      <img src='/images/release/header_bg.png' alt="" className='w-full' data-aos="fade" data-aos-duration="1000"/>
      <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6/12 '>
        <img src='/images/release/header_logo.png' alt="" className='w-[60%] mx-auto' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"/>
        <img src='/images/release/header_subtitle.png' alt="" className='my-[6%] w-full mx-auto' data-aos="fade-up" data-aos-delay="00" data-aos-offset="-100" data-aos-duration="800"/>
      </div>

    </div>
  )
}

export default Header