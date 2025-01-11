import BaseNavigateOut from "../../components/Base/BaseNavigateOut";
import leetcode from "../../icons/leetcode.svg";
import aws from "../../icons/aws.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { modeContext } from "../../Home";

const leetcodeContent =
  "I solved over 300 coding challenges on LeetCode, showing I'm great at solving problems using different programming skills. This experience means I understand the basics of coding and can use them to tackle tough challenges.";
const awsContent =
  "I earned the AWS Cloud Practitioner certificate, proving I understand the basics of cloud computing with Amazon Web Services. Ready to use this knowledge for cloud projects!";
// const mediumContent =
//   "I write engaging blog posts on Medium, tackling interesting topics and connecting with a growing audience of readers.";

const LogoDiv = ({ icon, name, type }) => {
    const iconType = type === "cert" ? <FontAwesomeIcon icon={faMedal} className="text-xl text-gray-600" /> : <FontAwesomeIcon icon={faTrophy} className="text-lg text-gray-600" />
  return (
    <div className="flex flex-col items-center justify-center w-full pt-2">
      <img src={icon} alt="logo" width="120" height="120"></img>
      <div className="my-2">
      <span>{iconType}</span>
        <span className="px-2 text-lg font-normal">{name}</span>

      </div>
    </div>
  );
};

const Description = ({ dark, content }) => (
  <span className={`h-full text-[1rem] ${dark ? 'text-gray-800': 'text-gray-600'} font-light tracking-wide leading-6 align-top`}>
    {content}
  </span>
);

const LinkDiv = ({ dark, link, text }) => {
  return (
    <div className={`w-full text-right text-md m-1 p-1 border-t-2 ${dark ? 'border-gray-400' : ''} `}>
      <BaseNavigateOut link={link} text={text}></BaseNavigateOut>
    </div>
  );
};

const MainDiv = ({ link, text, content, icon, name, type }) => {
  const {dark} = useContext(modeContext);
  return (
    <div className={`
    ${dark ? 'bg-gray-300': 'bg-white'} z-20 w-[30%] h-96 border flex flex-col justify-between items-start px-4 shadow-md shadow-gray-300 rounded-xl cursor-pointer transition duration-150 ease-in-out hover:shadow-teal-300
    mobile:w-full mobile:h-fit
    `}>
      <LogoDiv icon={icon} name={name} type={type} />
      <Description content={content} dark={dark} />
      <LinkDiv link={link} text={text} dark={dark} />
    </div>
  );
};

const Header = () => {
  const {dark, isScrollDown} = useContext(modeContext);
  return (
    <div 
    className={
        `
        ${dark ? 'border-t-0' : ''}
        ${isScrollDown ? 'top-20 mobile:top-36' : 'top-10 mobile:top-20'} 
        sticky left-0 right-0 w-full h-[25%] pt-0 pb-20
        `}>
    <div className={`${dark && 'text-[#D1D2D3]'} flex flex-col justify-center items-center space-y-2`}>
      <span className={`mobile:hidden text-3xl font-normal font-sans mobile:text-[1.5rem]`}>
        Certificates & Accomplishments
      </span>
      <span className={`desktop:hidden text-3xl font-normal font-sans mobile:text-[1.5rem]`}>
        Accomplishments
      </span>
      <span className="font-sans text-lg font-light leading-6 tracking-wide text-center w-80 text-wrap mobile:text-md">
        These can showcase my Enthusiasm for learning and leveling up skills based
        on current trends
      </span>
    </div>
    </div>
  )
};

const Achievements = () => {
  const {dark} = useContext(modeContext);

  return (
    <div className="flex flex-col justify-between w-full mb-10 -space-y-10">
      <Header dark={dark} />
      <div className={`
      w-[90%] m-8 p-4 flex flex-row justify-around items-center rounded-xl ${dark ? "bg-slate-900": "bg-gray-100"} z-10
      mobile:w-full mobile:flex-col mobile:justify-center mobile:items-center mobile:space-y-8 mobile:bg-white mobile:px-2 mobile:m-0
      `}>
        <MainDiv
          icon={aws}
          name="AWS Cloud Practitioner"
          content={awsContent}
          link="https://leetcode.com/Coder1918/"
          text="View Certificate"
          type="cert"
        />

        <MainDiv
          icon={leetcode}
          name="Leetcode"
          content={leetcodeContent}
          link="https://leetcode.com/Coder1918/"
          text="View Profile"
          type="ach"
        />

        {/* <MainDiv
          icon={medium}
          name="Medium Blogs"
          content={mediumContent}
          link="https://leetcode.com/Coder1918/"
          text="View Blogs"
          type="ach"
        /> */}
      </div>
    </div>
  );
};

export default Achievements;
