import {
  AWSIcon,
  CSSIcon,
  DjangoIcon,
  DockerIcon,
  DrfIcon,
  FlaskIcon,
  GinIcon,
  GolangIcon,
  HTMLIcon,
  JenkinsIcon,
  JSIcon,
  PythonIcon,
  ReactIcon,
  SQLIcon,
  TailwindIcon,
  VueIcon,
} from "../../Base/BaseIcons";

const skillsList = [
  <PythonIcon />,
  <GolangIcon />,
  <JSIcon />,
  <DjangoIcon />,
  <DrfIcon />,
  <GinIcon />,
  <FlaskIcon />,
  <ReactIcon />,
  <VueIcon />,
  <SQLIcon />,
  <TailwindIcon />,
  <HTMLIcon />,
  <CSSIcon />,
  <AWSIcon />,
  <DockerIcon />,
  <JenkinsIcon />,
];

const IconsDiv = () => {
  return (
    <div className="relative flex w-[70%] tablet:w-full mobile:w-full overflow-hidden bg-purple-50 rounded-xl shadow-lg py-2">
      <LeftShadow />
      <RightShadow />
      <div className="flex gap-10 outline-2 animate-infinite-scroll">
        <IconsList />
      </div>
    </div>
  );
};

const LeftShadow = () => (
  <div className="absolute top-0 left-0 z-10 w-20 h-full bg-gradient-to-r from-gray-200 to-transparent mobile:w-4"></div>
);
const RightShadow = () => (
  <div className="absolute top-0 right-0 z-10 w-20 h-full bg-gradient-to-l from-gray-200 to-transparent mobile:w-4"></div>
);

const IconsList = () => {
  return (
    <>
      {skillsList.map((skill) => skill)}
      {skillsList.map((skill) => skill)}
    </>
  );
};

export default IconsDiv;
