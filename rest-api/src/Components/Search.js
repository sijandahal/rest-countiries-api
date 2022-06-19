import React from 'react';
import {useState} from 'react';

export const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const [searchData, setSearchData] = useState("");
    const searchUrl = `https://restcountries.com/v3.1/name/${inputValue}`;
    console.log(searchUrl);

    const getInputValue = (event) => {
     setInputValue(event.target.value);
    }

  return (
    <div>
        <input type = "search"  placeholder = "Enter the country name"  onChange = {getInputValue} value = {inputValue}/>
        <h3> Input Value : {inputValue} </h3>
    </div>
  )
}
