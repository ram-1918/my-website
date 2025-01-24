export const gradientStyle =
  "bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent";

export const gradientBG = "bg-gradient-to-b from-white to-purple-50";

const TitleSpan = ({ name }) => {
  return (
    <div className="w-full text-center">
      <span
        className={`${gradientStyle} text-[1.7rem] font-medium uppercase tracking-wide text-[#27374D] small:text-[1.5rem] mobile:text-[1.5rem]`}
      >
        {name}
      </span>
    </div>
  );
};

const DescriptionSpan = ({ textContent, content }) => (
  <span
    style={{ color: textContent }}
    className="font-sans font-light leading-6 tracking-wider text-center w-96 text-md mobile:w-fit mobile:px-2"
  >
    {content}
  </span>
);

function Header({ name, content }) {
  return (
    <div className="relative flex flex-row items-center justify-center w-full h-full py-4 mx-auto small:w-full mobile:w-full">
      <div
        className="
                w-[35%] flex flex-col items-center space-y-0 
                mobile:w-full tablet:w-full
                "
      >
        <TitleSpan name={name} />
        <DescriptionSpan content={content} />
      </div>
    </div>
  );
}

export default Header;