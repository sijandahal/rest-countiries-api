import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const Select = () => {
     const [selectValue, setselectValue] = useState("");

     const handleSelectChange = (event) => {
       setselectValue(event.target.value);
       console.log(selectValue);
    };
    
    
  const getSelectedResults = () => {
    axios
      .get(`https://restcountries.com/v3.1/region/${selectValue}`)
      .then((response) => {
        const selectData = response.data;
        console.log(selectData);
      })
      .catch((error) => {
        console.log(`Error is ${error}`);
      });
  };

  useEffect(() => {
    if (!selectValue) return;
    getSelectedResults();
  }, [selectValue]);
  

  return (
    <div>
      {" "}
      <select
        name="select"
        id="select"
        onChange={handleSelectChange}
        value={selectValue}
      >
        <option value="eert3t">Filter By Region</option>
        <option value="africa">Africa</option>
        <option value="america">Amercia</option>
        <option value="asia">Asia</option>
        <option value="eurpoe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Select