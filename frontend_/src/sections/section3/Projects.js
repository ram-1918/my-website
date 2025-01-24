import { useContext } from "react";
import { modeContext } from "../../Home";
import Header from "../../components/Base/Header";
import ProjectsListDiv from "../../components/sections/section3/ProjectsListDiv";

const HeaderWithCaptionDiv = () => {
  const { isScrollDown } = useContext(modeContext);
  const projectCaption =
    "Projects sections displays all the projects I have built from the experience and enthusiasm for implementing the knowledge that I have gained";
  return (
    <div
      className={`
            ${isScrollDown ? "top-20 mobile:top-36" : "top-7 mobile:top-20"} 
            sticky border-t left-0 right-0 w-full h-[25%] pt-0 pb-20
            `}
    >
      <Header name="Projects" content={projectCaption} />
    </div>
  );
};

const Projects = ({ ...screenProps }) => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-start w-full h-full -space-y-10 mobile:w-full mobile:mb-20"
    >
      <HeaderWithCaptionDiv {...screenProps} />
      <ProjectsListDiv />
    </div>
  );
};

export default Projects;
