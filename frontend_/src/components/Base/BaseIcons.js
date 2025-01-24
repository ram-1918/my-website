import python from "../../icons/python.svg";
import golang from "../../icons/golang.svg";
import django from "../../icons/django.svg";
import drf from "../../icons/drf.svg";
import gin from "../../icons/gin.svg";
import flask from "../../icons/flask.svg";
import css from "../../icons/css.svg";
import html from "../../icons/html.svg";
import js from "../../icons/js.svg";
import vue from "../../icons/vuejs.svg";
import react from "../../icons/react.svg";
import sql from "../../icons/postgresql.svg";
import tailwind from "../../icons/tailwind_icon.svg";
import aws from "../../icons/aws.svg";
import docker from "../../icons/docker.svg";
import jenkins from "../../icons/jenkins.svg";
import github from "../../icons/github.svg";
import externallink from "../../icons/externallink.svg";
import { modeContext } from "../../Home";
import { useContext } from "react";

const TechName = ({ name }) => {
  const { dark } = useContext(modeContext);
  return (
    <span
      className={`${
        dark ? "font-medium" : "font-light"
      } text-[0.8rem] text-black`}
    >
      {name}
    </span>
  );
};

const BaseIconSpan = ({ icon, alt, name }) => (
  <div className="flex flex-col items-center justify-center w-11 h-11">
    <img src={icon} alt={alt} width="30" height="30" />
    <TechName name={name} />
  </div>
);

export const MoonIcon = () => (
  <i class="fa fa-moon" style={{ fontSize: "18px" }}></i>
);
export const SunIcon = () => (
  <i class="fa fa-sun-o" style={{ fontSize: "16px" }}></i>
);
export const DownloadIcon = () => <i className="fa fa-download"></i>;

export const PythonIcon = () => (
  <BaseIconSpan icon={python} alt="python icon" name="Python" />
);
export const GolangIcon = () => (
  <BaseIconSpan icon={golang} alt="golang icon" name="Golang" />
);
export const DjangoIcon = () => (
  <BaseIconSpan icon={django} alt="django icon" name="Django" />
);
export const DrfIcon = () => (
  <BaseIconSpan icon={drf} alt="drf icon" name="DRF" />
);
export const GinIcon = () => (
  <BaseIconSpan icon={gin} alt="gin icon" name="Gin" />
);
export const FlaskIcon = () => (
  <BaseIconSpan icon={flask} alt="flask icon" name="" />
);
export const ReactIcon = () => (
  <BaseIconSpan icon={react} alt="react icon" name="React.js" />
);
export const JSIcon = () => (
  <BaseIconSpan icon={js} alt="javascript icon" name="Javascript" />
);
export const VueIcon = () => (
  <BaseIconSpan icon={vue} alt="vue icon" name="Vue.js" />
);
export const SQLIcon = () => (
  <BaseIconSpan icon={sql} alt="sql icon" name="PostgreSQL" />
);
export const TailwindIcon = () => (
  <BaseIconSpan icon={tailwind} alt="tailwind icon" name="Tailwind" />
);
export const HTMLIcon = () => (
  <BaseIconSpan icon={html} alt="html icon" name="HTML5" />
);
export const CSSIcon = () => (
  <BaseIconSpan icon={css} alt="css icon" name="CSS3" />
);
export const AWSIcon = () => (
  <BaseIconSpan icon={aws} alt="aws icon" name="AWS" />
);
export const DockerIcon = () => (
  <BaseIconSpan icon={docker} alt="docker icon" name="Docker" />
);
export const JenkinsIcon = () => (
  <BaseIconSpan icon={jenkins} alt="jenkins icon" name="Jenkins" />
);
export const GithubIcon = () => (
  <BaseIconSpan icon={github} alt="github icon" name="Github" />
);
export const ExternalLinkIcon = () => (
  <BaseIconSpan icon={externallink} alt="external icon" name="" />
);

// ICON REFERENECE: https://iconscout.com/icons/react
// https://icon-sets.iconify.design/?query=external+link

/**

Install FontAwesome from 
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

-- additional styles
npm i --save @fortawesome/pro-solid-svg-icons
npm i --save @fortawesome/pro-regular-svg-icons
npm i --save @fortawesome/pro-light-svg-icons
npm i --save @fortawesome/pro-duotone-svg-icons

-- Using Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

 */
