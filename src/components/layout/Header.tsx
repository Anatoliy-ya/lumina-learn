import Button from 'components/UI/Button';
import styles from './Header.module.scss';

const Header: React.FC = (props) => {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <header className={styles.header}>
      <h1 onClick={refresh}>Learn Platform</h1>
      <Button variant="primary" size="md">
        Button
      </Button>
    </header>
  );
};

export default Header;
