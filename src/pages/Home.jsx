import Navbar from "../components/global/Navbar";
import HeroCard from "../components/HeroCard";
import companyWorkersImg from "../assets/images/company-workers.png";
import { useState } from "react";
import { open_roles } from "../data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative w-full">
      <Navbar />

      <section className="pt-36 md:pt-40 w-full px-4 md:px-0">
        <div className="w-full max-w-[780px] mx-auto">
          <HeroCard />

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
              <p className="font-semibold text-sm lg:text-xl xl:text-2xl">23</p>
              <p className="text-xs md:text-sm text-[#121212]">
                State Hired In
              </p>
            </div>
          </div>

          {/* About us */}

          <div className="w-full mt-14 mb-10 text-[#121212]">
            <h2 className="w-full text-center font-medium text-lg md:text-xl lg:text-2xl">
              About Us
            </h2>

            <div className="md:mt-12 mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="md:space-y-3 space-y-4 text-sm sm:text-base">
                <p className="md:text-left text-center">
                  We are a specialized team building and talent management firm
                  dedicated to solving the workforce challenges of the data
                  center industry.
                </p>
                <p className="md:text-left text-center">
                  We connect high-level professionals with hyperscale,
                  colocation, and enterprise data centers, as well as
                  engineering, construction, HVAC, cabling, logistics, power,
                  and mission-critical infrastructure sectors that support them.
                </p>
                <p className="md:text-left text-center">
                  Our focus is exclusively on recruitment for mission-critical
                  environments, specializing in data center operations,
                  expansion, and maintenance.
                </p>
                <p className="md:text-left text-center">
                  We provide skilled professionals who design, build, operate,
                  and sustain the infrastructure that keeps data centers running
                </p>
              </div>

              <img
                src={companyWorkersImg}
                alt="company workers"
                className="rounded-md"
              />
            </div>
          </div>

          {/* Open Roles */}
          <div className="w-full mt-14 mb-10 text-[#121212]">
            <h2 className="w-full text-center font-medium text-lg md:text-xl lg:text-2xl">
              Open Roles
            </h2>

            <div className="relative mt-10 w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full">
                {open_roles.map((item, index) => (
                  <div className="rounded-lg bg-white shadow" key={index}>
                    <div className="relative h-20 w-full overflow-hidden">
                      <div className="absolute rounded-t-md inset-0 bg-black opacity-45"></div>
                      <img
                        src={item.imgSrc}
                        className="h-20 object-cover ease transition-all duration-200 hover:scale-105"
                        alt={item.label}
                      />
                    </div>

                    <p className="text-center w-full py-5 px-3">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
