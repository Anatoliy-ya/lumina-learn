import Input from 'components/UI/Input';
import styles from './App.module.scss';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className={styles.app}>
      <Layout>
        <Input variant="secondary" size="sm" />
      </Layout>
    </div>
  );
}

export default App;
