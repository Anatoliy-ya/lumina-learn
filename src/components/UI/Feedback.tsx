import styles from './Feedback.module.scss';
import { FeedbackInterface } from '../../types/types';
import { useNavigate } from 'react-router-dom';

interface AdditionalProps {
  size: 'md' | 'lg';
}
interface PropsFeedback extends FeedbackInterface, AdditionalProps {}
const Feedback: React.FC<PropsFeedback> = (props) => {
  const navigate = useNavigate();

  const classFeedback = `${styles.feedbackWrapper} ${styles[props.size]}`;
  const classFeedbackText = `${styles.feedbackText} ${styles[props.size]}`;

  const handleClickCard = () => {
    console.log('handleClickCard', props.id);
    navigate(`/panelcourse/${props.id}`);
  };

  return (
    <div className={classFeedback}>
      <div className={styles.user}>
        <img className={styles.userImg} src="src\assets\avatar\Platzhalter.png" />
        <div className={styles.userName}>{props.userName}</div>
      </div>
      <div className={classFeedbackText}>
        Course:
        <div className={styles.courseName} onClick={handleClickCard}>
          {props.courseName}
        </div>
        {props.userName}: {props.text}
      </div>
    </div>
  );
};

export default Feedback;
