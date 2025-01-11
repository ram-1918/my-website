import {motion} from "framer-motion";
import { useContext } from "react";
import { modeContext } from "../../../Home";
import { ExternalLinkIcon, GithubIcon } from "../../Base/BaseIcons";
import { projectsData } from "../../data";
import ImageSlider from '../../ImageSlider';

const ClickableLink = ({children, link}) => (
    <a target='_blank' rel='noopener noreferrer' href={link} className="hover:underline">
        {children}
    </a>
)

const ProjectsListDiv = ({...props}) => {
    const {dark} = useContext(modeContext);
    return (
        <div className={`w-[70%] h-full mt-10 p-2 z-10 mobile:w-full space-y-8`}>
            {projectsData.map((obj, index) => <ProjectDiv key={index} obj={obj} index={index} {...props} />)}
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
        <div className="text-xs uppercase font-bold">{obj.eyebrow}</div>
        <div className="font-bold text-slate-700 leading-snug">
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
        <div className="flex flex-row justify-start items-center space-x-5 py-2">
            {obj.tech.map((icon, idx) => <span key={idx}>{icon}</span>)}
        </div>
    </div>
);

const ReferenceLinkDiv = ({obj, text}) => (
    <div className="flex flex-row items-center space-x-4 mt-2">
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
        <motion.div key={index}  initial={{opacity: 0.75, y:100 }} whileInView={{ opacity:1, y:0  }} transition={{duration:1}} animate={{x:[-100, 0]}} // ${dark ? 'bg-[#B6BBC4]' : ''}
        className={`
        flex flex-row even:flex-row-reverse desktop:even:flex-row-reverse justify-between items-center space-x-4 rounded-xl ${dark ? 'bg-[#B6BBC4] text-black shadow-xl shadow-stone-700' : 'shadow-gray-400 shadow-3xl bg-white'}  w-full laptop:h-[350px] mb-10 p-4
        small:w-full small:flex small:flex-col small:bg-white-300 small:justify-between small:items-center small:m-4 small:p-2 small:space-x-0
        mobile:flex mobile:even:flex-row-reverse mobile:even:flex-col mobile:flex-col mobile:bg-white-300 mobile:justify-between mobile:items-center mobile:m-0 mobile:p-2 mobile:space-x-0 mobile:w-full mobile:h-full
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