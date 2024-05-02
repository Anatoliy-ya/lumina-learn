import React from 'react';
import styles from './Sidebar.module.scss';
import { motion, useCycle } from 'framer-motion';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 50,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(35px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      className={styles.sidebar}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}>
      <Navigation />
      <MenuToggle toggle={toggleOpen} />
    </motion.div>
  );
};

export default Sidebar;
