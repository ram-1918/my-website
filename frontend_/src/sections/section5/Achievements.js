import BaseNavigateOut from "../../components/Base/BaseNavigateOut";
import leetcode from "../../icons/leetcode.svg";
import aws from "../../icons/aws.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { modeContext } from "../../Home";
import Header from "../../components/Base/Header";

const leetcodeContent =
  "I solved over 400 coding challenges on LeetCode, showing I'm great at solving problems using different programming skills. This experience means I understand the basics of coding and can use them to tackle tough challenges.";

const awsContent =
  "I earned the AWS Cloud Practitioner certificate, proving I understand the basics of cloud computing with Amazon Web Services. Ready to use this knowledge for cloud projects!";

const LogoDiv = ({ icon, name, type }) => {
  const iconType =
    type === "cert" ? (
      <FontAwesomeIcon icon={faMedal} className="text-xl text-gray-600" />
    ) : (
      <FontAwesomeIcon icon={faTrophy} className="text-lg text-gray-600" />
    );
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
  <span
    className={`h-full text-[1rem] ${
      dark ? "text-gray-800" : "text-gray-600"
    } font-light tracking-wide leading-6 align-top`}
  >
    {content}
  </span>
);

const LinkDiv = ({ dark, link, text }) => {
  return (
    <div
      className={`w-full text-right text-md m-1 p-1 border-t-2 ${
        dark ? "border-gray-400" : ""
      } `}
    >
      <BaseNavigateOut link={link} text={text}></BaseNavigateOut>
    </div>
  );
};

const MainDiv = ({ link, text, content, icon, name, type }) => {
  const { dark } = useContext(modeContext);
  return (
    <div
      className={`bg-gradient-to-b from-white to-purple-50
      z-20 w-96 h-96 border flex flex-col justify-between items-start px-4 shadow-md rounded-xl cursor-pointer transition duration-150 ease-in-out
      mobile:w-full mobile:h-fit
    `}
    >
      <LogoDiv icon={icon} name={name} type={type} />
      <Description content={content} dark={dark} />
      <LinkDiv link={link} text={text} dark={dark} />
    </div>
  );
};

const Achievements = () => {
  const { isScrollDown } = useContext(modeContext);
  const content =
    "These can showcase my Enthusiasm for learning and leveling up skills based on current trends";

  return (
    <div className="relative flex flex-col items-center justify-between w-full mb-10">
      <div
        className={`
            ${isScrollDown ? "top-20 mobile:top-36" : "top-8 mobile:top-20"} 
            border-t sticky left-0 right-0 w-full h-[25%] pt-0 pb-4 z-10`}
      >
        <Header name="Certifications & Achievements" content={content} />
      </div>
      <div
        className={`
      w-[90%] px-[10%] tablet:px-0 tablet:w-full  flex flex-row justify-around items-center rounded-xl z-10
      mobile:w-full mobile:flex-col mobile:justify-center mobile:items-center mobile:p-0 mobile:space-y-8 mobile:bg-white mobile:px-2 mobile:m-0
      `}
      >
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
      </div>
    </div>
  );
};

export default Achievements;
