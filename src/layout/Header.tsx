import Logo from '../components/Logo';
import NavBar from '../components/NavBar';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 absolute top-0 left-0 z-10 w-full container max-w-none">
      <Logo isWhite />
      <NavBar className="hidden md:block" />
    </header>
  );
};

export default Header;
