import React, { useEffect, useState } from "react";
import NewInputFeild from "../inputs/NewInputFeild";
import NewDropDown from "../inputs/NewDropDown";
import MainButton from "../buttons/MainButton";
import RequestItem from "./RequestItem";
import { backendDomainName, corporateFriendlyCountries, homeService } from "../../utils/paths";

const styles = {
  container: "flex flex-col w-full h-screen mx-4 mt-4",
  filterBox: "rounded-[16px] bg-white flex flex-col",
  filterHeader: "flex flex-row p-2 items-center gap-2",
  inputField: "flex-1",
  dropdownRow: "flex flex-row w-full flex-2 gap-2",
  dateInput: "rounded-md border px-2",
  actionRow: "w-full flex flex-row justify-end p-2",
  buttonsContainer: "w-[40%] flex flex-row gap-4",
  resultsContainer: "flex-1 overflow-y-auto mt-2",
};

const FormsRequestsDB = () => {
  const [itemsList, setItemsList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [stared, setStared] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const fetchFilteredRequests = async () => {
    try {
      const token = localStorage.getItem("token");
      // console.log(token);

      const params = new URLSearchParams();

      if (selectedService && selectedService !== "Select Service")
        params.append("service", selectedService);
      if (selectedCountry && selectedCountry !== "Select Countery")
        params.append("country", selectedCountry);

      if (selectedDate) params.append("date", selectedDate);
      if (stared === "Stared") params.append("stared", "true");
      if (stared === "Un-Stared") params.append("stared", "false");
      console.log(stared);
      console.log(selectedCountry);

      const url = `${backendDomainName}/api/contact?${params.toString()}`;

      console.log(url);
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch contact requests");
      const data = await response.json();
      console.log(data);

      setItemsList(data);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  const applyFilters = () => {
    fetchFilteredRequests();
  };

  const clearFilters = () => {
    setSelectedService("Select Service");
    setSelectedCountry("Select Countery");
    setStared("Select type");
    setSelectedDate("");
    setSearchText("");
    setItemsList([]);
    fetchFilteredRequests();
  };
  useEffect(() => {
    fetchFilteredRequests();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.filterBox}>
        <div className={styles.filterHeader}>
          <div className={styles.inputField}>
            <NewInputFeild
              placeHolderText="Search by name or email"
              value={searchText}
              onchangeFunction={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className={styles.dropdownRow}>
            <NewDropDown
              itemsList={["Select Service"].concat(homeService)}
              value={selectedService}
              onchangeFunction={(e) => setSelectedService(e.target.value)}
            />
            <NewDropDown
              itemsList={corporateFriendlyCountries}
              value={selectedCountry}
              onchangeFunction={(e) => setSelectedCountry(e.target.value)}
            />
            <NewDropDown
              itemsList={["Select type", "Stared", "Un-Stared"]}
              value={stared}
              onchangeFunction={(e) => {
                setStared(e.target.value);
              }}
            />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className={styles.dateInput}
            />
          </div>
        </div>
        <div className={styles.actionRow}>
          <div className={styles.buttonsContainer}>
            <MainButton
              bgcolor="blue"
              text="Apply filter"
              onclickfunction={applyFilters}
            />
            <MainButton text="Clear filter" onclickfunction={clearFilters} />
          </div>
        </div>
      </div>

      {itemsList.length > 0 ? (
        <div className={styles.resultsContainer}>
          {itemsList
            .filter(
              (item) =>
                item.name?.toLowerCase().includes(searchText.toLowerCase()) ||
                item.email?.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((item, index) => (
              <RequestItem
                key={item._id || index}
                id={item._id}
                name={item.name}
                email={item.email}
                phone={item.phone}
                service={item.service}
                country={item.country}
                isFavorite={item.stared}
                date={new Date(item.date).toLocaleDateString()}
                isform={true}
              />
            ))}
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default FormsRequestsDB;
