import { motion } from 'framer-motion';
import { colorNavigation } from '../../../styles/colors';

interface MenuItemProps {
  children?: React.ReactNode;
  category: string;
  i: number;
}
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem: React.FC<MenuItemProps> = ({ i: i }: { i: number }) => {
  const style = { border: `2px solid ${colorNavigation[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      style={style}>{`Category ${i + 1}`}</motion.li>
  );
};

export default MenuItem;
