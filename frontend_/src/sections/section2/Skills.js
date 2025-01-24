import IconsDiv from "../../components/sections/section2/IconsDiv";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="flex justify-center items-center space-y-4 p-6  mx-auto w-[100%] mobile:p-0 mobile:my-10 small:w-full small:p-0">
      <motion.div
        className={`
                py-2 px-2 w-[90%] flex flex-row justify-center items-center gap-4 space-x-0
                small:w-full small:space-x-0 small:flex-col small:bg-white-200 small:p-2
                mobile:w-full mobile:flex mobile:flex-col mobile:justify-start mobile:items-center mobile:space-y-5 `}
      >
        <IconsDiv />
      </motion.div>
    </div>
  );
}

export default Skills;

//  npm install @fortawesome/fontawesome-free
// https://www.svgrepo.com/vectors/vuejs/
