import React from "react";

export default function Countries({ countries }) {

  if (!countries.length) return (
    <>
      <h1> No result found </h1>
    </>
  );

  return countries.map((country, index) => {
    const { flags, name, population, region, capital } = country;
    
    return (
      <div className="main" key={index}>
        <div className="image-wrap">
          <img src={`${flags.png}`} alt="" />
        </div>
        <div className="details-wrap">
          <span>{name.common}</span>
          <h3>
            Population : <span> {population} </span>
          </h3>
          <h3>
            Region : <span> {region} </span>
          </h3>
          <h3>
            Capital : <span> {capital} </span>
          </h3>
        </div>
      </div>
    );
  });
}
