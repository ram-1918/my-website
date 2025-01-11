import {
  faBriefcase,
  faBuilding,
  faCalendarDays,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Duration = ({ text, duration, dark }) => {
  return (
    <span
      className="group-hover/edu:text-black transition duration-700 text-lg font-light small:text-[0.5rem] mobile:text-[0.85rem] mobile:text-zinc-200"
    >
      <FontAwesomeIcon icon={faCalendarDays} className={`px-1 ${dark ? 'text-zinc-200' : 'text-zinc-600'} mobile:text-zinc-200`} />
      {duration}
    </span>
  );
};

const IsContract = ({ jobtype }) =>
  jobtype === "c2c" && <span className="text-sm">(Contract)</span>;
const IsAffiliated = ({ other }) =>
  other && <span className="text-sm">(Affiliated)</span>;

export const CompanyName = ({
  dark,
  obj: { name, text, location, type, jobtype, otherName },
}) => {
  const expIcon =
    type === "exp" ? (
      <FontAwesomeIcon icon={faBuilding} className="desktop:hidden px-1 mobile:text-[0.8rem] text-zinc-200" />
    ) : (
      <FontAwesomeIcon icon={faUniversity} className="desktop:hidden px-1 mobile:text-[0.8rem] text-zinc-200" />
    );
  return (
    <span
      style={{ color: text }}
      className={`group-hover/edu:text-black transition duration-700 text-lg font-normal mobile:font-medium small:text-sm mobile:text-[1rem] mobile:text-zinc-200`}
    >
      {expIcon}
      {<span className="mobile:hidden">{name}</span>}
      {<span className="desktop:hidden">{name === 'Tata Consultancy Services' ? 'TCS' : name}</span>}
      <IsContract jobtype={jobtype} />
      <IsAffiliated other={otherName} />,
      <span
        style={{ color: text }}
        className="font-light mobile:font-normal mobile:text-[0.8rem]"
      >
        {" "}
        {location}
      </span>
    </span>
  );
};

export const Position = ({ text, position }) => {
  return (
    <span
      style={{ color: text }}
      className="group-hover/edu:text-black transition duration-700 text-md text-gray-600 font-medium small:text-[0.7rem] mobile:text-[0.75rem]"
    >
      <FontAwesomeIcon icon={faBriefcase} className="text-lg pr-1" /> {position}
    </span>
  );
};

export const EmptyCell = () => (
  <span className="flex flex-col p-4 mobile:bg-white-200 mobile:p-2"></span>
);
