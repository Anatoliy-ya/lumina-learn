import { EffectCube, Pagination } from 'swiper/modules';
import styles from './SwiperSlider.module.scss';
import { SwiperSlide, Swiper } from 'swiper/react';

const SwiperCube: React.FC = () => {
  return (
    <div className={styles.swiperCube}>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 10,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className={styles.mySwiper}>
        <SwiperSlide>
          <img src="https://reactjs.org/logo-og.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SwiperCube;
