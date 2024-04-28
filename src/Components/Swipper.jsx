import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination,
  //  Navigation 
  } from 'swiper/modules';



// import required modules
const Swipper = () => {

  return (
    <div className='mt-8 mb-14'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination,
          //  Navigation
          ]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full h-[28rem]' src= {banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[28rem]' src= {banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[28rem]' src= {banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[28rem]' src= {banner4} alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Swipper;