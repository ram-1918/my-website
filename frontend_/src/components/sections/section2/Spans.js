import { useContext } from "react";
import { modeContext } from "../../../Home";
import mylogo from "../../../icons/me3.webp";

export const NormalSpanText = ({ text }) => <span>{text}</span>;

export const ME = () => (
  <span
    className={`text-5xl bg-gradient-to-r from-purple-500 via-red-500 to-purple-500 bg-clip-text text-transparent font-dance mobile:text-3xl`}
  >
    Ram Chandra
  </span>
);

export const StyledSpanText = ({ text, textTitle }) => (
  <span style={{ color: textTitle }} className="text-lg font-light">
    {" "}
    {text}{" "}
  </span>
);

export const HiText = ({ text }) => (
  <span className="text-[#27374D] text-xl font-light font-dance">{text}</span>
);

export const BounceAnimation = ({ textStyle }) => {
  return (
    <button className="animate-bounce z-[-1]" disabled>
      <span style={{ color: textStyle }} className="text-[1.3rem]">
        {" "}
        !
      </span>
    </button>
  );
};

export const ImageSpan = () => {
  const { dark } = useContext(modeContext);
  return (
    // For background color: backdrop-blur-sm backdrop-brightness-50
    <img
      className={`block mx-auto h-[250px] transition duration-700 rounded-full contrast-100 ${
        dark ? "brightness-90" : "brightness-100"
      }`}
      src={mylogo}
      alt="MyLogo not loaded"
    />
  );
};
