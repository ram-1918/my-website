import { faArrowCircleRight, faBookBookmark, faBriefcase, faGraduationCap, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { modeContext } from "../../../Home";
import { CompanyName, Duration } from "./ExperienceUtils";

const DescriptionHeader = ({type, role}) => <span className={`w-full ${type === 'exp' ? 'bg-slate-700 text-slate-100' : 'bg-gray-600 text-gray-100'} p-2 mb-1 text-lg font-light rounded-t-l rounded-t-r`}><FontAwesomeIcon icon={type==='exp' ? faUserCircle : faGraduationCap} className={`${type === 'exp' ? 'text-slate-100' : 'text-gray-100'} text-xl px-2`} />{role}</span>

const FirstEmptyBlock = ({obj:{responsibilities, type, role}}) => {
    const {dark} = useContext(modeContext);
    return (
        <div className="w-[49%] h-fit overflow-y-scroll rounded shadow-lg">
            <div className={`${dark ? 'border-slate-500': 'border-slate-700'} h-fit w-fit flex flex-col justify-center items-start border shadow-xl rounded`}>
                <DescriptionHeader type={type} role={role} />
                <ol className={`font-normal ${dark ? 'text-slate-200': 'text-slate-600'} text-[0.85rem]  leading-6 tracking-wide p-2`}>
                    {responsibilities.map((point, idx) => <li key={idx} className=""><FontAwesomeIcon icon={faArrowCircleRight} /> {point}</li>)}
                </ol>
            </div>
        </div>
    );
};

const CenterLine = ({givenHeight = false}) => {
    const {dark} = useContext(modeContext);
    const afterStyles = 'after:absolute after:top-0 after:-m-2 after:bg-slate-600 after:p-1 after:rounded-full after:rotate-45 after:border-4 after:border-slate-300 after:content-[""]';
    return (
        <div className={`relative h-full mx-4 flex flex-row justify-start`}>
            <div className={`${givenHeight ? `h-24` : 'h-full'} border-l-2 h-full ${dark ? 'border-slate-400' : 'border-slate-800'} ${afterStyles}`}></div>
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
        <div className={`${dark ? 'border-slate-500' : ''} flex flex-row justify-start items-center space-x-2 w-full h-fit bg-gray-0 p-4 border leading-6 tracking-wide shadow-lg rounded-xl mobile:bg-white-200 mobile:p-2`}>
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
        <div className='h-80 w-[90%] odd:flex-row-reverse flex flex-row justify-center items-start p-0'>
            <FirstEmptyBlock {...props} />
            <CenterLine />
            <div className={`flex flex-row w-[49%] h-full ${props.index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <InformationBlock {...props} />
            </div>
        </div>
    )
};
const SubHead = ({title}) => {
    const icon = title === "Education" ? <FontAwesomeIcon icon={faBookBookmark} /> : <FontAwesomeIcon icon={faBriefcase} />;
    return (
        <div className="w-full pb-10 text-center">
            <span className="text-3xl font-normal tracking-wider ">{icon} {title}</span>
        </div>
    );
};

const DesktopView = ({text, data, title}) => {
    const {dark} = useContext(modeContext);
    return (
        <div className='flex flex-col h-full p-2 transition duration-700 mobile:hidden'>
            <div className={`${dark && 'text-[#D1D2D3]'} w-[80%] h-full flex flex-col justify-start items-center mx-auto rounded-xl  p-10 ${dark ? 'shadow-3xl shadow-slate-800 bg-slate-900' : 'bg-white shadow-3xl'} z-10`}>
                <SubHead title={title} />
                <CenterLine givenHeight={true} />
                {data.map((obj, idx) => { return <AcademicDiv key={idx} index={idx} text={text} obj={obj}  /> })}
            </div>
        </div>
    )
};

export default DesktopView;