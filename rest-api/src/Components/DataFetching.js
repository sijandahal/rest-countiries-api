import React from "react";
import axios from "axios";
import Countries from "./Countries";
import { useEffect } from "react";
import { useState } from "react";

export const DataFetching = () => {
  const [countries, setCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    axios
      .get(url)
      .then((res) => {
        const allCountries = res.data;
        // console.log(res);
        //setdata to our state;
        setCountries(allCountries);
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  };
  return (
    <div className="wrapper">
      <Countries countries={countries} />
    </div>
  );
};
