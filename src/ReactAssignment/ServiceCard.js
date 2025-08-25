// ServiceCard.js
import React from 'react';

function ServiceCard({ service }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{service.serviceName}</h5>
          <p className="card-text">
            <strong>Price:</strong> <span className="text-primary">${service.price}</span>
          </p>
          <p className="card-text"><strong>Fabrics:</strong></p>
          <ul className="list-unstyled mb-0">
            {service.fabricsAvailable.map((fabric, index) => (
              <li key={index}>- {fabric}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
