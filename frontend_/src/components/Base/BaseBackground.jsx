import rocket from '../../icons/ample_rocket.png'; 
import rocket_launch from '../../icons/rocket_launch.png'; 

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
  <span className="font-extralight font-russo bg-gradient-to-r from-black to-purple-600 text-transparent bg-clip-text text-[10rem] z-0 opacity-20">
    RAM CHANDRA
  </span>
);

const RocketImg = () => {
    return (
        <span className='absolute top-[10%] left-20'>
            <img src={rocket} width="200" height="200" />
        </span>
    )
}

const RocketLaunchImg = () => {
    return (
        <span className='absolute top-[60%] right-20'>
            <img src={rocket_launch} width="300" height="300" />
        </span>
    )
}