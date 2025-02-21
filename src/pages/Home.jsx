import Navbar from "../components/global/Navbar";
import HeroCard from "../components/HeroCard";
import companyWorkersImg from "../assets/images/about.jpg";
import { useEffect, useRef, useState } from "react";
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
import { motion, useInView } from "framer-motion";
import { useLocation } from "react-router-dom";
import { XDivMotion, YDivMotion } from "../components/DivMotion";
import Counter from "../components/Counter";
import OurValues from "../components/OurValues";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });

  const divRef = useRef(null);
  const isDivInView = useInView(divRef, { once: true, margin: "-100px" });

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

      <section className="pt- w-full">
        <div className="w-full">
          <HeroCard />

          <div className="w-full mt-20 max-w-[1000px] mx-auto">
            <YDivMotion className="w-full gap-2 flex justify-between items-center mt-10 rounded-md border-[#E2E2E2] border-y p-7">
              {/* <div className="col-span-1 lg:col-span-2">
                <p className="font-semibold text-xl md:text-2xl lg:text-3xl">
                  Successful
                  <br /> Placements
                </p>
              </div> */}
              <div>
                <p className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  +<Counter speed={20} target={50} />
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#121212] mt-1 sm:mt-2">
                  Partnerships
                </p>
              </div>
              <div>
                <p className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  +<Counter target={1000} speed={0} />
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#121212] mt-1 sm:mt-2 text-center">
                  Placements
                </p>
              </div>
              <div className="text-center">
                <p className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  <Counter target={23} />
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#121212] mt-1 sm:mt-2">
                  States Hired In
                </p>
              </div>
            </YDivMotion>
          </div>

          {/* About us */}
          <div
            id="about-us"
            className="w-full max-w-[1300px] mx-auto xl:px-4 lg:px-7 md:px-5 px-4 pb-20"
          >
            <div className="w-full pt-14 mb-10 text-[#121212] mx-auto">
              <div className="relative px-2 w-max">
                <div className="absolute right-0 bg-[#FFFF00] left-0 -bottom-2 h-5"></div>
                <YDivMotion>
                  <h2 className="uppercase w-full flex items-center gap-3 text-center md:text-left sm:text-lg md:text-xl relative z-10 text-[#2a2a2a]">
                    About us.
                  </h2>
                </YDivMotion>
              </div>

              <div className="md:mt-12 lg:mt-20 xl:mt-28 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 xl:gap-36 text-[#2a2a2a]">
                <div className="space-y-5 text-base">
                  <YDivMotion className="w-full">
                    <h1 className="md:text-left text-center font-semibold text-xl sm:text-2xl gilroy-bold w-full">
                      We are a specialized team building and talent management
                      firm dedicated to
                      <span className="app-bg relative leading-[1 p-0.5 bg-[]">
                        solving the workforce challenges of the data center
                        industry.
                      </span>
                      {/* <div className="">
                        <span className="px-0.5 inline-flex w-fit relative overflow-hidden text-white">
                          <span className="relative z-10">solving the</span>
                          <span className="animate-scale-in absolute"></span>
                        </span>
                        <span className="px-0.5 inline-flex relative overflow-hidden text-white w-fit">
                          <span className="relative z-10">
                            workforce challenges of the data center
                          </span>
                          <span className="animate-scale-in absolute"></span>
                        </span>
                      </div> */}
                    </h1>
                  </YDivMotion>

                  <YDivMotion
                    delay={0.8}
                    className="w-full space-y-4 text-[#545454] gilroy text-base md:text-lg"
                  >
                    <p>
                      We connect high-level professionals with hyperscale,
                      colocation, and enterprise data centers, as well as
                      engineering, construction, HVAC, cabling, logistics,
                      power, and mission-critical infrastructure sectors that
                      support them.
                    </p>

                    <p>
                      Our focus is exclusively on recruitment for
                      mission-critical environments, specializing in data center
                      operations, expansion, and maintenance.
                    </p>

                    <p>
                      We provide skilled professionals who design, build,
                      operate, and sustain the infrastructure that keeps data
                      centers running.
                    </p>
                  </YDivMotion>
                </div>

                <motion.div
                  ref={divRef}
                  initial={{ x: 30, opacity: 0 }}
                  animate={isDivInView ? { x: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.6,
                  }}
                  className="w-full flex flex-col justify-start items-end relative"
                >
                  <img
                    src={companyWorkersImg}
                    alt="company workers"
                    className="rounded-md"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <OurValues />

          {/* Roles we support */}
          <div id="open-roles" className="w-full">
            <div className="max-w-[1000px] w-full mx-auto">
              <div className="w-full px-2 md:px-0 pt-16 pb-10 text-[#121212]">
                <YDivMotion>
                  <h2 className="w-full text-center font-bold text-xl md:text-2xl lg:text-3xl flex justify-start items-center gap-1">
                    In-Demand
                    <div className="px-2 inline-block relative overflow-hidden text-white">
                      <span className="relative z-10">Roles We Support:</span>
                      <span className="animate-scale-in absolute"></span>
                    </div>
                  </h2>
                </YDivMotion>

                {/* <YDivMotion
                  delay={0.3}
                  className="rounded-4xl mt-10 p-10 w-full relative radical-blue overflow-hidden px-5 sm:px-10 md:px-20 lg:px-48 xl:px-60"
                >
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
                </YDivMotion> */}

                <div className="relative w-full mt-16 md:mt-20 z-20">
                  <div className="flex justify-center items-center gap-5 md:gap-7 flex-wrap w-full">
                    {open_roles.map((item, index) => (
                      <YDivMotion
                        delay={0.1 * index}
                        className="rounded-lg bg-white shadow w-[150px] md:w-[250px] lg:w-[300px] sm:w-[280px] h-[170px] group"
                        key={index}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${item.imgSrc})`,
                          }}
                          className="relative h-20 w-full overflow-hidden bg-top bg-cover rounded-t-md"
                        >
                          <div className="absolute rounded-t-md inset-0 bg-black opacity-5"></div>
                          {/* <img
                            src={item.imgSrc}
                            className="h-20 object-cover bg-center ease transition-all duration-200 hover:scale-105 rounded-t-lg w-full group-hover:scale-105 "
                            alt={item.label}
                          /> */}
                        </div>

                        <p className="text-center font-semibold md:font-medium w-full py-5 sm:px-10 text-sm sm:text-lg md:text-xl leading-6">
                          {item.label}
                        </p>
                      </YDivMotion>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Successful placements blue background */}
          <div className="w-full pt-10 py-10" id="successful-placements">
            <div className=" w-full relative radical-blue overflow-hidden h-max md:h-[500px]">
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
          {/* <div className="w-full">
            <div className="w-full max-w-[1300px] mx-auto p-5 md:p-10 lg:py-20">
              <SuccessfulPlacements />
            </div>
          </div> */}
          {/* Sate placement section */}
          <div className="w-full">
            <div className="mt-16 max-w-[1200px] mb-10 bg-white flex flex-col items-center mx-auto">
              <YDivMotion>
                <h1 className="w-full text-center text-[#121212] font-bold text-base sm:text-2xl md:text-3xl lg:text-4xl flex justify-center items-center gap-1">
                  <div className="px-2 inline-block relative overflow-hidden text-white">
                    <span className="relative z-10">Active Partnerships</span>
                    <span className="animate-scale-in absolute"></span>
                  </div>
                  across the USA
                </h1>
              </YDivMotion>

              <YDivMotion delay={0.5}>
                <img src={state_map} alt="State placement map" />
              </YDivMotion>
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
            <div className="relative z-[99] rounded-[13px] w-[100%] h-[700px] flex items-center justify-center">
              <InlineWidget
                styles={{
                  height: "100%",
                  width: "96%",
                  padding: "0px",
                  margin: "0px",
                  border: " none",
                }}
                url="https://calendly.com/talentcounsel/services"
              />
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
