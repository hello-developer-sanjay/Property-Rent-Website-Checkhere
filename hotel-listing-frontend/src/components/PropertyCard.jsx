/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const PropertyCard = ({ property }) => {
  return (
    <Link to={`/property/${property._id}`} className="property-card">
      <img src={property.imageUrl} alt={property.name} className="property-image" />
      <div className="property-details">
        <h3 className="property-name">{property.name}</h3>
        <p className="property-city">{property.city}</p>
        <div className="property-details-item">
          <FontAwesomeIcon icon={faBed} className="property-icon" />
          <span className="property-details-value">{property.bedrooms} Bedrooms</span>
        </div>
        <div className="property-details-item">
          <FontAwesomeIcon icon={faBath} className="property-icon" />
          <span className="property-details-value">{property.bathrooms} Bathrooms</span>
        </div>
        <div className="property-details-item">
          <FontAwesomeIcon icon={faDollarSign} className="property-icon" />
          <span className="property-details-value">{property.price} $ /Month</span>
        </div>
        {/* Add more details and icons as needed */}
      </div>
    </Link>
  );
};

export default PropertyCard;
