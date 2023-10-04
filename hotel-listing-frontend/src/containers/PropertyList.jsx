/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import api from '../services/api';
import './PropertyList.css';

const PropertyList = ({ selectedCity }) => {
  const [properties, setProperties] = useState([]);
  const [visibleProperties, setVisibleProperties] = useState(3);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        let response;
        if (selectedCity) {
          response = await api.get(`/city/${selectedCity}`);
        } else {
          response = await api.get('/properties');
        }
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [selectedCity]);

  const loadMoreProperties = () => {
    setVisibleProperties((prev) => prev + 3);
  };

  return (
    <div className="property-list">
      {properties.slice(0, visibleProperties).map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
      {visibleProperties < properties.length && (
        <button onClick={loadMoreProperties}>Show More</button>
      )}
    </div>
  );
};

export default PropertyList;
