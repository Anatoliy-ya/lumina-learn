import styles from './CourseContent.module.scss';
import Text from './Text';
import Button from './Button';

// TODO: fix ReactComponent for icon in svg
// import { ReactComponent as DropdownIcon } from '../../assets/svg/dropdown.svg';
import dropdownIcon from '../../assets/svg/dropdown.svg';

interface PropsCourseContent {
  children?: React.ReactNode;
  showContent: boolean;
  id: string;
  content: string[];
  onClick: () => void;
}

const CourseContent: React.FC<PropsCourseContent> = (props) => {
  const classContent = props.showContent ? styles.content : styles.contentHidden;
  const classWrapper = `${styles.wrapperContent} ${styles.show}`;
  console.log('classContent', classContent);
  return (
    <div className={classWrapper} id={props.id} onClick={props.onClick}>
      ОГЛАВЛЕНИЕ КУРСА ({props.content.length}){' '}
      <img src={dropdownIcon} alt="" className={styles.dropdownIcon} />
      <div className={classContent}>
        {props.content.map((item, index) => (
          <Text size="md" color="text-color" style="p" id={`${props.id}-${index}`} key={index}>
            {index + 1}. {item}
          </Text>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
