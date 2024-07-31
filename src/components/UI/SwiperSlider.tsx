import { useEffect, useRef, useState } from 'react';

import styles from './SwiperSlider.module.scss';

import CardCourse from './CardCourse';
import Feedback from './Feedback';
import { CourseInterfaceMini, FeedbackInterface } from 'types/types';

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import {
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
  EffectCube,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';

interface PropsSwiperSlider {
  size: 'md' | 'lg';
  courses?: CourseInterfaceMini[];
  feedback?: FeedbackInterface[];
  variant: 'cube' | 'coverflow';
}
const SwiperSlider: React.FC<PropsSwiperSlider> = (props) => {
  const [widthSlide, setWidthSlide] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      setWidthSlide(cardRef.current.offsetWidth);
    }
  }, [cardRef]);

  // const classSlider = widthSlide === 320 ? `${styles.slide} ${styles.md}` : styles.slide;
  const classSlider = `${styles.slide} ${styles[props.size]}`;

  return (
    <>
      {props.variant === 'coverflow' && (
        <div className={styles.swiperWrapper} ref={swiperRef}>
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
            {props.courses &&
              props.courses.map((course) => (
                <SwiperSlide key={course.id} className={classSlider}>
                  <CardCourse
                    cardRef={cardRef}
                    size={props.size}
                    nameCourse={course.courseName}
                    nameTeacher={course.nameTeacher}
                    imgUrl={course.imgUrl}
                    title={course.title}
                    id={course.id}
                  />
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="slider-controller" style={{ margin: '0 30 px' }}>
            <div className="swiper-button-prev slider-arrow">
              <SlArrowLeft name="arrow-back-outline"></SlArrowLeft>
            </div>
            <div className="swiper-button-next slider-arrow">
              <SlArrowRight name="arrow-forward-outline"></SlArrowRight>
            </div>
            <div
              className="swiper-pagination"
              style={{ position: 'relative', bottom: '-10px' }}></div>
          </div>
        </div>
      )}
      {props.variant === 'cube' && (
        <div className={styles.swiperCubeWrapper}>
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: false,
              shadowOffset: 10,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[Autoplay, EffectCube, Pagination]}
            className={styles.swiperContainerCube}>
            {props.feedback &&
              props.feedback.map((feedback) => (
                <SwiperSlide key={feedback.id}>
                  <Feedback
                    size="md"
                    id={feedback.id}
                    userName={feedback.userName}
                    courseName={feedback.courseName}
                    text={feedback.text}
                    idCourse={feedback.idCourse}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default SwiperSlider;
