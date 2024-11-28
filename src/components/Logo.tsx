import { FC } from 'react';

import logo from '../assets/svg/logo.svg';
import whiteLogo from '../assets/svg/logo-white.svg';

type LogoProps = {
  isWhite?: boolean;
  className?: string;
};

const Logo: FC<LogoProps> = ({ isWhite = false, className = '' }) => {
  return (
    <img
      src={isWhite ? whiteLogo : logo}
      alt="logo"
      className={`h-20 ${className}`}
    />
  );
};

export default Logo;
