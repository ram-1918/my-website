import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { totalViewsAtom } from "../../App";
import { ViewCountDisplay } from "../../components/sections/section1/NavbarButtons";
import { useRecoilValue } from "recoil";
import BaseNavigateOut from "../../components/Base/BaseNavigateOut";
import BaseCopyrights from "../../components/Base/BaseCopyrights";

export const SocialInfo = () => (
  <div className="flex flex-row items-center justify-start px-2 space-x-3">
    <span className="">
      <BaseNavigateOut
        text={<i className="text-2xl text-blue-600 fa fa-linkedin"></i>}
        link="https://www.linkedin.com/in/ramc1918/"
      />
    </span>
    <span className="">
      <BaseNavigateOut
        text={<i className="text-2xl text-black fa fa-github"></i>}
        link="https://github.com/ram-1918/"
      />
    </span>
  </div>
);

const NavigateTo = ({ id }) => (
  <div className="w-full mb-4 text-center animate-bounce">
    <a href={id} className="p-2 rounded-full shadow-md shadow-purple-100">
      <FontAwesomeIcon
        icon={faArrowUp}
        className={`text-purple-600 text-2xl`}
      />
    </a>
  </div>
);

const Footer = () => {
  const totalViews = useRecoilValue(totalViewsAtom);
  return (
    <div
      id="windup"
      className="flex flex-col items-center justify-between space-y-1"
    >
      <NavigateTo id="#about" />
      <ViewCountDisplay count={totalViews} />
      <BaseCopyrights />
    </div>
  );
};

export default Footer;
