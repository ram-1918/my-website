import { useContext, useState } from 'react';
import IconsDiv from '../../components/sections/section2/IconsDiv';
import { modeContext } from '../../Home';
import { motion } from 'framer-motion';


 function Skills() {
    const {dark} = useContext(modeContext);
    const [listType, setListType] = useState('scroll');

    return (
        <div className="flex justify-center items-center space-y-4 p-6  mx-auto w-[100%] small:w-full small:p-0">
            <motion.div
            style={{backgroundColor: dark ? "#B6BBC4" : "", color: dark ? "bg-gray-900" : ""}} 
            className={`
                py-2 px-2 w-[90%] flex flex-row justify-center items-center gap-4
                small:w-full small:space-x-0 small:flex-col small:bg-white-200 small:p-2
                mobile:flex mobile:flex-col mobile:justify-start mobile:items-center mobile:space-y-5 space-x-0
                tablet:overflow-x-scroll`}
                >
                <IconsDiv />
            </motion.div>
        </div>
    )
}

export default Skills;

{/* <IconsHeader setListType={setListType} />
{
    listType === 'scroll' ? <IconsDiv /> : <span>lisr</span>
} */}

//  npm install @fortawesome/fontawesome-free
// https://www.svgrepo.com/vectors/vuejs/