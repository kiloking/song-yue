import { motion } from 'framer-motion';
import Footer from "./Footer";
const Header = () => {
  return (
    <div className='grid grid-cols-1  md:grid-cols-8 h-screen  '>
      <div 
        className=' bg-cover bg-no-repeat bg-left-center md:col-span-6    bg-[#add9ea]  relative hidden md:block'
        style={{backgroundImage: `url('/images/header_bg.png')`}}
      >
        <div className=' absolute top-32 left-1/2 -translate-x-1/2  w-2/5 mx-auto' >
          <motion.img 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            src={'/images/header_title.png'} alt="" className='w-full' data-aos="fade-down" data-aos-duration="1500" />
        </div>

      </div>
      <div 
        className='block md:hidden bg-cover bg-no-repeat bg-center w-full  aspect-[9/13] relative '
        style={{backgroundImage: `url(${'/images/header_bg_mb.png'})`}}
      >
          <div className=' absolute top-14 left-1/2 -translate-x-1/2 w-4/5' >
            <img src={'/images/header_title.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="1500" />
          </div>

      </div>

      <div className='md:col-span-2 bg-[#F5BDC2]'>
        <Footer />
      </div>


    </div>
  );
}

export default Header;