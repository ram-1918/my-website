import { motion } from "framer-motion";
import { useState, useRef } from "react";
import NameAsTitle from "../../components/sections/section1/NameAsTitle";
import NavButtons, {
  ResumeDownload,
} from "../../components/sections/section1/NavbarButtons";
import ScrollingBall from "../../components/sections/section1/ScrollingBall";

function Topnav() {
  const [offset, setOffset] = useState(0);
  let display = useRef(0);
  let prevPos = useRef(0);

  const screenProps = {
    setOffset: setOffset,
    offset: offset,
    prevPos: prevPos,
    display: display,
  };

  return (
    <>
      {/* For mobile and tablets */}
      <motion.div
        id="navbar"
        style={{ top: display.current }}
        className={`bg-white hidden sticky transition z-30 small:flex mobile:flex flex-col justify-between items-center space-y-1 w-full`}
      >
        <TopnavMobileView {...screenProps} />
      </motion.div>

      {/* For Laptops and Desktops */}
      <motion.div
        transition={{ duration: 2 }}
        animate={{ x: [-100, 0] }}
        style={{ top: display.current }}
        className={`h-full w-full sticky top-0 left-0 right-0 z-30 bg-white flex flex-col transition duration-150 ease-linear small:hidden mobile:hidden`}
      >
        <TopnavDesktopView {...screenProps} />
      </motion.div>
    </>
  );
}

const TopnavMobileView = ({ ...props }) => {
  return (
    <>
      <div
        className={`flex flex-row justify-between bg-white items-center w-full space-x-4 p-2`}
      >
        <NameAsTitle />
        <ResumeDownload />
      </div>
      <NavButtons {...props} />
      <ScrollingBall {...props} />
    </>
  );
};

const TopnavDesktopView = ({ ...screenProps }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full px-20 py-2 space-x-5 place-items-center tablet:px-5">
        <NameAsTitle />
        <NavButtons />
        <ResumeDownload />
      </div>
      <ScrollingBall {...screenProps} />
    </>
  );
};

export default Topnav;
