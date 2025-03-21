const classStyles = {
  cardStyle:
    "rounded-xl border border-gray-300 w-full sm:w-[90%] lg:w-[23.5%] flex flex-col items-center pb-[1rem] p-4",
  imageStyle: "w-[85%] max-w-[200px]", // Ensure image scales properly
  toggleOn: "rounded-xl bg-green-500 w-[8rem] h-[2rem] text-white text-center",
  toggleOff: "rounded-xl bg-gray-500 w-[8rem] h-[2rem] text-white text-center",
  headline: "w-full flex flex-row justify-between text-[1rem] font-bold",
  textContainer: "w-full text-center text-[1.3rem] font-medium break-words",
  buttonContainer: "flex flex-col gap-2 mt-2 w-full items-center",
};

const handleViewRequest = () => {};
const handleViewForm = () => {};
const CounteryCard = ({
  isAdmin = false,
  image,
  isActive = false,
  counteryName,
}) => {
  return (
    <div className={classStyles.cardStyle}>
      {isAdmin && (
        <div className={classStyles.headline}>
          <span>{counteryName}</span>
          <div
            className={isActive ? classStyles.toggleOn : classStyles.toggleOff}
          >
            {isActive ? "Enabled" : "Disabled"}
          </div>
        </div>
      )}
      <img className={classStyles.imageStyle} src={image} alt="Service image" />
      {!isAdmin && (
        <div className={classStyles.textContainer}>{counteryName}</div>
      )}
      {isActive && (
        <div className={classStyles.buttonContainer}>
          <MainButton
            onclickfunction={handleViewRequest}
            bgcolor="green"
            text="View Requests"
          />
          <MainButton
            onclickfunction={handleViewForm}
            bgcolor="green"
            text="View Form"
          />
        </div>
      )}
    </div>
  );
};

export default CounteryCard;
