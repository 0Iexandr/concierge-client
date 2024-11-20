import { FC } from 'react';

interface NavBarProps {
  className?: string;
}

const NavBar: FC<NavBarProps> = ({ className = '' }) => {
  const items = [
    'ABOUT',
    'CONCIERGE TYPES',
    'SERVICES',
    'EVENTS',
    'ENQUIRY FORM',
    'CONTACTS',
  ];

  return (
    <nav className={className}>
      <ul className="flex gap-x-5">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
