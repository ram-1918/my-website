import { faArrowCircleRight, faBookBookmark, faBriefcase, faFlag, faGraduationCap, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { modeContext } from "../../../Home";
import { CompanyName, Duration } from "./ExperienceUtils";
import { gradientStyle } from "../../Base/Header";

const DescriptionHeader = ({type, role}) => <span className={`w-full bg-purple-100 text-purple-800 p-2 mb-1 text-lg font-medium rounded-t-l rounded-t-r`}><FontAwesomeIcon icon={type==='exp' ? faUserCircle : faGraduationCap} className={`${type === 'exp' ? 'text-purple-800' : 'text-purple-800'} text-xl px-2`} />{role}</span>

const FirstEmptyBlock = ({obj:{responsibilities, type, role}}) => {
    const {dark} = useContext(modeContext);
    return (
        <div className="w-[49%] h-fit overflow-y-scroll rounded shadow-lg">
            <div className={`border-purple-900 h-fit w-fit flex flex-col justify-center items-start overflow-hidden border shadow-xl rounded`}>
                <DescriptionHeader type={type} role={role} />
                <ol className={`font-normal text-gray-800 text-[0.85rem]  leading-6 tracking-wide p-2`}>
                    {responsibilities.map((point, idx) => <li key={idx} className=""><FontAwesomeIcon icon={faArrowCircleRight} className="text-purple-600" /> {point}</li>)}
                </ol>
            </div>
        </div>
    );
};

const CenterLine = ({givenHeight = false}) => {
    const afterStyles = 'after:absolute after:top-0 after:-m-2 after:bg-purple-600 after:p-1 after:rounded-full after:rotate-45 after:border-4 after:border-purple-300 after:content-[""]';
    return (
        <div className={`relative h-full flex flex-row justify-start mx-4`}>
            <div className={`relative w-0.5 border-l-2 h-full border-purple-600 mx-auto`}>
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-purple-200 shadow-md"></div>
            </div>
        </div>
    )
};

const Logo = ({logo}) => (
    <div className="w-12 h-12 p-1">
        <img src={logo} alt="icon" className="bg-cover rounded shadow-xl" />
    </div>
)

const InformationBlock = ({text, obj}) => {
    const {dark} = useContext(modeContext);
    return (
        <div className={`bg-gradient-to-r from-white via-white to-purple-50 flex flex-row justify-start items-center space-x-2 w-full h-fit p-4 border leading-6 tracking-wide shadow-lg rounded-xl mobile:p-2`}>
            <Logo logo={obj.logo} />
            <div className={`flex flex-col leading-6 tracking-wide`}>
                <CompanyName text={text} obj={obj} dark={dark} />
                <Duration text={text} duration={obj.duration} dark={dark} />
            </div>
        </div>
    )
};

const AcademicDiv = ({...props}) => {
    return (
        <div className='h-80 w-[90%] odd:flex-row-reverse flex flex-row justify-center items-start'>
            <FirstEmptyBlock {...props} />
            <CenterLine />
            <div className={`flex flex-row w-[49%] h-full ${props.index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <InformationBlock {...props} />
            </div>
        </div>
    )
};
const SubHead = ({title}) => {
    const iconStyles = `text-purple-600 text-3xl font-normal tracking-wider`
    const icon = title === "Education" ? <FontAwesomeIcon icon={faBookBookmark} className={iconStyles} /> : <FontAwesomeIcon icon={faBriefcase} className={iconStyles} />;
    return (
        <div className="w-full pb-10 text-center">
            {icon} <span className={`${gradientStyle} text-3xl font-normal tracking-wider`}>{title}</span>
        </div>
    );
};

const DesktopView = ({text, data, title}) => {
    const {dark} = useContext(modeContext);
    return (
        <div className='flex flex-col h-full p-2 transition duration-700 mobile:hidden'>
            <div className={`${dark && 'text-[#D1D2D3]'} w-[80%] h-full flex flex-col justify-start items-center mx-auto rounded-xl  p-10 ${dark ? 'shadow-3xl shadow-slate-800 bg-slate-900' : 'bg-white shadow-3xl'} z-10`}>
                <SubHead title={title} />
                {data.map((obj, idx) => <AcademicDiv key={idx} index={idx} text={text} obj={obj}  />)}
            </div>
        </div>
    )
};

export default DesktopView;