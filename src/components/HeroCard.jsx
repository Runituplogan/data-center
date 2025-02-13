import { YDivMotion } from "./DivMotion";

const HeroCard = () => {
  return (
    <div className="radical-blu pt-20 px-4 sm:px-10 md:px-20 lg:px-28 relative h-[100vh]">
      <div className="absolute inset-0 bg-black opacity-55 z-[2]"></div>
      <YDivMotion className="relative z-10 mt-32 md:mt-40 lg:mt-56">
        <h1 className="w-full text-left font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Top Talent.
        </h1>
        <h1 className="w-full text-left font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-3">
          Prime{" "}
          <div className="px-2 inline-block relative overflow-hidden">
            <span className="relative z-10">Opportunities.</span>
            <span className="animate-scale-in absolute"></span>
          </div>
        </h1>

        <p className="text-left w-full text-white font-medium pb-40 text-base lg:text-lg xl:text-xl mt-5 md:mt-8">
          Engineering | Design | Tech | Build | Manufacturing | IT | Software
        </p>
      </YDivMotion>
      {/* <h1 className="w-full text-center font-bold text-white text-3xl md:text-4xl lg:text-5xl md:leading-14">
        Connecting today's leading Talent to opportunities within the Datacenter
        Ecosystem
      </h1> */}

      <video
        playsInline
        autoPlay
        muted
        loop
        className="object-cover w-full h-full absolute inset-0 z-0"
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* <img
        src={city}
        alt="city"
        className="absolute -bottom-1 right-[50%] translate-x-[50%] md:h-28 h-24"
      /> */}
    </div>
  );
};

export default HeroCard;
