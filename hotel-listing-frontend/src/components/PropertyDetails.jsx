import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await api.get(`/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="property-details-container">
      <div className="property-details">
        <h2>{property.name}</h2>
        <p>City: {property.city}</p>
        <p>Bedrooms: {property.bedrooms}</p>
        <p>Bathrooms: {property.bathrooms}</p>
        <p>Price: ${property.price}</p>
        <img src={property.imageUrl} alt={property.name} className="property-image" />
        {/* ...other property details */}
      </div>
    </div>
  );
};

export default PropertyDetails;
