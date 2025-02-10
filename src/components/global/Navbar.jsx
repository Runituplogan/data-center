import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import hamburger from "../../assets/images/hamburger.svg";

const Navbar = ({ onOpen }) => {
  return (
    <nav className="fixed md:absolute top-2 md:top-0 right-0 left-0 p-2 lg:px-16 bg-white md:py-8 sm:px-3 md:px-8">
      <div className="bg-[#FAFAFA] rounded-full w-full flex justify-between items-center gap-3 px-10 py-3 md:shadow-none shadow-md z-50">
        <div className="flex justify-start items-end">
          <img
            src={logo}
            alt="Talent councel logo"
            className="pr-1 h-12 w-12 md:h-full md:w-full"
          />
          <p className="font-semibold text-sm md:text-lg pl-2 md:pl-4 border-l-2 h-8 md:h-12 self-center flex justify-center items-center">
            Datacenters
          </p>
        </div>
        <div className="hidden md:flex justify-start items-center gap-4 md:gap-5 lg:gap-10 xl:gap-12 text-base md:text-lg">
          <Link to={"/"} className="text-[#3A3A3A]">
            Home
          </Link>
          <Link to={"/"} className="text-[#3A3A3A]">
            About Us
          </Link>
          <Link to={"/"} className="text-[#3A3A3A]">
            Open Roles
          </Link>
          <Link to={"/"} className="text-[#3A3A3A]">
            Successful Placements
          </Link>
        </div>

        <button
          aria-label="Contact us"
          className="text-base sm:text-lg md:text-xl md:block hidden rounded-full py-3 px-3 lg:px-6 blue-gradient text-white ease transition-all duration-200 hover:opacity-80"
        >
          Contact Us
        </button>

        <button
          onClick={onOpen}
          className="bg-[#39B5FF] px-3 py-4 rounded-md md:hidden block hover:opacity-80 ease transition-all duration-200 active:scale-105"
        >
          <img src={hamburger} alt="hamburger" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
