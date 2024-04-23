import ManePage from './pages/ManePage';
import styles from './App.module.scss';
import Layout from './components/layout/Layout';
import Card from 'components/UI/CardCourse';

function App() {
  return (
    <div className={styles.app}>
      <Layout>
        <ManePage />
      </Layout>
    </div>
  );
}

export default App;
