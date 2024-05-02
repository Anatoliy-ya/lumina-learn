import Button from 'components/UI/Button';
import styles from './Header.module.scss';
import Sidebar from './sidebar/Sidebar';
import logo from '../../assets/logo/logo.png';

const Header: React.FC = (props) => {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} onClick={refresh} />
      <Button variant="primary" size="md">
        Button
      </Button>
    </header>
  );
};

export default Header;
