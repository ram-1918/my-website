import { useContext } from 'react';
import IconsDiv from '../../components/sections/section2/IconsDiv';
import IconsHeader from '../../components/sections/section2/IconsHeader';
import { modeContext } from '../../Home';
import { motion } from 'framer-motion';


 function Skills() {
    const {dark} = useContext(modeContext);

    return (
        <div 
        // style={{backgroundColor: dark ? "#D1D2D3" : "", color: dark ? "#D1D2D3" : ""}} 
        // mobile:w-full mobile:justify-start mobile:bg-white-100 tablet:w-full
        // mobile:py-0 mobile:h-full mobile:w-full mobile:space-x-0 mobile:flex mobile:flex-col mobile:p-2
        className="flex justify-center items-center space-y-4 p-6  mx-auto w-[100%] 
        small:w-full small:p-0
        "
        >
            <motion.div
            style={{backgroundColor: dark ? "#B6BBC4" : "", color: dark ? "bg-gray-900" : ""}} 
            className={`
                ${dark ? 'desktop:rounded-full mobile:rounded tablet:rounded shadow-2xl shadow-gray-500' : ''}
                py-2 px-2 w-[90%] flex flex-row justify-start items-center space-x-10
                small:w-full small:space-x-0 small:flex-col small:bg-white-200 small:p-2
                mobile:flex mobile:flex-col mobile:justify-start mobile:items-center mobile:space-y-5 space-x-0
                tablet:overflow-x-scroll`}
                >
                <IconsHeader dark={dark} />
                <IconsDiv />
            </motion.div>
        </div>
    )
 }

 export default Skills;

//  npm install @fortawesome/fontawesome-free
// https://www.svgrepo.com/vectors/vuejs/