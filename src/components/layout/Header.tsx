import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

import Button from 'components/UI/Button';
import Sidebar from './sidebar/Sidebar';
import logo from '../../assets/logo/logo.png';

const Header: React.FC = (props) => {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <Button variant="primary" size="md">
        Button
      </Button>
    </header>
  );
};

export default Header;
