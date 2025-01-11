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
  //mobile:space-y-5 mobile:space-x-8 mobile:w-full mobile:bg-white-200 mobile:flex-wrap mobile:pl-0 mobile:ml-0
  // flex flex-row justify-center items-center space-x-6
  return (
    <motion.div
      {...motionProps}
      className="
        flex flex-row justify-center items-center space-x-6
        small:w-full small:bg-white-200 small:flex-wrap small:pl-0 small:ml-0
        mobile:grid mobile:grid-cols-4 mobile:gap-4 mobile:space-x-0
        "
    >
      <PythonIcon />
      <GolangIcon />
      <JSIcon />
      <DjangoIcon />
      <DrfIcon />
      <GinIcon />
      <FlaskIcon />
      <ReactIcon />
      <VueIcon />
      <SQLIcon />
      <TailwindIcon />
      <HTMLIcon />
      <CSSIcon />
      <AWSIcon />
      <DockerIcon />
      <JenkinsIcon />
    </motion.div>
  );
};

export default IconsDiv;
