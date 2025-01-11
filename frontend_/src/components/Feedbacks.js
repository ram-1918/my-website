// import axios from "axios";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Feedbacks = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }

//   useEffect(() => {
//     const apiurl = "http://18.219.131.21:8000/port-api/";
//     const authorization = {auth: {username:'ubuntu123', password:'portfolio'}};
//     axios.get(`${apiurl}get-info`, authorization)
//     .then((res) => {
//         console.log(res.data);
//     })

//   }, [])
    return (
        <div className="top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] overflow-hidden overscroll-none fixed z-30 mobile:w-full" onClick={routeChange}>
            <div className="z-50 h-[50%] flex flex-col justify-between items-center w-[50%] mt-20 m-auto bg-[#DDE6ED] aspect-[16/7] mobile:w-full mobile:h-[55%] mobile:overflow-auto mobile:overscroll-none">
                <div className="w-full h-[25%] flex flex-row justify-center items-center p-2 bg-white-600">
                    <span className="text-lg w-[60%] h-fit flex flex-row-reverse items-center justify-right text-[#27374D] font-light bg-white-600 mobile:w-[65%] ">
                        About my Portfolio
                    </span>
                    <span className="w-[40%] h-full items-center text-right bg-white-200 mobile:w-[30%]" onClick={routeChange}><i className="fa fa-close"></i></span>
                </div>
                <div className="h-fit w-[100%] flex items-center justify-center px-2 bg-white-300">
                    <span></span>
                    <span className="w-full text-left">My portfolio website utilizes a robust technology stack comprising ReactJS, Tailwind CSS, PostgreSQL, Django Rest Framework, and various other tools. The deployment is hosted on AWS S3, providing reliable hosting and storage capabilities.</span>
                </div>
                <div className="h-fit w-fit flex flex-col justify-around items-center p-2 bg-white-400">
                    <span className="text-lg">In terms of basic analytics, </span>
                    <div className="">
                        <span>The portfolio has received positive feedback from 80% of viewers,</span>
                        <span> with 30% of viewers providing valuable feedback.</span>
                        <span>Additionally, an impressive 90% of viewers have engaged with the website and explored its content until the end.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedbacks;