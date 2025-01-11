import { motion } from "framer-motion";
import { useContext } from "react";
import { AboutTextMarketing } from "../../components/sections/section2/AboutTexts";
import {
  BounceAnimation,
  HiText,
  ImageSpan,
  ME,
} from "../../components/sections/section2/Spans";
import { modeContext } from "../../Home";

const About = () => {
  const {dark} = useContext(modeContext);

  const motionStyleProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 1.5 },
    variants: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div {...motionStyleProps}>
      {/*   */}
      <div 
      className={
        `${dark ? 'bg-design-dark' : 'bg-bg_design'} bg-cover object-cover bg-no-repeat rounded-3xl shadow-3xl p-2 mx-auto w-[60%] mt-40 bg-white-200 transition duration-700 animate-[fade-in_1s_ease-in-out]
        small:w-full 
        mobile:w-full mobile:mt-0 mobile:rounded-none 
        tablet:w-full`}>
        <div
          className="
                flex flex-row py-8 px-8 w-[100%] rounded-xl space-y-2 
                small:flex small:flex-col small:flex-col-reverse small:w-full small:bg-white-100  small:p-2
                mobile:flex mobile:flex-col mobile:flex-col-reverse mobile:w-full mobile:bg-white-100  mobile:p-2
                tablet:flex tablet:flex-col tablet:flex-col-reverse tablet:justify-center tablet:items-center tablet:w-full tablet:bg-white-100  tablet:p-2"
        >
          <div
            className="
                    text-left space-y-2 bg-white-200 w-full  
                    small:w-full small:bg-white-200 small:space-x-2 small:p-0
                    mobile:w-full mobile:bg-white-200 mobile:space-x-2 mobile:p-0
                    tablet:w-[70%] tablet:bg-white-200 tablet:p-0"
          >
            <div className="h-full space-y-1 mobile:w-full mobile:text-justify mobile:text-align-last-center">
              <span className="text-3xl font-semibold">
                <HiText text="Hi" textStyle={dark ? "#9DB2BF" : ""} />{" "}
                <HiText text="There" textStyle={dark ? "#9DB2BF" : ""} />{" "}
                <BounceAnimation textStyle={dark ? "#9DB2BF" : ""} />
              </span>
              <br />
              <HiText textStyle={dark ? "#9DB2BF" : ""} text="I am" />, <ME dark={dark} />
              <br />
              <AboutTextMarketing dark={dark} />
            </div>
          </div>
          <ImageSpan />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
