import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { modeContext } from "../../../Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketball, faSoccerBall } from "@fortawesome/free-solid-svg-icons";

export default function ScrollingBall({
  setOffset,
  prevPos,
  display
}) {
  let currScrollPos = window.scrollY - document.documentElement.clientHeight;
  let totalScrollHeight =
    document.body.offsetHeight - document.documentElement.clientHeight;
  let fraction =
    (document.documentElement.clientHeight / totalScrollHeight) * 100;
  let percentScrolled = Math.floor(
    ((totalScrollHeight - currScrollPos) / totalScrollHeight) * 100
  );
  let widthScrollPercent = 100 + fraction - percentScrolled + "%";

  const {setIsScrollDown} = useContext(modeContext);

  const [isScrolling, setIsScrolling] = useState("");

  const {dark} = useContext(modeContext);


  useEffect(() => {
    let timeoutId;
    const onScroll = () => {
      setOffset((prev) => {
        prevPos.current = prev; // gives the prev position and assigns it to prevPos useRef variable
        return window.scrollY; // setting current new offset(curr position)
      });
      // Controls Topnav movement
      if (prevPos.current <= window.scrollY) {
        display.current = "-50px";
        setIsScrollDown(false);
      } else {
        display.current = "0";
        setIsScrollDown(true);
      }
      // set spinning animation on scroll and stop spinning on pause
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling("");
      }, 850);
      setIsScrolling(
        prevPos.current > window.pageYOffset
          ? "animate-[spinreverse_1s_linear_infinite]"
          : "animate-spin"
      );
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const rollingClass = `text-right ${isScrolling} ${dark ? 'text-white' : 'text-black'}`;
  return (
    <div
      style={{ backgroundColor: "inherit", width: "100%" }}
      className="overflow-hidden"
    >
      {/* [#9DB2BF] */}
      <motion.div
        transition={{ duration: 3 }}
        style={{ width: widthScrollPercent }}
        className={`h-fit mt-0 text-right ${
          dark
            ? "border-b border-red-500"
            : "border-b border-b-gray-400"
        } transition-all transform ease-linear duration-1000`}
      >
      {dark ? <FontAwesomeIcon icon={faBasketball} className={rollingClass} /> : <FontAwesomeIcon icon={faSoccerBall} className={rollingClass} />}
      </motion.div>
    </div>
  );
}
