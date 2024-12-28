import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

import close from '../assets/svg/close.svg';
import ContactForm from './ContactForm';
import Logo from './Logo';

interface BurgerMenuProps {
  isContactOpen: boolean;
  setIsContactOpen: (isOpen: boolean) => void;
}

const ContactModal: FC<BurgerMenuProps> = ({
  isContactOpen,
  setIsContactOpen,
}) => {
  useEffect(() => {
    if (isContactOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isContactOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsContactOpen(false);
    }
  };

  return createPortal(
    <div
      className={`fixed top-0 right-0 w-screen h-screen z-40 bg-[#00000090] transition-opacity duration-300 flex items-center justify-center overflow-hidden ${
        isContactOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative flex flex-col items-center gap-y-10 w-[90vw] h-[95vh] max-w-xl bg-[#F0F0F0] grain-effect p-8 rounded-lg shadow-lg transition-transform duration-300 overflow-y-auto ${
          isContactOpen ? 'scale-100' : 'scale-90'
        }`}
      >
        <button
          onClick={() => setIsContactOpen(false)}
          className="w-10 h-10 absolute top-8 right-8"
        >
          <img src={close} alt="close" />
        </button>
        <Logo />
        <div className="flex flex-col gap-y-4">
          <h3 className="text-main font-playfair text-2xl sm:text-3xl md:text-4xl font-medium text-center sm:leading-snug md:leading-snug">
            LUXURY CONCIERGE
          </h3>
          <p className="font-inter text-additionalText text-sm md:text-base font-light text-center leading-normal">
            Fill the form and we will contact you shortly
          </p>
        </div>
        <ContactForm />
      </div>
    </div>,
    document.querySelector('#modal') as HTMLElement,
  );
};

export default ContactModal;
