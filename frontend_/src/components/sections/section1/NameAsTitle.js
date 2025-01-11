import { useContext } from "react";
import { modeContext } from "../../../Home";

const NameAsTitle = () => {
  const {dark} = useContext(modeContext);
    return (
      <div className="">
        <span
          className={`${
            dark ? "text-[#9DB2BF]" : "text-[#27374D]"
          } text-xl font-bold `}
        >
          Ram
        </span>
        <span className={`text-xl font-light ${dark ? 'text-gray-400' : 'text-black'} `}>Chandra</span>
      </div>
    );
  };

  export default NameAsTitle