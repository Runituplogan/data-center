import Navbar from "../components/global/Navbar";
import HeroCard from "../components/HeroCard";
import companyWorkersImg from "../assets/images/company-workers.png";
import { useEffect, useState } from "react";
import { open_roles } from "../data";
import blue_sun from "../assets/images/blue-sun.svg";
import state_map from "../assets/images/state-map.png";
import white_star from "../assets/images/white-star.png";
import Footer from "../components/global/Footer";
import SuccessfulPlacements from "../components/SuccessfulPlacements";
import SendUsMessage from "../components/SendUsMessage";
import Marquee from "../components/Marquee";
import MobileNavbar from "../components/global/MobileNavbar";
import { InlineWidget } from "react-calendly";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <main className="relative w-full" id="home">
      <Navbar onOpen={handleOpen} />
      <MobileNavbar onClose={() => setIsOpen(false)} open={isOpen} />

      <section className="pt-36 md:pt-40 w-full px-4 md:px-0">
        <div className="w-full">
          <div className="w-full md:mt-7 max-w-[1000px] mx-auto">
            <HeroCard />
          </div>

          <div className="w-full max-w-[1000px] mx-auto">
            <div className="w-full gap-2 sm:gap-7 grid grid-cols-4 lg:grid-cols-5 mt-10 rounded-md border-[#E2E2E2] border-y p-4">
              <div className="col-span-1 lg:col-span-2">
                <p className="font-medium text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  Successful
                  <br /> Placements
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  +50
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#121212] mt-1 sm:mt-2">
                  Partnership
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  +1000
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#121212] mt-1 sm:mt-2">
                  Partnership
                </p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  23
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#121212] mt-1 sm:mt-2">
                  State Hired In
                </p>
              </div>
            </div>
          </div>

          {/* About us */}
          <div
            id="about-us"
            className="w-full max-w-[1000px] mx-auto lg:px-0 md:px-5 px-0"
          >
            <div className="w-full mt-14 mb-10 text-[#121212] mx-auto">
              <h2 className="w-full text-center font-medium text-2xl md:text-3xl">
                About Us
              </h2>

              <div className="md:mt-12 mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-5 text-base">
                  <p className="md:text-left text-center">
                    We are a specialized team building and talent management
                    firm dedicated to solving the workforce challenges of the
                    data center industry.
                  </p>
                  <p className="md:text-left text-center">
                    We connect high-level professionals with hyperscale,
                    colocation, and enterprise data centers, as well as
                    engineering, construction, HVAC, cabling, logistics, power,
                    and mission-critical infrastructure sectors that support
                    them.
                  </p>
                  <p className="md:text-left text-center">
                    Our focus is exclusively on recruitment for mission-critical
                    environments, specializing in data center operations,
                    expansion, and maintenance.
                  </p>
                  <p className="md:text-left text-center">
                    We provide skilled professionals who design, build, operate,
                    and sustain the infrastructure that keeps data centers
                    running
                  </p>
                </div>

                <div className="w-full h-full">
                  <img
                    src={companyWorkersImg}
                    alt="company workers"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Open Roles */}
          <div id="open-roles" className="w-full">
            <div className="max-w-[1000px] w-full mx-auto">
              <div className="w-full mt-16 mb-10 text-[#121212]">
                <h2 className="w-full text-center font-medium text-xl md:text-2xl lg:text-3xl">
                  Open Roles
                </h2>

                <div className="rounded-4xl mt-10 p-10 w-full relative radical-blue overflow-hidden px-5 sm:px-10 md:px-20 lg:px-48 xl:px-60">
                  <img
                    src={blue_sun}
                    alt="radical eclipse"
                    className="absolute top-0 h-[200px] z-0 sm:left-48"
                  />

                  <h1 className="w-full text-center font-medium text-white text-2xl md:text-3xl lg:text-4xl z-10 isolate">
                    Exciting Opportunities Await
                  </h1>
                  <p className="text-center w-full text-white text-base md:text-lg lg:text-xl mt-4 z-10 isolate pb-20">
                    Explore a variety of open positions across industries.
                    Whether you're a seasoned professional or a fresh talent,
                    there's something for you.
                  </p>
                </div>

                <div className="relative w-full -my-20 z-20">
                  <div className="flex justify-center items-center gap-5 md:gap-7 flex-wrap w-full">
                    {open_roles.map((item, index) => (
                      <div
                        className="rounded-lg bg-white shadow w-[150px] md:w-[250px] lg:w-[300px] sm:w-[280px] h-[170px]"
                        key={index}
                      >
                        <div className="relative h-20 w-full overflow-hidden">
                          <div className="absolute rounded-t-md inset-0 bg-black opacity-10"></div>
                          <img
                            src={item.imgSrc}
                            className="h-20 object-cover ease transition-all duration-200 hover:scale-105 rounded-t-lg w-full"
                            alt={item.label}
                          />
                        </div>

                        <p className="text-center font-medium w-full py-5 sm:px-10 inter text-sm sm:text-lg md:text-xl leading-6">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Successful placements blue background */}
          <div className="w-full">
            <div className="mt-10 py-10 w-full relative radical-blue overflow-hidden h-max md:h-[500px]">
              <img
                src={blue_sun}
                alt="radical eclipse"
                className="absolute top-0 w-[940px] -z-0 sm:left-[50%] -translate-x-[45%]"
              />

              <div className="w-full flex justify-start items-start gap-5 sm:gap-10 md:gap-36 md:flex-row flex-col pt-10 px-5 sm:px-10 md:px-20">
                <div className="flex flex-col-reverse md:flex-row justify-center sm:justify-start items-center gap-2 sm:gap-7 w-full sm:w-fit">
                  <p className="w-full text-center font-medium text-white text-2xl md:text-3xl lg:text-4xl z-10 md:block hidden">
                    Successful
                    <br /> Placements
                  </p>
                  <p className="w-full text-center font-medium text-white text-2xl md:text-3xl lg:text-4xl z-10 md:hidden">
                    Successful Placements
                  </p>
                  <img
                    src={white_star}
                    className="w-10"
                    alt="radical eclipse"
                  />
                </div>

                <p className="text-white w-full md:w-[50%] text-lg md:text-xl lg:text-2xl z-10 text-center md:text-left">
                  With countless successful placements, we connect the right
                  talent with the right roles. Trust us to help you achieve your
                  hiring goals effortlessly.
                </p>
              </div>

              <div className="mt-20 w-full space-y-8">
                <Marquee />
                <Marquee delay="1" direction="right" />
                <Marquee delay="1.9" />
              </div>
            </div>
          </div>

          {/* Successful placemnets grid */}
          <div className="w-full">
            <div className="w-full max-w-[1000px] mx-auto p-5 md:p-10 lg:py-20">
              <SuccessfulPlacements />
            </div>
          </div>
          {/* Sate placement section */}
          <div className="w-full">
            <div className="mt-16 max-w-[1200px] mb-10 bg-white flex flex-col items-center mx-auto">
              <h1 className="w-full text-center text-[#121212] font-medium text-xl sm:text-2xl md:text-3xl">
                States With Placements
              </h1>

              <img src={state_map} alt="State placement map" />
            </div>
          </div>

          {/* Find out how we can add more value to your team today! section */}
          <div className="w-full mt-16  bg-[#F4F9FF] py-10">
            {/* <div className="mt-16 max-w-[1000px] mb-10 mx-auto">
              <h1 className="w-full text-center text-[#121212] font-medium text-xl sm:text-2xl md:text-3xl">
                Find out how we can add more
                <br /> value to your team today!
              </h1>

              <img
                src={service_calendar}
                className="mt-10"
                alt="State placement map"
              />
            </div> */}
            <div className="max-w-[1000px] mx-auto overflow-y-hid">
              {/* <Calendy /> */}
              <InlineWidget url="https://calendly.com/talentcounsel/services" />
            </div>
          </div>
        </div>

        <SendUsMessage />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
