const SuccessfulPlacements = () => {
  return (
    <div className="w-full">
      <h1 className="w-full text-center text-[#121212] font-semibold text-xl md:text-3xl">
        States With Placements
      </h1>

      <div className="w-full grid sm:grid-cols-2 gap-16 sm:gap-10 mt-20">
        <div>
          <h2 className="font-semibold text-xl md:text-3xl">We are trusted </h2>
          <p className="mt-5 w-full md:w-[90%] lg:w-[70%]">
            To build leading teams within data centers, engineering firms, hvac,
            construction, cabling, and critical infrastructure companies.
          </p>
        </div>

        <div>
          <div className="flex justify-start items-center gap-3">
            <h2 className="font-semibold text-xl md:text-3xl">50+</h2>
            <p>Partnership</p>
          </div>
          <p className="mt-5">
            To build leading teams within data centers, engineering firms, hvac,
            construction, cabling, and critical infrastructure companies.
          </p>
        </div>

        <div>
          <div className="flex justify-start items-center gap-3">
            <h2 className="font-semibold text-xl md:text-3xl">23</h2>
            <p>States Hired In</p>
          </div>
          <p className="mt-5">
            We’ve hired skilled technicians, engineers, and project
            professionals across 23 states to support mission-critical data
            centers and infrastructure.
          </p>
        </div>

        <div>
          <div className="flex justify-start items-center gap-3">
            <h2 className="font-semibold text-xl md:text-3xl">+1000</h2>
            <p>Placements</p>
          </div>
          <p className="mt-5">
            Over 1,000 successful hires in data center operations, construction,
            and maintenance, for direct hire, contract and contract to hire
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulPlacements;
