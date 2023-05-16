// assets
import { HeaderLogoIcon } from '../../assets/icons';

const Header = () => {
  return (
    <>
      <header className="py-8 px-9 backdrop-blur-[124px] w-full">
        <div className="flex  items-center">
          <HeaderLogoIcon />
          <p className="text-2xl ml-4">Weather App</p>
        </div>
      </header>
    </>
  );
};

export default Header;
