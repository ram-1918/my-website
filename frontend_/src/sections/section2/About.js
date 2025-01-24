import { motion } from "framer-motion";
import { AboutTextMarketing } from "../../components/sections/section2/AboutTexts";
import { SocialInfo } from "../section6/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import {
  HiText,
  ImageSpan,
  ME,
} from "../../components/sections/section2/Spans";

const copyButtonStyles =
  "w-32 p-2 text-sm rounded-full shadow-lg border text-center cursor-pointer hover:opacity-80";

const copyToClipboard = (text, type) => {
  navigator.clipboard.writeText(text);
  alert(`My ${type} copied!`);
};

const About = () => {
  const motionStyleProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 1.5 },
    variants: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
  };
  return (
    <motion.div {...motionStyleProps}>
      <div
        className={`bg-white border border-purple-500 rounded-3xl shadow-3xl p-2 mx-auto w-[60%] mt-40 transition duration-700 animate-[fade-in_1s_ease-in-out]
        small:w-full small:border-none small:shadow-none
        mobile:w-full mobile:mt-0 mobile:border-none mobile:shadow-none
        tablet:bg-transparent tablet:w-full tablet:border-none tablet:shadow-none`}
      >
        <div className="flex flex-row w-full px-4 py-4 space-y-2 rounded-xl small:flex small:flex-col-reverse small:w-full small:bg-white-100 small:p-2 mobile:flex mobile:flex-col-reverse mobile:w-full mobile:bg-white-100 mobile:p-2 tablet:flex tablet:flex-col-reverse tablet:justify-center tablet:items-center tablet:w-full tablet:bg-white-100 tablet:p-2">
          <div
            className="
            text-left px-4 space-y-2 bg-white-200 w-full
            small:w-full small:bg-white-200 small:space-x-2 small:p-0
            mobile:w-full mobile:bg-white-200 mobile:space-x-2 mobile:p-0
            tablet:w-[80%] tablet:bg-white-200 tablet:p-0"
          >
            <div className="h-full space-y-4 mobile:w-full mobile:text-justify mobile:text-align-last-center">
              <br />
              <HiText text="I am" />, <ME />
              <br />
              <AboutTextMarketing />
              <br />
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="flex items-center justify-start">
                  <span className="px-1 text-lg font-light font-dance">
                    Get In Touch:
                  </span>
                  <SocialInfo />
                </div>
                <div className="flex items-center justify-start w-full space-x-2">
                  <span
                    onClick={() =>
                      copyToClipboard(
                        "ramchandra.bhavirisetty7@gmail.com",
                        "Email ID"
                      )
                    }
                    className={`${copyButtonStyles} bg-purple-600 text-white`}
                  >
                    <FontAwesomeIcon icon={faCopy} /> Copy Email
                  </span>
                  <span
                    onClick={() =>
                      copyToClipboard("+1716-617-1918", "Phone Number")
                    }
                    className={`${copyButtonStyles} bg-white text-purple-600 border-purple-600`}
                  >
                    <FontAwesomeIcon icon={faCopy} /> Copy Phone
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ImageSpan />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
