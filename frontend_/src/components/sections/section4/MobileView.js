import {
  faArrowCircleRight,
  faGraduationCap,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { modeContext } from "../../../Home";
import { CompanyName, Duration } from "./ExperienceUtils";

const Logo = ({ logo }) => (
  <div className="w-12 h-12 p-1">
    <img src={logo} alt="icon" className="bg-cover rounded mobile:rounded-lg" />
  </div>
);

const DescriptionHeader = ({ type, role }) => (
  <span className={`w-full mobile:text-[0.85rem] font-light`}>
    <FontAwesomeIcon
      icon={type === "exp" ? faUserCircle : faGraduationCap}
      className={`px-1`}
    />
    {role}
  </span>
);

const InformationBlock = ({ title, text, obj, obj: { type, role } }) => {
  const { dark } = useContext(modeContext);
  return (
    <div
      className={`${
        title === "Education" ? "bg-purple-100" : "bg-purple-100"
      } flex flex-row justify-start items-center space-x-2 
            w-full h-fit py-2 px-1 leading-6 tracking-wide rounded-tr-xl rounded-tl-xl
            `}
    >
      <Logo logo={obj.logo} />
      <div
        className={`flex flex-col justify-start items-start leading-6 tracking-wide`}
      >
        <CompanyName text={text} obj={obj} dark={dark} />
        <DescriptionHeader type={type} role={role} />
        <Duration text={text} duration={obj.duration} dark={dark} />
      </div>
    </div>
  );
};

const FirstEmptyBlock = ({ title, text, obj, obj: { responsibilities } }) => {
  const { dark } = useContext(modeContext);
  return (
    <div className="w-full h-fit">
      <div className={`h-fit w-fit flex flex-col justify-center items-start`}>
        <InformationBlock text={text} title={title} obj={obj} />
        <ol
          className={`font-normal ${
            dark ? "text-slate-800" : "text-slate-600"
          } text-[0.85rem]  leading-6 tracking-wide p-2`}
        >
          {responsibilities.map((point, idx) => (
            <li key={idx} className="">
              <FontAwesomeIcon icon={faArrowCircleRight} /> {point}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const AcademicDiv = ({ ...props }) => {
  return (
    <div
      className={`${
        props.title === "Education" ? "bg-purple-50" : "bg-purple-50"
      } w-full flex flex-col justify-center items-center space-y-4 z-20 shadow-xl rounded-xl`}
    >
      <FirstEmptyBlock {...props} />
    </div>
  );
};

const MobileView = ({ data, text, title }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full p-2 space-y-10 laptop:hidden desktop:hidden tablet:hidden">
      {data.map((obj, idx) => {
        return (
          <AcademicDiv
            key={idx}
            title={title}
            index={idx}
            text={text}
            obj={obj}
          />
        );
      })}
    </div>
  );
};

export default MobileView;
