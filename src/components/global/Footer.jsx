import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import linkedin from "../../assets/images/linkedin.svg";
import mail from "../../assets/images/mail.svg";
import youtube from "../../assets/images/youtube.svg";
import x from "../../assets/images/x.svg";

const Footer = () => {
  return (
    <footer className="mt-auto px-4 md:px-10 lg:px-20 py-7 sm:p-7 bg-gray-50">
      <div className="w-full border-t pt-5 flex justify-start sm:justify-between sm:items-center sm:flex-row flex-col gap-5 md:gap-0">
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

        <div className="flex sm:flex-row flex-col justify-start sm:items-center gap-4 md:gap-7 lg:gap-12 text-base lg:text-lg">
          <Link to={"/"} className="text-[#3A3A3A] hover:underline">
            Home
          </Link>
          <Link to={"/"} className="text-[#3A3A3A] hover:underline">
            About Us
          </Link>
          <Link to={"/"} className="text-[#3A3A3A] hover:underline">
            Open Roles
          </Link>
          <Link to={"/"} className="text-[#3A3A3A] hover:underline">
            Successful Placements
          </Link>
        </div>
      </div>

      <div className="w-full border-t md:border-none pt-3 flex justify-between items-center flex-wrap text-[#3A3A3A] gap-5 mt-4">
        <p>Copyright: © 2025 Talent Counsel Project. All Rights Reserved.</p>

        <div className="flex justify-start items-center gap-4 md:gap-7 lg:gap-12">
          <p>Connect with Us</p>
          <div className="flex justify-start items-center gap-4 md:gap-4">
            <Link to={"/"} className="text-[#3A3A3A]">
              <img src={linkedin} alt="linkedin" />
            </Link>
            <Link to={"/"} className="text-[#3A3A3A]">
              <img src={youtube} alt="youtube" />
            </Link>
            <Link to={"/"} className="text-[#3A3A3A]">
              <img src={x} alt="x" />
            </Link>
            <Link to={"/"} className="text-[#3A3A3A]">
              <img src={mail} alt="mail" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
