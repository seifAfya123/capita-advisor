import { backendDomainName, links } from "../../utils/paths";
import ToggleButton from "../admin/ToggleButton";
import MainButton from "../buttons/MainButton";
import { useNavigate } from "react-router-dom";
const classStyles = {
  cardStyle:
    "rounded-xl border border-gray-300 w-full sm:w-[90%] lg:w-[23.5%] flex flex-col items-center pb-[1rem] p-4 bg-white",
  imageStyle: "w-[85%] max-w-[200px]", // Ensure image scales properly
  toggleOn: "rounded-xl bg-green-500 w-[8rem] h-[2rem] text-white text-center",
  toggleOff: "rounded-xl bg-gray-500 w-[8rem] h-[2rem] text-white text-center",
  headline: "w-full flex flex-row justify-between text-[1rem] font-bold gap-2 ",
  textContainer: "w-full text-center text-[1rem] font-medium break-words",
  buttonContainer: "flex flex-col gap-2 mt-2 w-full items-center",
};

const handleViewRequest = (id) => {};
const handleViewForm = () => {};
const CounteryCard = ({
  isAdmin = false,
  image,
  isActive = false,
  counteryName,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <div className={classStyles.cardStyle}>
      {isAdmin && (
        <div className={classStyles.headline}>
          <span>{counteryName}</span>
          <ToggleButton
            onToggle={isActive}
            url={`${backendDomainName}/api/companies/admin/${id}`}
          />
        </div>
      )}
      <img className={classStyles.imageStyle} src={image} alt="Service image" />
      {!isAdmin && (
        <div className={classStyles.textContainer}>{counteryName}</div>
      )}
      {isAdmin && (
        <div className={classStyles.buttonContainer}>
          <MainButton
            onclickfunction={() => {
              console.log(links.CreateOrEditService);
              navigate(links.dashboard_copmany_requests );
            }}
            bgcolor="green"
            text="View Requests"
          />
          <MainButton
            onclickfunction={() => {
              navigate(links.dashboard_copmany_form);
            }}
            bgcolor="green"
            text="View Form"
          />
        </div>
      )}
    </div>
  );
};

export default CounteryCard;
