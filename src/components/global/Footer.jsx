import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import linkedin from "../../assets/images/linkedin.svg";
import mail from "../../assets/images/mail.svg";
import { XDivMotion } from "../DivMotion";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="mt-auto px-4 md:px-10 lg:px-20 py-7 sm:p-7 bg-gray-50">
      <div className="w-full border-t pt-5 flex justify-start sm:justify-between sm:items-center sm:flex-row flex-col gap-5 md:gap-0">
        <div className="flex justify-start items-end">
          <Link to="/#home" className="pr-1 h-12 w-12 md:h-full md:w-full">
            <img src={logo} alt="Talent councel logo" />
          </Link>
          <XDivMotion
            initial={-30}
            className="font-bold text-sm md:text-lg pl-2 md:pl-4 border-l-2 h-8 md:h-12 self-center flex justify-center items-center"
          >
            <p>Datacenters</p>
          </XDivMotion>
        </div>

        <div className="flex sm:flex-row flex-col justify-start sm:items-center gap-4 md:gap-7 lg:gap-12 text-base lg:text-lg">
          <Link to="/#home" className="text-[#3A3A3A] hover:underline">
            Home
          </Link>
          <Link to="/#about-us" className="text-[#3A3A3A] hover:underline">
            About Us
          </Link>
          <Link to="/#open-roles" className="text-[#3A3A3A] hover:underline">
            Open Roles
          </Link>
          <Link
            to="/#successful-placements"
            className="text-[#3A3A3A] hover:underline"
          >
            Successful Placements
          </Link>
        </div>
      </div>

      <div className="w-full border-t md:border-none pt-3 flex justify-between items-center flex-wrap text-[#3A3A3A] gap-5 mt-4">
        <p>
          Copyright: © {date.getFullYear()} Talent Counsel. All Rights Reserved.
        </p>

        <div className="flex justify-start items-center gap-4 md:gap-7 lg:gap-12">
          <p>Connect with Us</p>
          <div className="flex justify-start items-center gap-4 md:gap-4">
            <Link
              to={"https://www.linkedin.com/company/talentcounsel/"}
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" />
            </Link>
            {/* <Link to={"/"} className="text-[#3A3A3A]">
              <img src={youtube} alt="youtube" />
            </Link> */}
            {/* <Link to={"/"} className="text-[#3A3A3A]">
              <img src={x} alt="x" />
            </Link> */}
            <Link
              to={"mailto:charles@thetalentcounsel.com"}
              className="text-[#3A3A3A]"
            >
              <img src={mail} alt="mail" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
