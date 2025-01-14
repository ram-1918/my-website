import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { modeContext } from "../../../Home";

const handleMode = (setDark) => {
    setDark((state) => {
      localStorage.setItem("d", !state);
      return !state;
    });
  };

const ThemeIconBasedOnMode = ({ dark }) => (dark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />);

const ThemeButon = () => {
  const {setDark, dark} = useContext(modeContext);
  return (
    <button
      onClick={() => handleMode(setDark)}
      className={`${dark && 'text-white'} text-md font-light border-none hover:opacity-70 py-2`}
    >
      <ThemeIconBasedOnMode dark={dark} />
    </button>
  );
};

export default ThemeButon;