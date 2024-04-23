import Card from 'components/UI/CardCourse';
import styles from './ManePage.module.scss';
import PanelCourse from './PanelCourse';

const ManePage: React.FC = () => {
  return (
    <div className={styles.manePage}>
      <div className={styles.containerCourse}>
        <PanelCourse />
        {/* <Card
          title="React 2024. Learn React"
          nameCourse="React 2024. Learn React"
          nameTeacher="Sergey"
          imgUrl="https://reactjs.org/logo-og.png"
          onClick={() => console.log('React 2024. Learn React')}
        /> */}
      </div>
    </div>
  );
};

export default ManePage;
