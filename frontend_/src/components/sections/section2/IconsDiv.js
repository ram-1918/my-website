import { motion } from "framer-motion";
import {
  AWSIcon,
  CSSIcon,
  DjangoIcon,
  DockerIcon,
  DrfIcon,
  FlaskIcon,
  GinIcon,
  GolangIcon,
  HTMLIcon,
  JenkinsIcon,
  JSIcon,
  PythonIcon,
  ReactIcon,
  SQLIcon,
  TailwindIcon,
  VueIcon,
} from "../../Base/BaseIcons";

const IconsDiv = () => {

  const motionProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 1 },
    variants: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    animate: { scale: [1, 1.2, 1] },
  };

  const animateMotionProps = {
    initial: { x: 0 },
    // animate: { x:0, x: "-100%" }, // Moves left infinitely
    animate: { x: ["-100%", "100%"] }, // Move continuously
    whileHover: { animationPlayState: "paused" },
    transition: {
      repeat: Infinity,
      duration: 20,
      ease: "linear"
    }
  }
  //mobile:space-y-5 mobile:space-x-8 mobile:w-full mobile:bg-white-200 mobile:flex-wrap mobile:pl-0 mobile:ml-0
  // flex flex-row justify-center items-center space-x-6

  // flex flex-row items-center justify-center space-x-6 
  // small:w-full small:bg-white-200 small:flex-wrap small:pl-0 small:ml-0 
  // mobile:grid mobile:grid-cols-4 mobile:gap-4 mobile:space-x-0
  return (
    <div className="relative flex w-[50%] overflow-hidden bg-purple-50 rounded-xl shadow-lg py-2">
      <div className="absolute top-0 left-0 z-10 w-20 h-full bg-gradient-to-r from-gray-200 to-transparent"></div>
      <div className="absolute top-0 right-0 z-10 w-20 h-full bg-gradient-to-l from-gray-200 to-transparent"></div>

      <motion.div
        // {...animateMotionProps}
        className="flex gap-10 outline-2 animate-infinite-scroll">
        <IconsList />
      </motion.div>
    </div>
  );
};

const skillsList = [
  <PythonIcon />,
  <GolangIcon />,
  <JSIcon />,
  <DjangoIcon />,
  <DrfIcon />,
  <GinIcon />,
  <FlaskIcon />,
  <ReactIcon />,
  <VueIcon />,
  <SQLIcon />,
  <TailwindIcon />,
  <HTMLIcon />,
  <CSSIcon />,
  <AWSIcon />,
  <DockerIcon />,
  <JenkinsIcon />
];

// const repeatedSkills = [...skillsList, skillsList]

const IconsList = () => {
  return (
    <>
      { skillsList.map((skill) => skill) }
      { skillsList.map((skill) => skill) }
    </>
  )
}

export default IconsDiv;
