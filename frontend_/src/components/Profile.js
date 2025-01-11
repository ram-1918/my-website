import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {motion} from "framer-motion";

import django from '../icons/django.svg';
import html from '../icons/html.svg';
import js from '../icons/js.svg';
import react from '../icons/logo.svg';
import tailwind from '../icons/tailwind_icon.svg';

const Profile = () => {
    const dark = localStorage.getItem('d', false)==='true' ? true : false;
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        setIsOpen(false);
      let path = `/`; 
      navigate(path);
    }
    // const [totalViewers, setTotalViewers] = useState(0);
    const [totalReachedBottom, setTotalReachedBottom] = useState(0);
    const [totalLikesPercent, setTotalLikesPercent] = useState(0);
    const [totalFeedbacksPercent, setTotalFeedbacksPercent] = useState(0);
    // const [FeedbacksInfo, setFeedbacksInfo] = useState(0);
    const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // const apiurl = "http://18.219.131.21:8000/port-api/";
    const apiurl = "https://www.ramchandra.info/portfolio/";
    const authorization = {auth: {username:'ubuntu123', password:'portfolio'}};
    axios.get(`${apiurl}get-info/`, authorization)
    .then((res) => {
        // console.log(dark, typeof(dark), res.data);
        // setTotalViewers(res.data['count']);
        setTotalReachedBottom(Math.ceil((res.data['reached_bottom']/res.data['count'])*100));
        setTotalLikesPercent(Math.ceil(res.data['likes_percent']));
        setTotalFeedbacksPercent(Math.ceil(res.data['feedbacks_percent']));
        // setFeedbacksInfo(res.data['feedback_info']);
    })

  }, [dark])
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
    return (
        <>
        {/* <div className="top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] overflow-hidden overscroll-none fixed z-30 mobile:w-full" onClick={routeChange}></div> */}
        <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
        >
        <div className="top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] overscroll-none fixed z-40 mobile:w-full" >
            <div className={`z-50 w-[50%] h-[50%] flex flex-col justify-between items-center mt-20 pb-8 m-auto font-light ${dark ? "bg-[#27374D]" : "bg-[#27374D]"} ${dark ? "text-[#DDE6ED]" : "text-[#DDE6ED]"} shadow-md ${dark ? "shadow-[#27374D]":"shadow-[#27374D]"} mobile:w-full mobile:h-[55%] mobile:overflow-auto mobile:overscroll-none`}>
                <div className="w-full h-[25%] flex flex-row justify-center items-center p-2 bg-[#9DB2BF]">
                    <span className="text-xl w-[60%] h-fit flex flex-row-reverse items-center justify-right text-[#27374D] font-normal bg-white-600 mobile:w-[65%] ">
                        About my Portfolio
                    </span>
                    <span className="w-[40%] h-full items-center text-right bg-white-200 mobile:w-[30%]"><i onClick={routeChange} className="fa fa-window-close text-[#DDE6ED] hover:cursor-pointer"></i></span>
                </div>
                <div className="h-fit w-[100%] flex flex-col items-center justify-center px-2 bg-white-300">
                    <span className="w-full text-left">My portfolio website is built using a robust technology stack that includes ReactJS, Tailwind CSS, PostgreSQL, and Django Rest Framework. This application is hosted on AWS EC2, ensuring reliable hosting and storage capabilities.</span>
                    <span className={`w-[50%] flex flex-col justify-between items-center text-left rounded-lg ${dark ? "bg-[#27374D]" : "bg-[#27374D]"} px-2 py-2 mt-2`}>
                        <span className="text-white w-full text-left">Technologies Used</span>
                        <span className="w-full flex flex-row justify-around text-left pt-2">
                            <img src={django} alt="django_svg" width="30" height="30" />
                            <img src={react} alt="js_svg" width="30" height="30" />
                            <img src={js} alt="js_svg" width="30" height="30" />
                            <img src={html} alt="html_svg" width="30" height="30" />
                            <img src={tailwind} alt="css_svg" width="30" height="30" />
                        </span>
                    </span>
                </div>
                <div className="h-fit w-fit flex flex-col justify-around items-center p-2 bg-white-400">
                    <span className="text-lg">In terms of basic analytics, </span>
                    <div className="">
                        <span>My portfolio has received a <span className="font-bold text-[1.2rem]">{totalLikesPercent}%</span> like rate from viewers, demonstrating their positive response, </span>
                        <span> and <span className="font-bold text-[1.2rem]">{totalFeedbacksPercent}%</span> have provided valuable feedback. </span>
                        <span>Furthermore,  {totalReachedBottom >= 60 ? 'an impressive' : ''}  <span className="font-bold text-[1.2rem]">{totalReachedBottom}%</span> of viewers have actively engaged with the website and scrolled all the way to the end.</span>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
        </>
    )
}

export default Profile;