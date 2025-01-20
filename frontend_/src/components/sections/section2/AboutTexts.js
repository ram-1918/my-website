import { NormalSpanText, StyledSpanText } from "./Spans";

export const AboutTextFT = ({ dark }) => {
  let text,
    textTitle = "";

  if (dark) {
    text = "#D1D2D3";
    textTitle = "#9DB2BF";
  }
  return (
    <span
      style={{ color: text }}
      className="text-sm font-medium text-slate-700 mobile:w-full"
    >
      <NormalSpanText
        text="I'm an experienced web developer with skills in both front-end
            and back-end developement. I really"
      />
      <StyledSpanText
        textTitle={textTitle}
        text="enjoy making websites and applications"
      />
      <NormalSpanText text="that people find easy to use. I've got a Master's degree in" />
      <StyledSpanText textTitle={textTitle} text="Data Science" />
      <NormalSpanText
        text="which helps me analyze data and create data-driven solutions. I
            pay a lot of attention to the little things and always aim to
            deliver high-quality work, making me a great addition to any
            development team."
      />
    </span>
  );
};

export const AboutTextMarketing = () => {

  return (
    <span
      className="text-sm font-medium leading-6 tracking-wide text-slate-700 mobile:w-full"
    >
      I am eager to leverage my <Highlight focus={true}>4 years</Highlight> of software
      development experience and technical skills in real-world projects.{" "}
      <Highlight>Fully prepared</Highlight> for{" "}
      <Highlight>technical assessments</Highlight> and{" "}
      <Highlight>interviews</Highlight>, I invite you to explore my portfolio to
      understand how my expertise can{" "}
      <Highlight>contribute to your team</Highlight>. I look forward to the{" "}
      <Highlight focus={true}>opportunity</Highlight> to demonstrate my capabilities and
      discuss <Highlight>how I can add value to your organization</Highlight>.
    </span>
  );
};

const Highlight = ({ children, focus=false }) => (
  <span className={`font-semibold text-md underline-offset-1 ${focus ? "text-xl": "underline"}`}>{children}</span>
);