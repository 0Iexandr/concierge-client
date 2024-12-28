import { FC } from 'react';

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
      'ABOUT',
      'CONCIERGE TYPES',
      'SERVICES',
      'EVENTS',
      'ENQUIRY FORM',
      'CONTACTS',
    ],
    links: ['#about', '#types', '#services', '#events', '#form', '#contacts'],
  };

  return (
    <nav>
      <ul className={className}>
        {navBarData.items.map((item, idx) => (
          <li key={idx}>
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
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
