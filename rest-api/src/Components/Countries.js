import React from "react";

export default function Countries({ countries }) {
  console.log(countries);
  return countries.map((country) => {
    return <div> {country.name.common}</div>;
  });
}
