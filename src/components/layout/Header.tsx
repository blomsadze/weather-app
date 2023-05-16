// assets
import { HeaderLogoIcon } from '../../assets/icons';

const Header = () => {
  return (
    <>
      <header className="md:py-8 py-4 flex justify-center px-9 backdrop-blur-[124px] w-full">
        <div className="flex max-width items-center">
          <HeaderLogoIcon />
          <p className="text-2xl ml-4">Weather App</p>
        </div>
      </header>
    </>
  );
};

export default Header;
