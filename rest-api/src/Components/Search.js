import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setselectValue] = useState("");

  const handleSelectChange = (event) => {
    setselectValue(event.target.value);
    console.log(selectValue);
  }

  // useEffect(() => {
  //   if (!selectValue) return;
  //   handleSelectChange();
  // }, [selectValue]);
  

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
      <select name="select" id="select" onChange={handleSelectChange} value = {selectValue}>
        <option value="eert3t">Filter By Region</option>
        <option value="africa">Africa</option>
        <option value="america">Amercia</option>
        <option value="asia">Asia</option>
        <option value="eurpoe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>

      <h3> Input Value : {inputValue} </h3>
    </div>
  );
};
