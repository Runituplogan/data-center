import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import hamburger from "../../assets/images/hamburger.svg";
import { XDivMotion } from "../DivMotion";

const Navbar = ({ onOpen }) => {
  return (
    <nav className="fixed md:absolute top-2 md:top-0 right-0 left-0 p-2 lg:px-16 bg-white md:pt-4 sm:px-3 md:px-8 z-[90]">
      <div className="bg-[FAFAFA bg-white rounded-full w-full flex justify-between items-center gap-3 px-10 py-3 md:shadow-none shadow-md">
        <div className="flex justify-start items-end overflow-hidden">
          <img
            src={logo}
            alt="Talent councel logo"
            className="pr-1 h-12 w-12 md:h-full md:w-full z-10"
          />
          <XDivMotion
            initial={-30}
            className="z-0 font-bold text-sm md:text-lg pl-2 md:pl-4 border-l-2 h-8 md:h-12 self-center flex justify-center items-center"
          >
            <p>Datacenters</p>
          </XDivMotion>
        </div>
        <div className="hidden md:flex justify-start items-center gap-4 md:gap-5 lg:gap-10 xl:gap-12 text-base md:text-lg font-medium">
          <Link
            to="/#home"
            className="text-[#3A3A3A] hover:text-[#39B5FF] ease transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/#about-us"
            className="text-[#3A3A3A] hover:text-[#39B5FF] ease transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            to="/#open-roles"
            className="text-[#3A3A3A] hover:text-[#39B5FF] ease transition-all duration-300"
          >
            Open Roles
          </Link>
          <Link
            to="/#successful-placements"
            className="text-[#3A3A3A] hover:text-[#39B5FF] ease transition-all duration-300"
          >
            Successful Placements
          </Link>
        </div>

        <Link
          to="/#send-us-message"
          aria-label="Contact us"
          className="text-base sm:text-lg md:text-xl md:block hidden rounded-full py-3 px-3 lg:px-6 blue-gradient text-white ease transition-all duration-200 hover:opacity-80"
        >
          Contact Us
        </Link>

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
