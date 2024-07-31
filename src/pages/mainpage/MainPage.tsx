import styles from './MainPage.module.scss';
import Banner from '../../assets/img/open-magic-book-with-bright-glow-around-small-particles-book-are-scattered-air_916189-723.jpg';

import { motion } from 'framer-motion';
import { courses } from '../../store/Courses';
import { feedbacks } from '../../store/Feedback';

import SwiperSlider from 'components/UI/SwiperSlider';
import Text from 'components/UI/Text';
import AboutUs from './AboutUs';

interface PropsMainPage {}
const MainPage: React.FC<PropsMainPage> = (props) => {
  console.log('1111', courses);
  return (
    <main className={styles.mainPage}>
      <motion.div
        className={`${styles.section} ${styles.containerSlider}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}>
        <Text style="h1" color="secondary" className={styles.heading}>
          Sale Course
        </Text>
        <SwiperSlider size="lg" courses={courses} variant="coverflow" />
      </motion.div>

      <motion.div
        className={`${styles.section} ${styles.containerAbout}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <Text style="h1" color="secondary" className={styles.heading}>
          About us
        </Text>
        <div className={styles.aboutUs}>
          <AboutUs />
        </div>
        <SwiperSlider size="md" variant="cube" feedback={feedbacks} />
      </motion.div>

      <motion.div
        className={`${styles.section} ${styles.containerBanner}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <Text style="h4" color="secondary" className={styles.bannerText}>
          Banner
        </Text>
        <img src={Banner} alt="Banner" className={styles.banner} />
      </motion.div>
    </main>
  );
};

export default MainPage;
