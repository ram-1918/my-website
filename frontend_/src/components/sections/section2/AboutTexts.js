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

export const AboutTextMarketing = ({ dark }) => {
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
      I am eager to leverage my 4 years of software development experience and technical skills in real-world projects. Fully prepared for technical assessments and interviews, I invite you to explore my portfolio to understand how my expertise can contribute to your team. I look forward to the opportunity to demonstrate my capabilities and discuss how I can add value to your organization.
    </span>
  );
};

{/* <StyledSpanText textTitle={textTitle} text="Python/Go developer" />
<NormalSpanText text="with passion for building user-friendly apps. Leverage data science skills (MSc)" />
<NormalSpanText text=" for data-driven solutions. Detail-oriented, high-quality delivery." />
<StyledSpanText textTitle={textTitle} text="Ready to contribute" />
<NormalSpanText text=" to your team." /> */}