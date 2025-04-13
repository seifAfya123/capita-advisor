import React, { useState, useEffect } from "react";

import NewInputFeild from "../inputs/NewInputFeild";
import NewDropDown from "../inputs/NewDropDown";
import {
  backendDomainName,
  corporateFriendlyCountries,
  homeService,
} from "../../utils/paths";
import MainButton from "../buttons/MainButton";
import RequestItem from "./RequestItem";
const styles = {
  container: "flex flex-col w-full h-screen mx-4 mt-4 bg-white ",
  filterBox: "rounded-[16px] bg-blue-500 flex flex-col",
  filterHeader: "flex flex-row p-2 items-center gap-2",
  inputField: "flex-1",
  dropdownRow: "flex flex-row w-full flex-2 gap-2",
  dateInput: "rounded-md border px-2",
  actionRow: "w-full flex flex-row justify-end p-2",
  buttonsContainer: "w-[40%] flex flex-row gap-4",
  resultsContainer: "flex-1 overflow-y-auto mt-2",
};
const CreateOrServiceDB = () => {
  const [itemsList, setItemsList] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [stared, setStared] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.filterBox}>
        <form action="">
          <div className={styles.filterHeader}>
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
          <MainButton />
          <MainButton />
        </form>
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
                isform={false}
              />
            ))}
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default CreateOrServiceDB;
