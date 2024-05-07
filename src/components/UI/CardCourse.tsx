import { useNavigate } from 'react-router-dom';
import styles from './CardCourse.module.scss';
import Text from './Text';

interface PropsCardCourse {
  children?: React.ReactNode;
  onClick?: (id: number) => void;
  nameCourse: string;
  nameTeacher: string;
  imgUrl?: string;
  title: string;
  id: number;
}

const CardCourse: React.FC<PropsCardCourse> = (props) => {
  const navigate = useNavigate();
  const handleClickCard = () => {
    console.log('handleClickCard', props.id);
    navigate(`/panelcourse/${props.id}`);
  };

  return (
    <div className={styles.card} onClick={handleClickCard}>
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

export default CardCourse;
