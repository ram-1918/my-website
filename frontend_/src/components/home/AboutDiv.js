import About from "../../sections/section2/About";
import Skills from "../../sections/section2/Skills";

const AboutDiv = () => (
    <div id="about" 
    className="
    h-[100vh] w-full mx-auto
    mobile:h-fit mobile:flex mobile:flex-col mobile:justify-start
    ">
        <About />
        <Skills />
    </div>
);

export default AboutDiv;