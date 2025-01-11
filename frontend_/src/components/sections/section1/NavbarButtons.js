import { DownloadIcon } from "../../Base/BaseIcons";
import ThemeButon from "./ThemeButton";
import resume from "../../../static/Ram_Chandra_Bhavirisetty.pdf";
import { modeContext } from "../../../Home";
import { useContext } from "react";

const navBarOptions = [
  { anchor: "#about", OptionTitle: "About" },
  { anchor: "#projects", OptionTitle: "Projects" },
  { anchor: "#experience", OptionTitle: "Experience" },
  { anchor: "#contact", OptionTitle: "Contact" },
];

export const ResumeDownload = () => {
  const {dark} = useContext(modeContext);
  return (
    <a
      href={resume}
      className={`text-md font-light ${
          dark ? "text-[#27374D] bg-[#DDE6ED]" : "text-[#DDE6ED] bg-[#27374D]"
        }
        my-0 border-none rounded-lg hover:opacity-70 px-2 py-2
        mobile:text-[0.8rem] mobile:px-1 mobile:rounded
        small:px-[5px] small:py-1 small:text-[0.6rem] tablet:text-md `}
      download
    >
      Resume <DownloadIcon />
    </a>
  );
};

const Option = ({ anchor, OptionTitle }) => (
    <a
      href={anchor}
      className="py-2 font-light border-none text-md hover:opacity-70"
    >
      {OptionTitle}
    </a>
  );

const NavButtons = () => {
  const {dark} = useContext(modeContext);
  return (
    <div
      className={`
      ${dark ? 'text-white' : 'text-black'}
    flex flex-row justify-between items-center space-x-6 py-1
    mobile:space-x-[10px] mobile:pt-2 mobile:w-full mobile:px-[10px] small:px-[5px] tablet:px-20`}
    >
      <span className="mobile:hidden tablet:hidden">
        <ThemeButon />
      </span>
      {navBarOptions.map((option, idx) => (
        <Option key={idx} {...option} />
      ))}
      <span className="mobile:hidden tablet:hidden">
        <ResumeDownload />
      </span>
    </div>
  );
};

export default NavButtons;
