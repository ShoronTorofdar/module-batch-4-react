import React from 'react';
import './Country.css'

const Country = (props) => { 
  const { name, capital, population, region, area, flag } = props.country;
  return (
    <div className='country-style'>
      <h1>May Allah keeps me safe</h1>
      <img src={flag} alt="" />
      <h2>Name: {name}</h2> 
      <h3>Capital: {capital}</h3>
      <h3>Population: {population}</h3>
      <h4>Region: {region}</h4> 
      <h4>Area: {area}</h4> 
      
    </div>
  );
};

export default Country;