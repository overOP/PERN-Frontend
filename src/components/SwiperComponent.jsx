
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
      >
        <SwiperSlide>
          <img className='w-full' src="https://picsum.photos/500/300?random=1" alt="random image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="https://picsum.photos/500/300?random=2" alt="random image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="https://picsum.photos/500/300?random=3" alt="random image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="https://picsum.photos/500/300?random=4" alt="random image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="https://picsum.photos/500/300?random=5" alt="random image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="https://picsum.photos/500/300?random=6" alt="random image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="https://picsum.photos/500/300?random=7" alt="random image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="https://picsum.photos/500/300?random=8" alt="random image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="https://picsum.photos/500/300?random=9" alt="random image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

