import React from "react";
import axios from "axios";
import Countries from "./Countries";
import { useEffect } from "react";
import { useState } from "react";
import { Search } from "./Search";
import RegionSelect from "./RegionSelect";

export const DataFetching = () => {
  const [countries, setCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    getAllCountries();
  }, []);

  function setFilteredData(data) {
    if (!data) {
      getAllCountries();
      return;
    }
    setCountries(data);
  }

  const getAllCountries = () => {
    axios
      .get(url)
      .then((res) => {
        const allCountries = res.data;
        setCountries(allCountries);
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  };
  return (
    <>
      <div className="flex justify-between wrap">
        <Search onSearch={(data) => setFilteredData(data)} />
        <RegionSelect />
      </div>
      <div className="grid grid-cols-4 wrapper">
        <Countries countries={countries} />
      </div>
    </>
  );
};
