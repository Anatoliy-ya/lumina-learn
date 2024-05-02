import Card from 'components/UI/CardCourse';
import styles from './MainPage.module.scss';
import PanelCourse from './panelCourse/PanelCourse';

const MainPage: React.FC = () => {
  return (
    <main className={styles.mainPage}>
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
    </main>
  );
};

export default MainPage;
