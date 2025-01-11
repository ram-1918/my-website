import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const colorMapper = (current) => {
    return 'text-white'; // current === 1 ? 'text-cyan-500' : current === 2 ? 'text-teal-500' : 'text-[#D1D2D3]';
};

const decorate = (text) => {
    const n = text.length;
    const highlightStyle = "text-white px-1 mx-1";
    const [first, second] = [text.slice(0, n/2), text.slice(n/2,)];
    let firstStyle, secondStyle = '';
    if(text === "Welcome") {
        secondStyle = highlightStyle + " bg-pink-300";
    } else {
        firstStyle = highlightStyle + " bg-teal-300";
    }
    return (
        <>
            <span className={firstStyle}>{first}</span>
            <span className={secondStyle}>{second}</span>
        </>
    );
};

const SlideShow = ({current, setCurrent}) => {
    const titleList = ['Welcome', 'to', 'my', 'portfolio'];
    const n = titleList.length;

    useEffect(() => {
        const intervalid = setInterval(() => {
            setCurrent((prev) => {
                const newValue = prev + 1;
                return newValue >= n ? 0 : newValue;
            });
        }, 3000);
        return () => clearInterval(intervalid);
    }, [current, setCurrent, n]);

    const animationProps = {
        initial: { opacity: 0 },
        transition: {duration: 3},
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return titleList.map((currentTitle, idx) => {
        return (
            idx === current && 
            <motion.span
            {...animationProps}
            key={idx} 
            className={`bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 from-pink-400 to-teal-600`}
            >
                {currentTitle.length > 4 ? decorate(currentTitle) : currentTitle}
            </motion.span>
            )
    })
};

const DisplaySlideShow = ({current, setCurrent}) => {
    return (
        <span className='font-semibold font-sans text-white text-[11rem] tracking-tight uppercase'>
            <SlideShow current={current} setCurrent={setCurrent} />
        </span>
    );
};

const LearnButton = () => (
    <span>
        <a href="#about" className="w-full h-full px-5 py-3 rounded-full bg-white text-xl font-light bg-gradient-to-r from-teal-200 to-cyan-200 hover:opacity-90">
            Learn More About Me <FontAwesomeIcon icon={faArrowDown} className="text-gray-500 animate-bounce" />
        </a>
    </span>
);

const FirstPage = () => {
    const [current, setCurrent] = useState(0);
    return (
        <div className='select-none h-[100vh] bg-firstpage bg-no-repeat bg-cover opacity-90'>
            <div className='relative w-full h-full bg-gradient-to-t from-slate-900 to-trasparent z-10'>
                <div className='absolute w-full h-full flex flex-col justify-center items-center space-y-10 z-20'>
                    <DisplaySlideShow current={current} setCurrent={setCurrent} />
                    <LearnButton />
                </div>
            </div>
        </div>
    );
};

export default FirstPage;