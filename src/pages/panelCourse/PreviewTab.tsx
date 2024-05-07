import styles from './PanelCourse.module.scss';
import { SetStateAction, useEffect, useState } from 'react';

import Text from '../../components/UI/Text';
import Button from 'components/UI/Button';
import CourseChapters from 'components/UI/CourseChapters';
import { courses } from './../../store/Courses';
import { CourseStateMini } from 'types/types';

interface PropsPreviewTab {
  id: number | null;
}

const PreviewTab: React.FC<PropsPreviewTab> = (props) => {
  const [showContent, setShowContent] = useState<boolean>(Boolean);
  const [chapters, setChapters] = useState<{ id: number; chapters: string[] }[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<CourseStateMini[]>([]);

  useEffect(() => {
    const arrChapters = courses
      .filter((course) => course.id === props.id)
      .map((course) => ({
        id: course.id,
        chapters: Object.values(course.chapters),
      }));

    const filteredCourses: CourseStateMini[] = [];
    courses.map((course) => {
      if (course.id === props.id) {
        const filteredCourse: CourseStateMini = {
          id: course.id,
          name: course.nameCourse,
          nameTeacher: course.nameTeacher,
          nameCourse: course.nameCourse,
          imgUrl: course.imgUrl,
          title: course.title,
          chapters: course.chapters,
        };
        filteredCourses.push(filteredCourse);
      }
    });

    if (filteredCourses !== null) {
      setSelectedCourse(filteredCourses);
    }
    console.log('arrChapters', arrChapters, typeof arrChapters);

    if (arrChapters.length > 0 && arrChapters[0].id === props.id) {
      setChapters(arrChapters);
    } else {
      setChapters([]);
    }
  }, [props.id]);
  console.log('selectedCourse', selectedCourse, props.id);
  return (
    <>
      <div className={styles.courseImg}>
        <img src={selectedCourse[0]?.imgUrl} alt={selectedCourse[0]?.title} />
        <div className={styles.coursePrice}>
          <Text size="lg" color="text-color" style="h2" className={styles.price}>
            Цена: 1000$
          </Text>
          <Button
            variant="primary"
            size="sm"
            onClick={() => console.log('Buy course: React 2024. Learn React')}>
            Купить
          </Button>
        </div>
      </div>
      <div className={styles.courseBody}>
        <Text size="lg" color="text-color" style="h2">
          {selectedCourse[0]?.nameCourse}
        </Text>
        <Text size="md" color="text-color" style="h3">
          Автор: {selectedCourse[0]?.nameTeacher}
        </Text>
        <Text size="md" color="text-color" style="p">
          {selectedCourse[0]?.nameCourse}
        </Text>
        <CourseChapters
          chapters={chapters}
          showContent={showContent}
          id={'nameCourse' + selectedCourse[0]?.id}
          onClick={() => setShowContent(!showContent)}
        />
      </div>
    </>
  );
};

export default PreviewTab;
