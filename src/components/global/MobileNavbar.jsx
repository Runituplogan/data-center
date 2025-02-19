import { Link } from "react-router-dom";

const MobileNavbar = ({ open, onClose }) => {
  return (
    <nav
      className={`${
        open ? "" : "opacity-35 translate-x-[4000px] -z[500]"
      } ease transition-all duration-300 bg-white fixed inset-0 px-5 py-20 h-full z-[99]`}
    >
      <div className="flex flex-col justify-center items-center text-xl gap-7 relative">
        <button
          onClick={onClose}
          className="text-2xl absolute -top-10 left-0 p-2 hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100"
        >
          X
        </button>
        <Link
          onClick={onClose}
          to="/#home"
          className="text-[#3A3A3A] hover:underline"
        >
          Home
        </Link>
        <Link
          onClick={onClose}
          to="/#about-us"
          className="text-[#3A3A3A] hover:underline"
        >
          About Us
        </Link>
        <Link
          onClick={onClose}
          to="/#open-roles"
          className="text-[#3A3A3A] hover:underline"
        >
          Supported Roles
        </Link>
        <Link
          onClick={onClose}
          to="/#successful-placements"
          className="text-[#3A3A3A] hover:underline"
        >
          Successful Placements
        </Link>

        <Link
          onClick={onClose}
          to="/#send-us-message"
          className="rounded-full text-white py-3 px-4 w-full blue-gradient text-center"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbar;
