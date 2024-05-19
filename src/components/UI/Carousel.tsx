import styles from './Carousel.module.scss';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PropsCarousel {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
}

const Carousel: React.FC<PropsCarousel> = (props) => {
  const classSlider = `${styles.CarouselWrapper} ${styles[props.size]}`;
  const [widthCarousel, setWidthCarousel] = React.useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('carousel', carousel.current.offsetWidth, carousel.current.scrollWidth);
    if (carousel.current && carousel.current.scrollWidth) {
      setWidthCarousel(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div ref={carousel} className={classSlider}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -widthCarousel }}
        className={styles.innerCarousel}>
        {props.children}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;

// const settings = {
//   dots: true,
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   pauseOnHover: true,
// };

// const Carousel: React.FC<PropsCarousel> = (props) => {
//   const classSlider = `${styles.sliderWrapper} ${styles[props.size]}`;
//   return (
//     <div className={classSlider}>
//       <Slider {...settings}>
//         {props.children}
//         {/* Добавьте больше слайдов по мере необходимости */}
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;
