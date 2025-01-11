import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Topnav from "./sections/section1/Topnav";

import Projects from "./sections/section3/Projects";
import Academic from "./sections/section4/Academic";

import BaseCopyrights from "./components/Base/BaseCopyrights";
// import FooterDiv from "./sections/section6/FooterDiv";
import AboutDiv from "./components/home/AboutDiv";
import { createContext } from "react";
import Achievements from "./sections/section5/Achievements";
import Footer from "./sections/section6/Footer";
import FirstPage from "./FirstPage";

/**
 * Follow: typography choices, color palettes, and spacing guidelines
 */

export const modeContext = createContext();

// const apiurl = "https://www.ramchandra.info/portfolio/";
const apiurl = "http://127.0.0.1:8000/port-api/";
const authorization = {
  auth: { username: "ubuntu123", password: "portfolio" },
};

function Home() {
  const [dark, setDark] = useState(
    localStorage.getItem("d", false) === "true" ? true : false
    );
  
  let bg = dark ? "bg-black" : "bg-white";

  const [isScrollDown, setIsScrollDown] = useState(false);

  // const modeProps = {
  //   dark: dark,
  //   setDark: setDark,
  //   bgColor: bg
  // };
  const props = { 
    dark: dark, 
    setDark: setDark, 
    setIsScrollDown: setIsScrollDown, 
    isScrollDown: isScrollDown,
    bgColor: bg
  }

  const authProps = {
    apiurl: apiurl,
    auth: authorization,
  };

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
        <div
          className={`${bg} w-full h-full flex flex-col font-[sans-serif] transition-all`}
        >
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
