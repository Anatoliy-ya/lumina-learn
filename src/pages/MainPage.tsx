import styles from './MainPage.module.scss';

import SwiperSlider from 'components/UI/SwiperSlider';
import { motion } from 'framer-motion';
import { courses } from '../store/Courses';
import { feedbacks } from '../store/Feedback';
import Feedback from 'components/UI/Feedback';

interface PropsMainPage {}
const MainPage: React.FC<PropsMainPage> = (props) => {
  console.log('1111', courses);
  return (
    <main className={styles.mainPage}>
      <motion.div
        className={`${styles.section} ${styles.containerSlider}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}>
        <SwiperSlider size="lg" courses={courses} variant="coverflow" />
      </motion.div>

      <motion.div
        className={`${styles.section} ${styles.containerAbout}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <h1 className={styles.heading}>About us</h1>
        <div className={styles.aboutUs}></div>

        <SwiperSlider size="md" variant="cube" feedback={feedbacks} />
      </motion.div>
    </main>
  );
};

export default MainPage;
