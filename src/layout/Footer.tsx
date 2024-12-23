import Contacts from '../components/Contacts';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import Socials from '../components/Socials';

const Footer = () => {
  return (
    <footer className="bg-main grain-effect container max-w-none py-12 flex flex-col gap-16">
      <Logo isWhite className="w-fit" />
      <div className="flex md:justify-between flex-col md:flex-row gap-12">
        <NavBar
          className="flex flex-col gap-y-5"
          textClassName="lg:text-2xl md:text-2xl text-xl break-words"
        />
        <Contacts />
        <Socials />
      </div>
      <div className="flex flex-col items-center gap-y-3">
        <hr className="w-full border-t-2 border-additionalText m-0 opacity-50" />
        <p className="section__description text-skin opacity-40">
          ©All Rights reserved 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
