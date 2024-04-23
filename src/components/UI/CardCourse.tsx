import styles from './CardCourse.module.scss';
import Text from './Text';

interface PropsCard {
  children?: React.ReactNode;
  onClick?: () => void;
  nameCourse: string;
  nameTeacher: string;
  imgUrl?: string;
  title: string;
}

const Card: React.FC<PropsCard> = (props) => {
  return (
    <div className={styles.card} onClick={props.onClick}>
      <img src={props.imgUrl} alt={props.title} className={styles.cardImg} />
      <div className={styles.cardBody}>
        <Text size="md" color="text-color" style="h3">
          {props.nameCourse}
        </Text>
        <Text size="md" color="text-color" style="h3">
          {props.nameTeacher}
        </Text>
        {
          // DOTO: Add more content here like isFavorite and price
        }
      </div>
    </div>
  );
};

export default Card;
