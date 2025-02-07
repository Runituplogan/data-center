import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import hamburger from "../../assets/images/hamburger.svg";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center gap-3 fixed md:absolute top-0 right-0 left-0 px-5 py-3 md:py-8 md:px-20 md:shadow-none shadow-md z-20 bg-white">
      <img src={logo} alt="Talent councel logo" />
      <div className="hidden md:flex justify-start items-center gap-4 md:gap-7 lg:gap-12">
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
        className="md:block hidden rounded-full py-3 px-6 blue-gradient text-white ease transition-all duration-200 hover:opacity-80"
      >
        Contact Us
      </button>

      <button className="bg-[#39B5FF] px-3 py-4 rounded-md md:hidden block hover:opacity-80 ease transition-all duration-200 active:scale-105">
        <img src={hamburger} alt="hamburger" />
      </button>
    </nav>
  );
};

export default Navbar;
