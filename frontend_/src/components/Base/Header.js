import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { modeContext } from "../../Home";

    
export const gradientStyle = "bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent";
const LetterStyle = ({letter}) => <span className="text-sm font-semibold">{letter}</span>

const TitleSpan = ({name}) => {
    return (
        <div className="w-full text-center">
            <span className={`${gradientStyle} text-[1.7rem] font-medium uppercase tracking-wide text-[#27374D] small:text-[1.5rem] mobile:text-[1.5rem]`}>{name}</span>
        </div>
    )
};

const DescriptionSpan = ({textContent, content}) => (
        <span 
        style={{color: textContent}} 
        className="font-sans font-light leading-6 tracking-wider text-center w-96 text-md mobile:w-fit mobile:px-2">
            {content}
        </span>
    );


function Header({name, content}){
    const nameSpanner = name === "Projects" ? name : name === "Academics & Experience" ? "Experience" : "Acheivements";
    return (
            <div className="
            relative 
            w-full h-full flex flex-row justify-center items-center mx-auto
            small:w-full
            mobile:w-full 
            tablet:w-[40%]">
                <div className="
                w-[35%] flex flex-col items-center space-y-0 
                mobile:w-full
                ">
                    <TitleSpan name={name} />
                    <DescriptionSpan content={content} />
                </div>
                <div className="flex flex-col justify-start mobile:hidden table:hidden" >
                    <div className={`
                    text-purple-600 flex flex-col justify-center items-center absolute top-0 mt-0 pt-0 pr-0 right-20 p-0 z-10 text-[3rem] 
                    `}>
                        <FontAwesomeIcon icon={faBookmark} />
                        {Array.from(nameSpanner.toUpperCase()).map((letter, idx) => <LetterStyle key={idx} letter={letter} />)}
                    </div>
                </div>
            </div>
    )
}

export default Header;

// Method one
// true ? (() => {return }) : (()=>{return });

// Method Two
// if(props.type === "projects"){
//     return(
// }
// else if(props.type === "education"){
//     return(
//     )
// }
// else {
//     return 
// }

// Dynamic styling method
// const color = dark ? "text-blue-800 text-sm": 'text-3xl text-green-800 font-normal';