import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import styles from './Sidebar.module.scss';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const Navigation = () => (
  <motion.ul variants={variants} className={styles.nav}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} category={i.toString()} />
    ))}
  </motion.ul>
);

export default Navigation;
