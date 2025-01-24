export const AboutTextMarketing = () => {
  return (
    <span className="text-sm font-medium leading-6 tracking-wide text-slate-700 mobile:w-full mobile:text-xs">
      I am eager to leverage my <Highlight focus={true}>4 years</Highlight> of
      software development experience and technical skills in real-world
      projects. <Highlight>Fully prepared</Highlight> for{" "}
      <Highlight>technical assessments</Highlight> and{" "}
      <Highlight>interviews</Highlight>, I invite you to explore my portfolio to
      understand how my expertise can{" "}
      <Highlight>contribute to your team</Highlight>. I look forward to the{" "}
      <Highlight focus={true}>opportunity</Highlight> to demonstrate my
      capabilities and discuss{" "}
      <Highlight>how I can add value to your organization</Highlight>.
    </span>
  );
};

const Highlight = ({ children, focus = false }) => (
  <span
    className={`font-semibold text-md underline-offset-1 ${
      focus ? "text-xl" : "underline"
    }`}
  >
    {children}
  </span>
);
