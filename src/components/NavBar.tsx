import { FC } from 'react';

interface NavBarProps {
  className?: string;
  textClassName?: string;
}

const NavBar: FC<NavBarProps> = ({ className = '', textClassName = '' }) => {
  const items = [
    'ABOUT',
    'CONCIERGE TYPES',
    'SERVICES',
    'EVENTS',
    'ENQUIRY FORM',
    'CONTACTS',
  ];

  return (
    <nav>
      <ul className={className}>
        {items.map((item, idx) => (
          <li key={idx}>
            <a
              href="/"
              className={`font-inter md:text-base lg:text-lg text-sm ${textClassName}`}
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
