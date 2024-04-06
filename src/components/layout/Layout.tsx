import Footer from './Footer';
import Header from './Header';
import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className={styles.layout_container}>
      <Header />
      <div className={styles.content}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
