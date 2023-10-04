/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import CitySelector from './CitySelector';
import api from '../services/api';
import './Header.css';

const StickyHeader = ({ selectedCity, onCityChange }) => {
  const [searchCity, setSearchCity] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (searchCity) {
        // Encode the searchCity parameter before sending the request
        response = await api.get('/properties', {
          params: {
            city: encodeURIComponent(searchCity),
          },
        });
      } else if (selectedCity) {
        // Encode the selectedCity parameter before sending the request
        response = await api.get(`/city/${encodeURIComponent(selectedCity)}`);
      } else {
        response = await api.get('/properties');
      }
      onPropertiesChange(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  
  

  return (
    <div className="header">
      <CitySelector onCityChange={onCityChange} />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by city"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default StickyHeader;
