import styles from './PanelCourse.module.scss';

import { useState } from 'react';
import PreviewTab from './PreviewTab';

const PanelCourse: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('preview');
  const classPreviewTab =
    activeTab === 'preview' ? `${styles.tab_btn} ${styles.active}` : `${styles.tab_btn}`;
  const classCourseTab =
    activeTab === 'course' ? `${styles.tab_btn} ${styles.active}` : `${styles.tab_btn}`;

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
      {activeTab === 'preview' && <PreviewTab />}
      {activeTab === 'course' && <div>Course</div>} {/* TODO Add tab Course */}
    </div>
  );
};

export default PanelCourse;
