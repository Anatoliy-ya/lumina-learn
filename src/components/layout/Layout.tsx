import Footer from './Footer';
import Header from './Header';
import styles from './Layout.module.scss';

interface PropsLayout {
  children: React.ReactNode;
}

const Layout: React.FC<PropsLayout> = (props) => {
  return (
    <div className={styles.layout_container}>
      <Header />
      <div className={styles.content}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
