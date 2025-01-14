import { useContext } from "react";
import { modeContext } from "../../../Home";
import mylogo from "../../../icons/me3.webp";

export const ME = ({dark}) => <span className={`${dark ? "text-white" : ""} text-2xl font-dance`}>Ram Chandra</span>
export const NormalSpanText = ({text}) => <span>{text}</span>;
export const StyledSpanText = ({text, textTitle}) => (
    <span style={{ color: textTitle }} className="text-lg font-light">
        {" "}
        {text} {" "}
    </span>
);
export const HiText = ({text, textStyle}) => (
    <span style={{ color: textStyle }} className="text-[#27374D] text-[1.5rem] font-light">
        {text}
  </span>
);
export const BounceAnimation = ({textStyle}) => {
    return (
        <button className="animate-bounce z-[-1]" disabled>
            <span style={{ color: textStyle }} className="text-[1.3rem]">
            {" "}
            !
            </span>
      </button>
    )
};

export const ImageSpan = () => {
    const {dark} = useContext(modeContext);
    return (
        <img 
            className={`block mx-auto h-[250px] transition duration-700 rounded-full contrast-100 ${dark ? 'brightness-90' : 'brightness-100' }  backdrop-blur-sm backdrop-brightness-50`} 
            src={mylogo}
            alt="MyLogo not loaded"
        />
    );
}