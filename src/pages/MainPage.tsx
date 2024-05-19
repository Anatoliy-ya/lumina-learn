import styles from './MainPage.module.scss';

import CardCourse from 'components/UI/CardCourse';
import { courses } from './../store/Courses';
import Carousel from 'components/UI/Carousel';
import SwiperSlider from 'components/UI/SwiperSlider';

interface PropsMainPage {}
const MainPage: React.FC<PropsMainPage> = (props) => {
  return (
    <main className={styles.mainPage}>
      <div className={styles.containerCourse}>
        <SwiperSlider />
        {/* <Carousel size="md">
          {courses.map((course) => (
            <CardCourse
              className={styles.card}
              key={course.id}
              nameCourse={course.nameCourse}
              nameTeacher={course.nameTeacher}
              imgUrl={course.imgUrl}
              title={course.title}
              id={course.id}
              size="md"
            />
          ))}
        </Carousel> */}
      </div>
    </main>
  );
};

export default MainPage;
