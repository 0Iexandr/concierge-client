import { FC } from 'react';
import { createPortal } from 'react-dom';

import NavBar from './NavBar';

interface BurgerMenuProps {
  isBurgerOpen: boolean;
  setIsBurgerOpen: (isOpen: boolean) => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isBurgerOpen, setIsBurgerOpen }) => {
  return createPortal(
    <div
      className={`fixed top-0 right-0 w-screen h-screen z-40 transition-opacity duration-300 ${
        isBurgerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        className={`absolute top-0 right-0 w-[80vw] h-screen bg-[#F0F0F0] grain-effect container max-w-none flex flex-col items-center gap-y-20 py-10 transition-transform duration-300 ${
          isBurgerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={() => setIsBurgerOpen(false)}>close</button>
        <NavBar />
      </div>
    </div>,
    document.querySelector('#modal') as HTMLElement,
  );
};

export default BurgerMenu;
