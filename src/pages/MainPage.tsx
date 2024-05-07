import styles from './MainPage.module.scss';

import CardCourse from 'components/UI/CardCourse';
import { courses } from './../store/Courses';

interface PropsMainPage {}
const MainPage: React.FC<PropsMainPage> = (props) => {
  return (
    <main className={styles.mainPage}>
      <div className={styles.containerCourse}>
        {courses.map((course) => (
          <CardCourse
            key={course.id}
            nameCourse={course.nameCourse}
            nameTeacher={course.nameTeacher}
            imgUrl={course.imgUrl}
            title={course.title}
            id={course.id}
          />
        ))}
      </div>
    </main>
  );
};

export default MainPage;
