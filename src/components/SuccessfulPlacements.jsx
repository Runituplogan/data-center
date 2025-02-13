import { YDivMotion } from "./DivMotion";

const SuccessfulPlacements = () => {
  return (
    <div id="successful-placements" className="w-full md:pt-2 pt-7">
      {/* <h1 className="w-full text-center text-[#121212] font-medium text-xl md:text-3xl">
        Successful Placements
      </h1> */}

      <div className="w-full grid sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-5 lg:gap-y-16 mt-10 text-[#121212]">
        <YDivMotion initial={30}>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-[40px] xl:text-[50px]">
            We are trusted{" "}
          </h2>
          <p className="mt-5 w-full md:w-[90%] text-base  lg:text-lg">
            To build leading teams within data centers, engineering firms, hvac,
            construction, cabling, and critical infrastructure companies.
          </p>
        </YDivMotion>

        <YDivMotion delay={0.5} initial={30}>
          <div className="flex justify-start items-center gap-3">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl xl:text-[50px]">
              +50
            </h2>
            <p className="text-base sm:text-lg">Partnerships</p>
          </div>
          <p className="mt-5 text-base md:text-lg lg:text-lg">
            To build leading teams within data centers, engineering firms, hvac,
            construction, cabling, and critical infrastructure companies.
          </p>
        </YDivMotion>

        <YDivMotion delay={0.9} initial={30}>
          <div className="flex justify-start items-center gap-3">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-[40px] xl:text-[50px]">
              23
            </h2>
            <p className="text-base sm:text-lg">States Hired In</p>
          </div>
          <p className="mt-5 text-base md:text-lg lg:text-lg">
            We’ve hired skilled technicians, engineers, and project
            professionals across 23 states to support mission-critical data
            centers and infrastructure.
          </p>
        </YDivMotion>

        <YDivMotion delay={1.3} initial={30}>
          <div className="flex justify-start items-center gap-3">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-[40px] xl:text-[50px]">
              +1000
            </h2>
            <p className="text-base sm:text-lg">Placements</p>
          </div>
          <p className="mt-5 text-base md:text-lg lg:text-lg">
            Over 1,000 successful hires in data center operations, construction,
            and maintenance, for direct hire, contract and contract to hire.
          </p>
        </YDivMotion>
      </div>
    </div>
  );
};

export default SuccessfulPlacements;
