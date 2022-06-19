import React from "react";

export default function Countries({ countries }) {
  return countries.map((country) => {
    return <div> {country.name.common}</div>;
  });
}
