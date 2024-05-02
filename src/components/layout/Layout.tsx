import Footer from './Footer';
import Header from './Header';
import styles from './Layout.module.scss';
import Sidebar from './sidebar/Sidebar';

interface PropsLayout {
  children: React.ReactNode;
}

const Layout: React.FC<PropsLayout> = (props) => {
  return (
    <div className={styles.layout_container}>
      <Header />
      <Sidebar />
      <div className={styles.contentLayout}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
