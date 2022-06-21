import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
 


  useEffect(() => {
    getSearchResults();
  }, [inputValue])

  const getInputValue = (event) => {
    setInputValue(event.target.value.toLowerCase());
  };

  const getSearchResults = () => {
    if (!inputValue) {
      onSearch(null);
      return;
    }
    axios
      .get(`https://restcountries.com/v3.1/name/${inputValue}`)
      .then((response) => {
        const searchData = response.data;
        onSearch(searchData);
      })
      .catch(() => {
        onSearch([]);
      });
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Enter the country name"
        onChange={getInputValue}
        value={inputValue}
      />
      <h3> Input Value : {inputValue} </h3>
    </div>
  );
};
