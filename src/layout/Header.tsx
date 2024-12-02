// import { useState } from 'react';

import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import burger from '../assets/svg/burger.svg';
// import BurgerMenu from '../components/BurgerMenu';

const Header = () => {
  // const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 absolute top-0 left-0 z-10 w-full container max-w-none gap-x-5">
      <Logo isWhite className="lg:h-20 md:h-16 h-14" />
      <NavBar className="hidden md:flex gap-x-5 lg:gap-x-12" />
      <button
        className="flex justify-center items-center md:hidden"
        // onClick={() => setIsBurgerOpen(true)}
      >
        <img src={burger} alt="menu" className="h-10" />
      </button>
      {/* <BurgerMenu
        isBurgerOpen={isBurgerOpen}
        setIsBurgerOpen={setIsBurgerOpen}
      /> */}
    </header>
  );
};

export default Header;
