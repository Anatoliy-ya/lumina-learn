import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

import Button from 'components/UI/Button';
import logo from '../../assets/logo/logo.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <h2>The project is still in development</h2>
      <Button variant="primary" size="md">
        Button
      </Button>
    </header>
  );
};

export default Header;
