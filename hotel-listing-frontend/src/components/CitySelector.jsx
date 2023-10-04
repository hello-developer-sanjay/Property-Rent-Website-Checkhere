import React, { useState, useEffect } from 'react';
import api from '../services/api';

const CitySelector = ({ onCityChange }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await api.get('/cities');
        setCities(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCities();
  }, []);

  return (
    <select onChange={(e) => onCityChange(e.target.value)}>
      <option value="">Select a city</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
