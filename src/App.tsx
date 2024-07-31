import styles from './App.module.scss';

import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/mainpage/MainPage';
import Layout from './components/layout/Layout';
import PanelCourse from './pages/panelCourse/PanelCourse';

function App() {
  return (
    <div className={styles.app}>
      <Layout>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/panelcourse/:id" element={<PanelCourse />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
