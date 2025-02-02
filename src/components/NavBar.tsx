import { FC } from 'react';
import { motion } from 'framer-motion';

interface NavBarProps {
  className?: string;
  textClassName?: string;
  setIsBurgerOpen?: (isOpen: boolean) => void;
}

const NavBar: FC<NavBarProps> = ({
  className = '',
  textClassName = '',
  setIsBurgerOpen,
}) => {
  const navBarData = {
    items: [
      'SERVICES',
      'CONCIERGE TYPES',
      'EVENTS',
      'ABOUT',
      'ENQUIRY FORM',
      'CONTACTS',
    ],
    links: ['#services', '#types', '#events', '#about', '#form', '#contacts'],
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    }),
  };

  return (
    <nav>
      <motion.ul
        className={className}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {navBarData.items.map((item, idx) => (
          <motion.li
            key={idx}
            variants={itemVariants}
            custom={idx}
            initial="hidden"
            animate="visible"
          >
            <a
              href={navBarData.links[idx]}
              className={`font-inter md:text-base lg:text-lg text-sm ${textClassName}`}
              onClick={() => {
                if (setIsBurgerOpen) {
                  setIsBurgerOpen(false);
                }
              }}
            >
              {item}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default NavBar;
