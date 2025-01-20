import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEnvelope, faHomeLg, faMobilePhone } from '@fortawesome/free-solid-svg-icons';
import BaseNavigateOut from '../../components/Base/BaseNavigateOut';
import BaseCopyrights from '../../components/Base/BaseCopyrights';
// import medium from "../../icons/medium.svg";

const ContactHeader = ({text}) => {
    return (
        <span className="font-light text-3xl text-[#D1D2D3]">
            {text}
        </span>
    );
};

const NavigateTo = ({id}) => (
    <div className="w-full mb-4 text-center animate-bounce">
        <a href={id} className="p-2 rounded-full shadow-md shadow-purple-100"><FontAwesomeIcon icon={faArrowUp} className={`text-purple-600 text-2xl`} /></a>
    </div>
);

const InfoBlock = ({icon, text}) => (
    <span className="text-lg font-light tracking-wide small:text-[0.7rem] mobile:text-[0.9rem]">
        {icon} {text}
    </span>
)

const MyInfo = () => {
    return (
        <div className="
        w-full flex flex-row justify-center items-center space-x-8
        mobile:w-fit mobile:flex-col mobile:items-start mobile:space-x-0
        small:flex small:flex-col small:justify-center small:items-center small:space-y-4 small:text-[0.8rem] 
        ">
            <InfoBlock icon={<FontAwesomeIcon icon={faHomeLg} />} text="Salt Lake City, UT, 84101" />
            <InfoBlock icon={<FontAwesomeIcon icon={faMobilePhone} />} text={<a href={`tel:${7166171918}`}>+1 (716) 617-1918</a>} />
            <InfoBlock icon={<FontAwesomeIcon icon={faEnvelope} />} text={<a href={`mailto:${'ramchandra.bhavirisetty7@gmail.com'}`}>ramchandra.bhavirisetty7@gmail.com</a>} />
        </div>
    );
};

// const mediumIcon = <img src={medium} alt="logo" width="30" height="30" className='bg-white rounded-lg'></img>



export const SocialInfo = () => (
    <div className="
    flex flex-row justify-start items-center space-x-2
    mobile:w-[25%] mobile:flex-col mobile:space-x-0 mobile:space-y-4
    small:flex small:flex-col small:justify-center small:items-center small:space-y-4 small:mt-4 small:text-[0.8rem]">
        <span className='px-2 border border-purple-600 rounded-lg shadow-lg '><BaseNavigateOut text={<i className='text-2xl text-blue-600 fa fa-linkedin'></i>} link="https://www.linkedin.com/in/ramc1918/" /></span>
        <span className='px-2 border border-purple-600 rounded-lg shadow-lg'><BaseNavigateOut text={<i className='text-2xl text-black fa fa-github'></i>} link="https://github.com/ram-1918/" /></span>
        {/* <span className='px-2 rounded-lg '><BaseNavigateOut text={mediumIcon} link="https://github.com/ram-1918/portfolio-backend.git" /></span> */}
    </div>
);

const Footer = () => {
    return (
        <div id="contact" className="flex flex-col items-center justify-between p-1 space-y-1">
            <NavigateTo id="#about" />
            <BaseCopyrights />
        </div>
    )
}

export default Footer;

/*
<div className="
flex flex-col justify-center items-center space-y-4 text-white w-full mb-20 mobile:mt-10 small:space-x-2 mobile:space-x-2 p-[1px]
mobile:flex-row mobile:space-y-0
">
    <SocialInfo />
    <MyInfo />
</div>
*/