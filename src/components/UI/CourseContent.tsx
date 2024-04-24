import styles from './CourseContent.module.scss';
import Text from './Text';
import { SlArrowDown } from 'react-icons/sl';
import { colors } from '../../styles/colors';

// import dropdownIcon from '../../assets/svg/dropdown.svg';

interface PropsCourseContent {
  children?: React.ReactNode;
  showContent: boolean;
  id: string;
  content: string[];
  onClick: () => void;
}

const CourseContent: React.FC<PropsCourseContent> = (props) => {
  const classContent = props.showContent ? styles.contentOverview : styles.contentHiddenOverview;
  const classWrapper = `${styles.wrapperContent} ${styles.show}`;
  const classDropdownIcon = props.showContent ? styles.dropdownIcon : styles.dropdownIconRotate;
  console.log();
  return (
    <div className={classWrapper} id={props.id} onClick={props.onClick}>
      <Text size="md" color="secondary" style="h3" className={styles.overview}>
        ОГЛАВЛЕНИЕ КУРСА ({props.content.length})
      </Text>
      <SlArrowDown
        className={classDropdownIcon}
        color={colors.primary}
        size={24}
        title="Dropdown Content Course"
      />
      {/* <img src={dropdownIcon} alt="" className={classDropdownIcon} /> */}
      <div className={classContent}>
        {props.content.map((item, index) => (
          <Text
            size="md"
            color="text-color"
            style="p"
            id={`${props.id}-${index}`}
            key={index}
            className={styles.contentCourseText}>
            {index + 1}. {item}
          </Text>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
