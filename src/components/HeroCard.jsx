import city from "../assets/images/city.png";

const HeroCard = () => {
  return (
    <div className="radical-blue rounded-4xl pt-20 px-4 lg:px-10 xl:px-28 2xl:px-36 relative">
      <h1 className="w-full text-center font-semibold text-white text-xl md:text-3xl">
        Connecting today's leading Talent to opportunities within the Datacenter
        Ecosystem
      </h1>
      <p className="text-center w-full text-white font-medium pb-32 text-sm lg:text-base mt-2">
        Engineering | Design | Tech | Build | Manufacturing | IT | Software
      </p>

      <img
        src={city}
        alt="city"
        className="absolute -bottom-1 md:right-28 md:left-28 md:h-28 h-24"
      />
    </div>
  );
};

export default HeroCard;
