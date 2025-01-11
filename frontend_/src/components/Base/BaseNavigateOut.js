import { useContext } from "react";
import { modeContext } from "../../Home";

const BaseNavigateOut = ({link, text}) => {
  const {dark} = useContext(modeContext);
  return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        style={{ color: text }}
        className={`text-md ${dark ? 'text-blue-700': 'text-blue-600'} font-thin cursor-pointer underline-offset-4 hover:underline hover:text-blue-500`}
      >
        {text}
      </a>
  );
};

export default BaseNavigateOut;