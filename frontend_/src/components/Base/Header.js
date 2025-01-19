import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { modeContext } from "../../Home";

const TitleSpan = ({text, name}) => {
    const {dark} = useContext(modeContext);
    // const [first, rest] = [name.slice(0,2), name.slice(2,)] ;
    return (
        <div className="w-full text-center">
            <span style={{ color: dark ? text : ''}} className="text-[2rem] font-medium uppercase tracking-wide text-[#27374D] small:text-[1.5rem] mobile:text-[1.5rem]">{name}</span>
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

// const Header = () => (
//     <div className="sticky top-0 left-0 right-0 flex flex-col items-center justify-center space-y-2">
//       <span className="font-sans text-3xl font-normal">
//         Academics & Experience
//       </span>
//       <span className="font-sans font-light leading-6 tracking-wide text-center w-72 text-wrap text-md">
//         These can showcase my Enthusiasm for learning and leveling up skills based
//         on current trends
//       </span>
//     </div>
//   );

const LetterStyle = ({letter}) => <span className="text-sm font-semibold">{letter}</span>

function Header({name, content}){
    const {dark} = useContext(modeContext);
    var text, textContent = '';
    if(dark){
        text = "#D1D2D3";
        textContent = "gray";
    };
    const nameSpanner = name === "Projects" ? name : "Experience"
    return (
            <div className="
            w-full h-full flex flex-row justify-center items-center mx-auto
            small:w-full
            mobile:w-full 
            tablet:w-[40%]">
                <div className="
                w-[35%] flex flex-col items-center space-y-0 
                mobile:w-full
                ">
                    <TitleSpan text={text} name={name} />
                    <DescriptionSpan textContent={textContent} content={content} />
                </div>
                <div className="flex flex-col justify-start bg-red-400 mobile:hidden table:hidden" >
                    <div className={`
                    ${name === 'Academics & Experience' && dark ? 'text-gray-400' : 'text-purple-600'} 
                    ${name === 'Projects' && (dark ? 'text-gray-400': 'text-purple-600')} 
                    flex flex-col justify-center items-center absolute top-0 mt-0 pt-0 pr-0 right-20 p-0 z-10 text-[3rem] 
                    `}>
                        <FontAwesomeIcon icon={name === 'Academics & Experience' ? faBookmark : faBookmark} />
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