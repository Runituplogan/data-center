const SuccessfulPlacements = () => {
  return (
    <div className="w-full md:mt-2 mt-7">
      <h1 className="w-full text-center text-[#121212] font-medium text-xl md:text-3xl">
        Successful Placements
      </h1>

      <div className="w-full grid sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-5 lg:gap-y-16 mt-10 sm:mt-20 text-[#121212]">
        <div>
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-[40px] xl:text-[55px]">
            We are trusted{" "}
          </h2>
          <p className="mt-5 w-full md:w-[90%] text-base md:text-lg lg:text-xl">
            To build leading teams within data centers, engineering firms, hvac,
            construction, cabling, and critical infrastructure companies.
          </p>
        </div>

        <div>
          <div className="flex justify-start items-center gap-3">
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-5xl xl:text-[55px]">
              +50
            </h2>
            <p className="text-base sm:text-lg">Partnership</p>
          </div>
          <p className="mt-5 text-base md:text-lg lg:text-xl">
            To build leading teams within data centers, engineering firms, hvac,
            construction, cabling, and critical infrastructure companies.
          </p>
        </div>

        <div>
          <div className="flex justify-start items-center gap-3">
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-[40px] xl:text-[55px]">
              23
            </h2>
            <p className="text-base sm:text-lg">States Hired In</p>
          </div>
          <p className="mt-5 text-base md:text-lg lg:text-xl">
            We’ve hired skilled technicians, engineers, and project
            professionals across 23 states to support mission-critical data
            centers and infrastructure.
          </p>
        </div>

        <div>
          <div className="flex justify-start items-center gap-3">
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-[40px] xl:text-[55px]">
              +1000
            </h2>
            <p className="text-base sm:text-lg">Placements</p>
          </div>
          <p className="mt-5 text-base md:text-lg lg:text-xl">
            Over 1,000 successful hires in data center operations, construction,
            and maintenance, for direct hire, contract and contract to hire
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulPlacements;
