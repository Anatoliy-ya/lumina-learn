import styles from './PanelCourse.module.scss';

import { useState } from 'react';
import PreviewTab from './PreviewTab';
import { useParams } from 'react-router-dom';
import Button from 'components/UI/Button';

interface PropsPanelCourse {
  id?: number | null;
}
const PanelCourse: React.FC<PropsPanelCourse> = (props) => {
  const { id } = useParams<{ id: string }>();
  const selectedId = id ? parseInt(id) : null;

  const [activeTab, setActiveTab] = useState<string>('preview');
  const classPreviewTab =
    activeTab === 'preview' ? `${styles.tab_btn} ${styles.active}` : `${styles.tab_btn}`;
  const classCourseTab =
    activeTab === 'course' ? `${styles.tab_btn} ${styles.active}` : `${styles.tab_btn}`;

  console.log('selectedId', selectedId);
  const handleTabClick = (tab: string) => {
    console.log('tab', tab);
    setActiveTab(tab);
  };

  return (
    <div className={styles.panelCourse}>
      <div className={styles.tabs}>
        <Button
          variant="primary"
          size="xs"
          className={classPreviewTab}
          onClick={() => handleTabClick('preview')}>
          Preview
        </Button>
        <Button
          variant="primary"
          size="xs"
          className={classCourseTab}
          onClick={() => handleTabClick('course')}>
          Course
        </Button>
      </div>
      {activeTab === 'preview' && <PreviewTab id={selectedId} />}
      {activeTab === 'course' && <div>Course</div>} {/* TODO Add tab Course */}
    </div>
  );
};

export default PanelCourse;
