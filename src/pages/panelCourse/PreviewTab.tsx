import styles from './PanelCourse.module.scss';
import Text from '../../components/UI/Text';
import Button from 'components/UI/Button';
import CourseContent from 'components/UI/CourseContent';
import { useState } from 'react';

const PreviewTab: React.FC = () => {
  const [showContent, setShowContent] = useState<boolean>(Boolean);
  const content = [
    'Content 1Content 1Content 1Content 1Content 1Content 1',
    'Content 2Content 2Content 2Content 2Content 2Content 2Content 2',
    'Content 3',
    'Content 4',
  ];

  return (
    <>
      <div className={styles.courseImg}>
        <img src="https://reactjs.org/logo-og.png" alt="React 2024. Learn React" />
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
          React 2024. Learn React
        </Text>
        <Text size="md" color="text-color" style="h3">
          Автор: Sergey
        </Text>
        <Text size="md" color="text-color" style="p">
          Description Course
        </Text>
        <CourseContent
          content={content}
          showContent={showContent}
          id="courseContent"
          onClick={() => setShowContent(!showContent)}
        />
      </div>
    </>
  );
};

export default PreviewTab;
