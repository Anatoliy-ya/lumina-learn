import styles from './SwiperSlider.module.scss';

import CardCourse from './CardCourse';

import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { courses } from '../../store/Courses';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { useEffect, useRef, useState } from 'react';

const SwiperSlider: React.FC = () => {
  const [widthSlide, setWidthSlide] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      setWidthSlide(cardRef.current.offsetWidth);
    }
  }, [cardRef]);

  const classSlider = widthSlide === 320 ? `${styles.slide} ${styles.md}` : styles.slide;

  return (
    <div className={styles.swiperWrapper} ref={swiperRef}>
      <h1 className={styles.heading}>Sale Course</h1>
      <Swiper
        effect={'coverflow'}
        autoplay={true}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          scale: 0.7,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation, A11y]}
        className={styles.swiperContainer}>
        {courses.map((course) => (
          <SwiperSlide key={course.id} className={classSlider}>
            <CardCourse
              cardRef={cardRef}
              size="lg"
              nameCourse={course.nameCourse}
              nameTeacher={course.nameTeacher}
              imgUrl={course.imgUrl}
              title={course.title}
              id={course.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <SlArrowLeft name="arrow-back-outline"></SlArrowLeft>
        </div>
        <div className="swiper-button-next slider-arrow">
          <SlArrowRight name="arrow-forward-outline"></SlArrowRight>
        </div>
        <div className="swiper-pagination" style={{ position: 'relative', bottom: '-10px' }}></div>
      </div>
    </div>
  );
};

export default SwiperSlider;
