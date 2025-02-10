import city from "../assets/images/city.png";

const HeroCard = () => {
  return (
    <div className="radical-blue rounded-4xl pt-20 px-4 sm:px-10 md:px-56 relative">
      <h1 className="w-full text-center font-semibold text-white text-xl md:text-3xl lg:text-4xl">
        Connecting today's leading Talent to opportunities within the Datacenter
        Ecosystem
      </h1>
      <p className="text-center w-full text-white font-medium pb-40 text-sm lg:text-base mt-3">
        Engineering | Design | Tech | Build | Manufacturing | IT | Software
      </p>

      <img
        src={city}
        alt="city"
        className="absolute -bottom-1 right-[50%] translate-x-[50%] md:h-28 h-24"
      />
    </div>
  );
};

export default HeroCard;
