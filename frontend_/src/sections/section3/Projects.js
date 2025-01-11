import { useContext } from "react";
import { modeContext } from "../../Home";
import Header from "../../components/Base/Header";
import ProjectsListDiv from "../../components/sections/section3/ProjectsListDiv";

const HeaderWithCaptionDiv = () => {
    const {dark, isScrollDown} = useContext(modeContext);
    const projectCaption = "Projects sections displays all the projects I have built from the experience and enthusiasm for implementing the knowledge that I have gained"
    return (
        // from-[#9ED5C5] to-[#9ED5C5]
        // sticky top-10 mobile:top-[15%] left-0 right-0 w-full h-[25%] pt-0 pb-20 ${dark ? 'bg-slate-800' : 'bg-gradient-to-r from-green-200 to-green-200'} 
        <div 
        className={
            `
            ${dark ? 'border-t-0' : ''}
            ${isScrollDown ? 'top-20 mobile:top-36' : 'top-7 mobile:top-20'} 
            sticky border-t left-0 right-0 w-full h-[25%] pt-0 pb-20
            `}>  
            <Header name="Projects" content={projectCaption} />
        </div>

    )
};

const Projects = ({...screenProps}) => {
    const {dark} = useContext(modeContext);

    var bg = dark ? "" : "";
    var text = dark ? "#D1D2D3" : "";
    
    const props = {
        text: text,
        bg: bg
    };
    return (
        <div id="projects" className="w-full h-full flex flex-col justify-start items-center -space-y-10 mobile:w-full mobile:mb-20">
            <HeaderWithCaptionDiv {...screenProps} />
            <ProjectsListDiv {...props} />
        </div>
    )
}

export default Projects;








// import tutorflow from '../icons/tutorflow.jpeg';
// import todolist from '../icons/todolist.jpeg';
// import {motion} from "framer-motion";

// function Setup({data, dark}){
//     var bg = '';
//     var text = '';
//     if(dark){
//         // dark stuff
//         // #121212, #1F1B24, #1F1A24
//         bg = dark ? "rgba(0.1,0,0,0.1)" : "";
//         text = "#D1D2D3";
//     }
//     var projectList = [];
//     data.forEach((obj, index) => {
//         projectList.push(
//         <motion.div key={index} style={{background:bg }}  initial={{opacity: 0.6, y:100 }} whileInView={{ opacity:1, y:0  }} transition={{duration:1}} animate={{x:[-100, 0]}} 
//         className="flex flex-row even:flex-row-reverse desktop:even:flex-row-reverse justify-between items-center space-x-4 rounded-lg shadow-lg w-[70%] m-10 p-5
//         small:w-full small:flex small:flex-col small:bg-white-300 small:justify-between small:items-center small:m-4 small:p-2 small:space-x-0
//         mobile:w-full mobile:flex mobile:even:flex-row-reverse mobile:even:flex-col mobile:flex-col mobile:bg-white-300 mobile:justify-between mobile:items-center mobile:m-2 mobile:p-2 mobile:space-x-0
//         tablet:w-full tablet:flex tablet:flex-col tablet:bg-white-300 tablet:justify-between tablet:items-center tablet:m-2 tablet:p-4 tablet:space-x-0"
//         > 
//             <img className="" src={obj.images} alt="imgAlt"width="600" height="600" />
//             <div className="small:mt-5 mobile:mt-5 tablet:mt-5 tablet:w-[70%]">
//                 <div>
//                     <div style={{color: text}} className="text-xs text-slate-600 uppercase font-bold">{obj.eyebrow}</div>
//                     <div className="font-bold text-slate-700 leading-snug">
//                         <a href={obj.title} style={{color: text}} className="hover:underline">{obj.title}</a>
//                     </div>
//                     <div style={{color: text}} className="mt-2 text-sm text-slate-600">{obj.content}</div>
//                 </div>
//                 <div className="flex flex-row items-center space-x-4 mt-1">
//                     <i class='fab fa-github' style={{fontSize: "22px", color: dark ? text : ''}}></i>
//                     <i class='fa fa-external-link' style={{fontSize: "18px", color: dark ? text : ''}}></i>
//                 </div>
//             </div>
//       </motion.div>
//     )})
//     return (
//         <div className="flex flex-col w-full justify-center items-center mx-auto">
//             {projectList}
//         </div>
//     )
// }

// function Projects({dark}){
//     const data = [{
//             "eyebrow": "Website", 
//             "title": "Tutorflow", 
//             "content": "This application provides an array of features, allowing users to post questions, provide answers, add follow-up responses, bookmark favorite questions, express preferences through likes or dislikes, and control question privacy settings (public or private). The backend is powered by Django, the frontend utilizes Vue.js, and AWS services are integrated to ensure scalability and reliability. This powerful combination of Django, Vue.js, and AWS enables the application to deliver robust backend functionality, interactive frontend experiences, and dependable cloud infrastructure.",
//             "images": tutorflow
//         },
//         {
//             "eyebrow": "website", 
//             "title": "The Todos", 
//             "content": "This project is developed using Flask rest plus and Reactjs frameworks and deployed it on AWS EC2",
//             "images": todolist
//         },
//         {
//             "eyebrow": "website", 
//             "title": "TodoList", 
//             "content": "This project is developed using Flask rest plus and Reactjs frameworks and deployed it on AWS EC2",
//             "images": todolist
//         }
//     ];  
//     return <Setup data={data} dark = {dark} />
// }

// export default Projects;
