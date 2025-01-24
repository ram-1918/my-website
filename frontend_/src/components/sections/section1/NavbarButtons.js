import { DownloadIcon } from "../../Base/BaseIcons";
import resume from "../../../static/Ram_Chandra_Bhavirisetty.pdf";
import { useEffect, useState, useRef } from "react";

const navBarOptions = [
  { anchor: "about", OptionTitle: "About" },
  { anchor: "projects", OptionTitle: "Projects" },
  { anchor: "experience", OptionTitle: "Experience" },
  { anchor: "windup", OptionTitle: "Wind Up" },
];

export const ViewCountDisplay = ({ count }) => {
  const [currentCount, setCurrentCount] = useState(0);

  // Animate count increment
  useEffect(() => {
    if (currentCount < count) {
      const increment = Math.ceil((count - currentCount) / 10); // Smooth steps
      const timer = setTimeout(() => {
        setCurrentCount((prev) => Math.min(prev + increment, count));
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [currentCount, count]);

  return (
    <span className="px-2 text-purple-400 text-[0.9rem] transition ease-linear small:text-[0.6rem] mobile:text-[0.7rem]">
      <i className="fa fa-eye"></i> Total Views: {currentCount}
    </span>
  );
};

export const ResumeDownload = () => {
  return (
    <a
      href={resume}
      className={`
        bg-purple-600 text-white text-md font-light my-0 border-none rounded-md hover:opacity-70 px-2 py-1
        mobile:text-[0.8rem] mobile:px-1 mobile:rounded
        small:px-[5px] small:py-1 small:text-[0.6rem]`}
      download
    >
      Resume <DownloadIcon />
    </a>
  );
};

const Option = ({ activeSection, ...option }) => (
  <a
    href={`#${option.anchor}`}
    className={`py-2 font-light border-none text-md ${
      option.anchor === activeSection && "text-purple-500"
    } hover:opacity-60 hover:text-purple-600`}
  >
    {option.OptionTitle}
  </a>
);


const NavButtons = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  useEffect(() => {
    navBarOptions.forEach((section) => {
      sectionRefs.current[section.anchor] = document.getElementById(
        section.anchor
      );
    });
  }, []);

  useEffect(() => {
    const sectionRefsCopy = sectionRefs;
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust how much of section must be visible
    };

    // Callback for IntersectionObserver
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Create observer & observe each section
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    Object.values(sectionRefsCopy.current).forEach((sectionElem) => {
      if (sectionElem) observer.observe(sectionElem);
    });

    // Cleaning up
    return () => {
      Object.values(sectionRefsCopy.current).forEach((sectionElem) => {
        if (sectionElem) observer.unobserve(sectionElem);
      });
    };
  }, []);

  return (
    <div
      className={`
        flex flex-row justify-between items-center space-x-6 py-1
        mobile:space-x-[10px] mobile:pt-2 mobile:w-full mobile:px-[10px] small:px-[5px]`}
    >
      {navBarOptions.map((option, idx) => (
        <Option key={idx} {...option} activeSection={activeSection} />
      ))}
    </div>
  );
};

export default NavButtons;
