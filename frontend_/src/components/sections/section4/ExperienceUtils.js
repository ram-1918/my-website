import {
  faBriefcase,
  faBuilding,
  faCalendarDays,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IsContract = ({ jobtype }) =>
  jobtype === "c2c" && <span className="text-sm">(Contract)</span>;

const IsAffiliated = ({ other }) =>
  other && <span className="text-sm">(Affiliated)</span>;

export const EmptyCell = () => (
  <span className="flex flex-col p-4 mobile:bg-white-200 mobile:p-2"></span>
);

export const Duration = ({ duration }) => {
  return (
    <span className="group-hover/edu:text-black transition duration-700 text-lg font-light tablet:text-[1rem] small:text-[0.5rem] mobile:text-[0.85rem]">
      <FontAwesomeIcon icon={faCalendarDays} className={`px-1`} />
      {duration}
    </span>
  );
};

export const CompanyName = ({
  dark,
  obj: { name, text, location, type, jobtype, otherName },
}) => {
  const expIcon =
    type === "exp" ? (
      <FontAwesomeIcon
        icon={faBuilding}
        className="desktop:hidden px-1 mobile:text-[0.8rem] "
      />
    ) : (
      <FontAwesomeIcon
        icon={faUniversity}
        className="desktop:hidden px-1 mobile:text-[0.8rem]"
      />
    );
  return (
    <span
      style={{ color: text }}
      className={`group-hover/edu:text-black transition duration-700 text-lg font-normal tablet:text-[1rem] mobile:font-medium small:text-sm mobile:text-[1rem]`}
    >
      {expIcon}
      {<span className="mobile:hidden tablet:hidden">{name}</span>}
      {
        <span className="laptop:hidden desktop:hidden">
          {name === "Tata Consultancy Services" ? "TCS" : name}
        </span>
      }
      <IsContract jobtype={jobtype} />
      <IsAffiliated other={otherName} />,
      <span className="font-light mobile:font-normal mobile:text-[0.8rem]">
        {" "}
        {location}
      </span>
    </span>
  );
};

export const Position = ({ position }) => {
  return (
    <span className="group-hover/edu:text-black transition duration-700 text-md text-gray-900 font-medium small:text-[0.7rem] mobile:text-[0.75rem]">
      <FontAwesomeIcon icon={faBriefcase} className="pr-1 text-lg" /> {position}
    </span>
  );
};
