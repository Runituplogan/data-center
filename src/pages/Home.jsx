import Navbar from "../components/global/Navbar";
import HeroCard from "../components/HeroCard";
import companyWorkersImg from "../assets/images/company-workers.png";
import { useState } from "react";
import { open_roles } from "../data";
import blue_sun from "../assets/images/blue-sun.svg";
import state_map from "../assets/images/state-map.png";
import white_star from "../assets/images/white-star.png";
import service_calendar from "../assets/images/service-calendar.png";
import Footer from "../components/global/Footer";
import SuccessfulPlacements from "../components/SuccessfulPlacements";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative w-full">
      <Navbar />

      <section className="pt-36 md:pt-40 w-full px-4 md:px-0">
        <div className="w-full">
          <div className="w-full max-w-[780px] mx-auto">
            <HeroCard />
          </div>

          <div className="w-full max-w-[780px] mx-auto">
            <div className="w-full gap-2 sm:gap-7 grid grid-cols-4 lg:grid-cols-5 mt-10 rounded-md border-gray-100 border p-4">
              <div className="col-span-1 lg:col-span-2">
                <p className="font-medium text-xs md:text-sm lg:text-xl xl:text-2xl">
                  Successful
                  <br /> Placements
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm lg:text-xl xl:text-2xl">
                  +50
                </p>
                <p className="text-xs md:text-sm text-[#121212]">Partnership</p>
              </div>
              <div>
                <p className="font-semibold text-sm lg:text-xl xl:text-2xl">
                  +1000
                </p>
                <p className="text-xs md:text-sm text-[#121212]">Partnership</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm lg:text-xl xl:text-2xl">
                  23
                </p>
                <p className="text-xs md:text-sm text-[#121212]">
                  State Hired In
                </p>
              </div>
            </div>
          </div>

          {/* About us */}
          <div className="w-full max-w-[780px] mx-auto">
            <div className="w-full mt-14 mb-10 text-[#121212] mx-auto">
              <h2 className="w-full text-center font-medium text-lg md:text-xl lg:text-2xl">
                About Us
              </h2>

              <div className="md:mt-12 mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="md:space-y-3 space-y-4 text-sm sm:text-base">
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

                <img
                  src={companyWorkersImg}
                  alt="company workers"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Open Roles */}
          <div className="w-full mt-16 mb-10 text-[#121212]">
            <h2 className="w-full text-center font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Open Roles
            </h2>

            <div className="rounded-4xl mt-10 p-10 w-full relative radical-blue overflow-hidden px-10 md:px-20 lg:px-36">
              <img
                src={blue_sun}
                alt="radical eclipse"
                className="absolute top-0 w-[400px] z-0 sm:left-48"
              />

              <h1 className="w-full text-center font-medium text-white text-xl md:text-3xl z-10 isolate">
                Exciting Opportunities Await
              </h1>
              <p className="text-center w-full text-white text-sm lg:text-base xl:text-lg mt-2 z-10 isolate pb-20">
                Explore a variety of open positions across industries. Whether
                you're a seasoned professional or a fresh talent, there's
                something for you
              </p>
            </div>

            <div className="relative w-full md:px-7 -mt-20">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full">
                {open_roles.map((item, index) => (
                  <div className="rounded-lg bg-white shadow" key={index}>
                    <div className="relative h-20 w-full overflow-hidden">
                      <div className="absolute rounded-t-md inset-0 bg-black opacity-45"></div>
                      <img
                        src={item.imgSrc}
                        className="h-20 object-cover ease transition-all duration-200 hover:scale-105 rounded-t-lg w-full"
                        alt={item.label}
                      />
                    </div>

                    <p className="text-center w-full py-5 px-3">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Successful placements blue background */}
          <div className="w-full">
            <div className="mt-10 p-10 w-full relative radical-blue overflow-hidden px-10 md:px-20 lg:px-36">
              <img
                src={blue_sun}
                alt="radical eclipse"
                className="absolute top-0 w-[700px] -z-0 sm:left-[50%] -translate-x-[45%]"
              />

              <div className="w-full flex justify-start md:justify-center items-start gap-5 sm:gap-10 md:gap-20 md:flex-row flex-col pt-10">
                <div className="flex justify-start items-center gap-7">
                  <p className="w-full text-center font-medium text-white text-xl md:text-2xl z-10">
                    Successful
                    <br /> Placements
                  </p>
                  <img
                    src={white_star}
                    className="w-10"
                    alt="radical eclipse"
                  />
                </div>

                <p className="text-white w-full md:w-[50%] lg:w-[30%] text-base md:text-lg z-10">
                  With countless successful placements, we connect the right
                  talent with the right roles. Trust us to help you achieve your
                  hiring goals effortlessly.
                </p>
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
            <div className="mt-16 max-w-[780px] mb-10 bg-white flex flex-col items-center mx-auto">
              <h1 className="w-full text-center text-[#121212] font-semibold text-xl md:text-3xl">
                States With Placements
              </h1>

              <img src={state_map} alt="State placement map" />
            </div>
          </div>

          {/* Find out how we can add more value to your team today! section */}
          <div className="w-full mt-16  bg-[#F4F9FF] py-10">
            <div className="mt-16 max-w-[780px] mb-10 mx-auto">
              <h1 className="w-full text-center text-[#121212] font-semibold text-xl md:text-3xl">
                Find out how we can add more
                <br /> value to your team today!
              </h1>

              <img
                src={service_calendar}
                className="mt-5"
                alt="State placement map"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
