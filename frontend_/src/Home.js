import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { createContext } from "react";

import Topnav from "./sections/section1/Topnav";
import AboutDiv from "./components/home/AboutDiv";
import Academic from "./sections/section4/Academic";
import Projects from "./sections/section3/Projects";
import Achievements from "./sections/section5/Achievements";
import Footer from "./sections/section6/Footer";

// import FooterDiv from "./sections/section6/FooterDiv";

/**
 * Follow: typography choices, color palettes, and spacing guidelines
 */

export const modeContext = createContext();

function Home() {
  const [dark, setDark] = useState(
    localStorage.getItem("d", false) === "true" ? true : false
    );
  
  let bg = dark ? "bg-black" : "bg-white";

  const [isScrollDown, setIsScrollDown] = useState(false);

  const props = { 
    dark: dark, 
    setDark: setDark, 
    setIsScrollDown: setIsScrollDown, 
    isScrollDown: isScrollDown,
    bgColor: bg
  }

  useEffect(() => {
    window.scrollTo({
      top: localStorage.getItem("p", null)
        ? parseInt(localStorage.getItem("p"))
        : 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      localStorage.setItem("p", window.pageYOffset);
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <>
      <Outlet />
      <modeContext.Provider value={props}>
        <div className={`${bg} w-full h-full flex flex-col font-[sans-serif] transition-all`} >
          <Topnav />
          <AboutDiv />
          <Projects />
          <Academic />
          <Achievements />
          <Footer />
        </div>
      </modeContext.Provider>
    </>
  );
}

export default Home;
