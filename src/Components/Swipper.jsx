import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import { EffectFade, Autoplay } from "swiper/modules";

import 'swiper/css';
import "swiper/css/effect-fade";

import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Swipper = () => {

  return (



    <div className=" lg:h-[600px] bg-amber-50  p-6">
    <Swiper
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
      {/* slide 1 */}
      <SwiperSlide>
        <div className="md:h-[500px] h-auto">
          <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
            <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
              <p className="font-semibold text-amber-600 mb-3 text-center md:text-left">
                Hand made products
              </p>

              <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
               Turning mud into <br />
                something amazing
              </p>
              <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
              Crafted with passion, fired with creativity.
              </p>

              <div className="flex justify-center md:justify-start">
                <button className="bg-amber-600 py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-amber-700">
                  Explore Now
                </button>
              </div>
            </div>

            {/* left */}
            <div className="w-full md:max-h-[400px] h-[250px] flex-1 mb-10 md:mb-0">
              <img
                className="h-[30rem] w-[34rem] object-cover "
                src={banner1}
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* slide 2 */}
      <SwiperSlide>
        <div className="md:h-[500px] h-auto">
          <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
            <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
              <p className="font-semibold text-amber-600 mb-3 text-center md:text-left">
                Hand made products
              </p>

              <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                Soothing smell <br />
                of pottery
              </p>
              <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
              Elevate your space with timeless pottery treasures.
              </p>

              <div className="flex justify-center md:justify-start">
                <button className="bg-amber-600 py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-amber-700">
                  Explore Now
                </button>
              </div>
            </div>

            {/* left */}
            <div className="w-full md:max-h-[400px]  flex-1 mb-10 md:mb-0">
              <img
                className=" object-cover md:h-[30rem] w-[34rem]"
                src={banner2}
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* slide 3 */}
      <SwiperSlide>
        <div className="md:h-[500px] h-auto">
          <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
            <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
              <p className="font-semibold text-amber-600 mb-3 text-center md:text-left">
                Hand made products
              </p>

              <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
              Trim earth into<br /> Craftmanship 
              
              </p>
              <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
              Find the perfect tech solutions for your lifestyle.
              </p>

              <div className="flex justify-center md:justify-start">
                <button className="bg-amber-600 py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-amber-700">
                  Explore Now
                </button>
              </div>
            </div>

            {/* left */}
            <div className="w-full max-h-[400px] flex-1 mb-10 md:mb-0">
              <img
                className="h-[30rem] w-[34rem]  object-cover "
                src={banner3}
                alt=""
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

  </div>












    
  );
};

export default Swipper;