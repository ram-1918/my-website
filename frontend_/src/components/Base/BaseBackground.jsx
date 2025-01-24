import rocket from "../../icons/ample_rocket.png";
import rocket_launch from "../../icons/rocket_launch.png";

export const BaseBackground = () => {
  return (
    <div className="fixed z-0 flex flex-col items-center justify-center w-full h-screen opacity-20">
      <MainText />
      <RocketImg />
      <RocketLaunchImg />
    </div>
  );
};

const MainText = () => (
  <span className="font-extralight font-russo bg-gradient-to-r from-black to-purple-600 text-transparent bg-clip-text text-[10rem] tablet:text-[5rem] mobile:text-[3rem] small:text-[2.8rem] z-0 opacity-20">
    RAM CHANDRA
  </span>
);

const RocketImg = () => {
  return (
    <span className="absolute top-[15%] left-20 w-56 h-56 mobile:top-[20%] mobile:left-0 mobile:w-32 mobile:h-32">
      <img src={rocket} alt="rocket" />
    </span>
  );
};

const RocketLaunchImg = () => {
  return (
    <span className="absolute w-56 h-56 bottom-10 right-20 mobile:bottom-20 mobile:right-0 mobile:w-32 mobile:h-32">
      <img src={rocket_launch} alt="rocket launch" />
    </span>
  );
};
