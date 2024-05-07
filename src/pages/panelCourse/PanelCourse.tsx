import styles from './PanelCourse.module.scss';

import { useState } from 'react';
import PreviewTab from './PreviewTab';
import { useParams } from 'react-router-dom';

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

  console.log('props', props);
  const handleTabClick = (tab: string) => {
    console.log('tab', tab);
    setActiveTab(tab);
  };

  return (
    <div className={styles.panelCourse}>
      <div className={styles.tabs}>
        <button className={classPreviewTab} onClick={() => handleTabClick('preview')}>
          Preview
        </button>
        <button className={classCourseTab} onClick={() => handleTabClick('course')}>
          Course
        </button>
      </div>
      {(activeTab === 'preview' || selectedId !== null) && <PreviewTab id={selectedId} />}
      {activeTab === 'course' && <div>Course</div>} {/* TODO Add tab Course */}
    </div>
  );
};

export default PanelCourse;
