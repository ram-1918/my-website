

import { useContext, useState } from "react";
import { modeContext } from "../../Home";
import { education, experienceTitleContent, ftExperienceData } from "../../components/data";
import DesktopView from "../../components/sections/section4/DesktopView";
import Header from "../../components/Base/Header";
import MobileView from "../../components/sections/section4/MobileView";

const AcademicHeaderDiv = () => {
    const {dark, isScrollDown} = useContext(modeContext);
    return (
        // from-[#EFFFFD] to-[#B7D3DF]
        // ${dark ? 'bg-slate-800':'bg-gradient-to-l from-blue-100 to-blue-100'}
        <div className={`
            ${dark ? 'border-t-0' : ''}
            ${isScrollDown ? 'top-20 mobile:top-36' : 'top-8 mobile:top-20'} 
            border-t sticky left-0 right-0 w-full h-[25%] pt-0 pb-4 z-10`}> 
            <Header dark = {dark} name="Academics & Experience" content={experienceTitleContent} />
        </div>
    )
};

function Academic({...screenProps}) {
    const [isEducation, setIsEducation] = useState(true);
    const {dark} = useContext(modeContext);
    var text = '';
    if(dark){
        text = "#D1D2D3";
    }
    return (
        <div id="experience" className="items-center justify-center w-full h-full pt-10 mb-36 rounded-xl mobile:p-0 small:p-0">
            <AcademicHeaderDiv {...screenProps}  />
            <div className="flex items-center justify-center w-full mb-10">
                <div className="z-20 flex items-center justify-center overflow-hidden border border-purple-600 divide-x-2 divide-purple-600 w-fit rounded-xl">
                    <span onClick={() => setIsEducation(true)} className={`${isEducation ? "bg-purple-600 text-white": "text-purple-600 bg-white"} p-2 text-center w-36 cursor-pointer`}>Academic</span>
                    <span onClick={() => setIsEducation(false)} className={`${isEducation ? "text-purple-600 bg-white": "bg-purple-600 text-white"} p-2 text-center w-36 cursor-pointer`}>Experience</span>
                </div>
            </div>
            
            {
                isEducation ? 
                <>
                    <MobileView title="Education" data={education} />
                    <DesktopView title="Education" text={text} data={education}  />
                </>
                :
                <>
                    <MobileView title="Experience" data={ftExperienceData} />
                    <DesktopView title="Experience" text={text} data={ftExperienceData} />
                </>
            }
        </div>
    )
};

export default Academic;

/*
<div className="relative w-full px-[10%] h-8">
    <div className="absolute left-[47%]">
        <FontAwesomeIcon icon={faFlagCheckered} className="text-3xl text-purple-600" />
    </div>
</div>
{
    isEducation && 
    <div className="px-[15%] bg-white -space-y-6">
        <RightCut title="University at Buffalo, SUNY" duration="August 2021 - December 2022" />
        <LeftCut title="Hindustan University, Chennai, India" duration="July 2016 - April 2020" />
    </div>
}
{
    !isEducation && 
    <div className="px-[15%] bg-white -space-y-6 border-4">
        <RightCut title="Goldman Sachs, Salt Lake City, UT" duration="July 2024 - Present" />
        <LeftCut title="Kellogg Company, Chicago, Illinois" duration="March 2023 - July 2024" />
        <RightCut title="Eidiko System integrators, Charlotte, NC" duration="July 2022 - March 2023" />
        <LeftCut title="TCS, Hyderabad, India" duration=" May 2020 - August 2021" />
    </div>
}
<div className="relative w-full px-[10%]">
    <div className="absolute left-[51%] -top-7">
        // <img src={finish_flag} width="100" height="100" />
        <FontAwesomeIcon icon={faFlag} className="text-3xl text-purple-600" />
    </div>
</div>
const RightCut = ({title, duration}) => {
    return (
        <div className="flex w-full">
            <div className="w-[53%] h-40 rounded-full border-r-4 border-purple-600"></div>
            <div className="w-[47%] h-40 rounded-full border-0 flex flex-col justify-center items-center">
                <div className="relative flex items-center justify-start w-full gap-10">
                    <div className="absolute w-3 h-3 bg-purple-600 rounded-full -left-2"></div>
                    <div className="flex flex-col items-start justify-start pl-10">
                        <span className="text-xl font-semibold text-purple-600">{title}</span>
                        <span className="font-light text-purple-600 text-md">{duration}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const LeftCut = ({title, duration}) => {
    return (
        <div className="flex w-full">
            <div className="w-[45%] mobile:w-[26%] h-40 rounded-full border-0 flex flex-col justify-center items-center">
                <div className="relative flex items-center justify-start w-full gap-10">
                    <div className="absolute w-3 h-3 bg-purple-600 rounded-full -right-2"></div>
                    <div className="flex flex-col items-end justify-start w-full pr-10">
                        <span className="text-xl font-semibold text-purple-600">{title}</span>
                        <span className="font-light text-purple-600 text-md">{duration}</span>
                    </div>
                </div>
            </div>
            <div className="w-[55%] h-40 rounded-full border-l-4 border-purple-600"></div>
        </div>
    )
}
*/