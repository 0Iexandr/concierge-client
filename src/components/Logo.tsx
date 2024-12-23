import { FC } from 'react';

import logo from '../assets/svg/logo.svg';
import whiteLogo from '../assets/svg/logo-white.svg';

type LogoProps = {
  isWhite?: boolean;
  className?: string;
  isLink?: boolean;
};

const Logo: FC<LogoProps> = ({
  isWhite = false,
  className = '',
  isLink = false,
}) => {
  const logoImage = (
    <img
      src={isWhite ? whiteLogo : logo}
      alt="logo"
      className={`h-20 ${className}`}
    />
  );

  return isLink ? (
    <a href="/" className="inline-block">
      {logoImage}
    </a>
  ) : (
    logoImage
  );
};

export default Logo;
