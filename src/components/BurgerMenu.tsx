import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

import NavBar from './NavBar';
import Logo from './Logo';
import close from '../assets/svg/close.svg';

interface BurgerMenuProps {
  isBurgerOpen: boolean;
  setIsBurgerOpen: (isOpen: boolean) => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isBurgerOpen, setIsBurgerOpen }) => {
  useEffect(() => {
    if (isBurgerOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isBurgerOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsBurgerOpen(false);
    }
  };

  return createPortal(
    <div
      className={`fixed top-0 right-0 w-screen h-screen z-40 bg-[#422617de] transition-opacity duration-300 ${
        isBurgerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`absolute top-0 right-0 w-[80vw] h-screen bg-[#F0F0F0] grain-effect container max-w-none flex flex-col gap-y-20 py-10 transition-transform duration-300 overflow-y-auto ${
          isBurgerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsBurgerOpen(false)}
          className="w-10 h-10 absolute right-6"
        >
          <img src={close} alt="close" />
        </button>
        <Logo className="w-fit" />
        <NavBar
          className="flex flex-col gap-y-5"
          textClassName="text-xl break-words text-additionalText"
          setIsBurgerOpen={setIsBurgerOpen}
        />
        <hr className="w-full border-t-2 border-additionalText m-0 opacity-20" />
      </div>
    </div>,
    document.querySelector('#modal') as HTMLElement,
  );
};

export default BurgerMenu;
