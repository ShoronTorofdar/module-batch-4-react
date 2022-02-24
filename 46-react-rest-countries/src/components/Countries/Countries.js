import React from 'react';
import { useState, useEffect } from 'react';
import Country from './Country/Country';
import './Countries.css';

const Countries = () => {
  const [countries,setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => setCountries(data))
  }, []);

  return (
    <div>
      <h1 className='header-style'>Allah is greatest, O Allah fullfill my dream</h1>
    <div className='countries-container'>
      {
         countries.map(country => <Country 
          key={country.alpha3Code}
          
          country = {country}    
          ></Country>)
      }
    </div>
    </div>
  );
};

export default Countries;