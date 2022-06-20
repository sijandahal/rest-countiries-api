import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const SearchFilter = ({ inputValue }) => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    getSearchResults();
  }, []);

  // console.log(inputValue);

  // if(!inputValue) {

  // }

  const getSearchResults = () => {
    if (!inputValue) return;
    console.log(inputValue);
    axios
      .get(`https://restcountries.com/v3.1/name/${inputValue}`)
      .then((response) => {
        console.log(response);
        const searchData = response.data;
        console.log(searchData);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log(`Error is : ${error}`);
      });
  };

  return filteredData.map((data) => {
    return (
      <>
        <div className="wrap"> {data.name.common} </div>
        <div> {data.capital}</div>
      </>
    );
  });
};

export default SearchFilter;
