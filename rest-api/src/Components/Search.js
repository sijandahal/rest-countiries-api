import React from "react";
import { useState, useEffect } from "react";
import SearchFilter from "./SearchFilter";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const getInputValue = (event) => {
    setInputValue(event.target.value.toLowerCase());
  };

  return (
    <div>
      <SearchFilter inputValue={inputValue} />
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
