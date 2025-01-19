import {motion} from "framer-motion";
import { useContext, useState } from "react";
import { modeContext } from "../../../Home";
import { ExternalLinkIcon, GithubIcon } from "../../Base/BaseIcons";
import { projectsData } from "../../data";
import ImageSlider from '../../ImageSlider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCircle, faCircleDot, faDotCircle } from "@fortawesome/free-solid-svg-icons";

const ClickableLink = ({children, link}) => (
    <a target='_blank' rel='noopener noreferrer' href={link} className="hover:underline">
        {children}
    </a>
)

const ButtonStyles = "text-purple-600 cursor-pointer hover:scale-125 transition ease-linear text-xl";

const LeftIcon = () => <FontAwesomeIcon icon={faArrowLeft} />;
const RightIcon = () => <FontAwesomeIcon icon={faArrowRight} />;
const CircleIcon = ({isSelected=false}) => (
    <div className="flex items-center justify-center w-4 h-4 transition ease-linear border border-purple-600 rounded-lg cursor-pointer hover:scale-125">
        {
            isSelected && 
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
        }
    </div>
);

const PrevButton = ({setProjectId}) => (
    <span 
    className={ButtonStyles}
    onClick={
        () => setProjectId(
            prev => {
                let curr = prev;
                if (curr == 0) {
                    curr = projectsData.length;
                }
                return curr - 1;
            }
        )
    }><LeftIcon /></span>
)

const NextButton = ({setProjectId}) => (
    <span 
    className={ButtonStyles}
    onClick={
        () => setProjectId(
            prev => {
                let curr = prev;
                if (curr == projectsData.length - 1) {
                    curr = 0;
                }
                return curr + 1;
            }
        )
    }><RightIcon /></span>
)

const CircularButtons = ({setProjectId, current}) => (
    <span className="flex gap-2">
        {projectsData.map((_, idx) => <span onClick={() => setProjectId(idx)}><CircleIcon isSelected={current === idx} /></span>)}
    </span>
)

{/* {projectsData.map((obj, index) => <ProjectDiv key={index} obj={obj} index={index} {...props} />)} */}
const ProjectsListDiv = ({...props}) => {
    const [projectId, setProjectId] = useState(0);
    return (
        <div className={`relative w-[70%] h-full flex flex-col justify-center items-center mt-10 p-2 z-10 mobile:w-full space-y-2`}>
            <ProjectDiv key={projectId} obj={projectsData[projectId]} index={projectId} {...props} />
            <div className="flex items-center justify-between w-full px-4">
                <PrevButton setProjectId={setProjectId} />
                <CircularButtons setProjectId={setProjectId} current={projectId} />
                <NextButton setProjectId={setProjectId} />
            </div>
        </div>
    )
};

// const TechStackTitle = ({dark}) => <span className={`${dark ? 'border-l-0' : 'border-l-0'} border-l-red-500 text-lg font-normal px-2 text-black`}>Tech Stack</span>

const ImageSliderDiv = ({obj}) => (
    <div className="w-[45%] mobile:w-full h-full flex justify-center items-center">
        <ImageSlider slides={obj.images}/>
    </div>
);

const DiscriptionDiv = ({obj}) => (
    <div>
        <div className="text-xs font-bold uppercase">{obj.eyebrow}</div>
        <div className="font-bold leading-snug text-slate-700">
            <ClickableLink href={obj.link}>
                {obj.title}
            </ClickableLink>
        </div>
        <div className="mt-2 text-sm">{obj.content}</div>
    </div>
);

const ListIconsDiv = ({obj, dark, text}) => (
    <div className={` w-full py-2 mt-4 overflow-x-scroll overscroll-contain`}>
        {/* <TechStackTitle text={text} dark={dark} /> */}
        <div className="flex flex-row items-center justify-start py-2 space-x-5">
            {obj.tech.map((icon, idx) => <span key={idx}>{icon}</span>)}
        </div>
    </div>
);

const ReferenceLinkDiv = ({obj, text}) => (
    <div className="flex flex-row items-center mt-2 space-x-4">
        <ClickableLink link={obj.gitlink} text={text}>
            <GithubIcon />
        </ClickableLink>
        {
        obj.isLink && 
        <ClickableLink link={obj.link} text={text}>
            <ExternalLinkIcon />
        </ClickableLink>
        }
    </div>
)

const ProjectDiv = ({obj, index, text, bg}) => {
    const {dark} = useContext(modeContext);
    return (
        <motion.div 
        key={index}  
        // initial={{opacity: 0.75 }} 
        // whileInView={{ opacity:1 }} 
        transition={{duration:1}} 
        animate={{x:[-100, 0]}} // ${dark ? 'bg-[#B6BBC4]' : ''}
        className={`
        flex flex-row even:flex-row-reverse desktop:even:flex-row-reverse justify-between items-center space-x-4 rounded-xl ${dark ? 'bg-[#B6BBC4] text-black shadow-xl shadow-stone-700' : 'shadow-gray-400 shadow-3xl bg-white'}  w-full h-[350px] laptop:h-[350px] p-4
        small:w-full small:flex small:flex-col small:bg-white-300 small:justify-between small:items-center small:m-4 small:p-2 small:space-x-0
        mobile:flex mobile:even:flex-col mobile:flex-col mobile:bg-white-300 mobile:justify-between mobile:items-center mobile:m-0 mobile:p-2 mobile:space-x-0 mobile:w-full mobile:h-full
        tablet:w-full tablet:flex tablet:flex-col tablet:bg-white-300 tablet:justify-between tablet:items-center tablet:m-2 tablet:p-4 tablet:space-x-0`}
        > 
            <ImageSliderDiv obj={obj} />
            <div className="w-[55%] mobile:w-full small:mt-5 mobile:mt-5 tablet:mt-5 tablet:w-[70%]">
                <DiscriptionDiv obj={obj} text={text} />
                <ListIconsDiv obj={obj} text={text} dark={dark} />
                <ReferenceLinkDiv obj={obj} text={text} />
            </div>
      </motion.div>
    )
};

export default ProjectsListDiv;