import { YDivMotion } from "./DivMotion";
import heroBg from "../../public/video/hero-video.mp4";
import poster from '../assets/poster.png'

const HeroCard = () => {
  return (
    <div className="pt-20 pl-0 sm:px-10 md:px-20 lg:px-28 relative h-[100vh] flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-55 z-[2]"></div>
      <div className="relative z-10 self-start mt-0 md:mt-20">
        <YDivMotion>
          <h1 className="gilroy-bold pl-2 sm:pl-0 w-full text-left font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Datacenter Talent.
          </h1>
          <h1 className="w-full pl-2 sm:pl-0 text-left font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-3">
            <div className="px-2 inline-block relative overflow-hidden">
              <span className="relative z-10">Built for Scale.</span>
              <span className="animate-scale-in absolute"></span>
            </div>
          </h1>
        </YDivMotion>

        <YDivMotion delay={0.7}>
          <p className="text-left pl-2 sm:pl-0 gilroy-bold w-full text-white font-medium pb-40 text-[11px] whitespace-nowrap sm:text-base lg:text-lg xl:text-xl mt-5 md:mt-8">
            Engineering | Design | Tech | Build | Manufacturing | IT | Software
          </p>
        </YDivMotion>
      </div>

      <video
        playsInline
        autoPlay
        muted
        loop
        controls={false}
        poster={poster}
        preload="auto"
        className="object-cover w-full h-full absolute inset-0 z-0"
      >
        <source src={heroBg} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroCard;
