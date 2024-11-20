import NavBar from '../components/NavBar';

const Header = () => {
  return (
    <header className="flex justify-between items-center h-20 absolute top-0 left-0 z-10 w-full container max-w-none">
      <h3>LOGO</h3>
      <NavBar className="hidden md:block" />
    </header>
  );
};

export default Header;
