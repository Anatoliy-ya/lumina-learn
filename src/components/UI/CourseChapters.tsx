import styles from './CourseChapters.module.scss';

import { SlArrowDown } from 'react-icons/sl';
import { colors } from '../../styles/colors';

import Text from './Text';

interface PropsCourseChapters {
  children?: React.ReactNode;
  showContent: boolean;
  id: string;
  chapters: { id: number; chapters: string[] }[];
  onClick: () => void;
}

const CourseChapters: React.FC<PropsCourseChapters> = (props) => {
  const classContent = props.showContent ? styles.contentOverview : styles.contentHiddenOverview;
  const classWrapper = props.showContent
    ? `${styles.wrapperContent} ${styles.show}`
    : styles.wrapperContent;
  const classDropdownIcon = props.showContent ? styles.dropdownIcon : styles.dropdownIconRotate;

  return (
    <div className={classWrapper} id={props.id} onClick={props.onClick}>
      <Text size="md" color="secondary" style="h3" className={styles.overview}>
        ОГЛАВЛЕНИЕ КУРСА ({props.chapters.length})
      </Text>
      <SlArrowDown
        className={classDropdownIcon}
        color={colors.primary}
        size={24}
        title="Dropdown Content Course"
      />
      {/* <img src={dropdownIcon} alt="" className={classDropdownIcon} /> */}
      <div className={classContent}>
        {props.chapters.map((item, index) => (
          <Text
            size="md"
            color="text-color"
            style="p"
            id={`${props.id}-${index}`}
            key={index}
            className={styles.contentCourseText}>
            {index + 1}. {item.chapters}
          </Text>
        ))}
      </div>
    </div>
  );
};

export default CourseChapters;
