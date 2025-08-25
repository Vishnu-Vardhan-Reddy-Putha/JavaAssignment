// TailorShop.js
import React from 'react';
import ServiceCard from './ServiceCard';

function TailorShop() {
  const tailoringServices = [
    {
      serviceName: 'Shirt',
      price: 20,
      fabricsAvailable: ['Cotton', 'Linen', 'Polyester']
    },
    {
      serviceName: 'Pants',
      price: 30,
      fabricsAvailable: ['Denim', 'Wool', 'Chino']
    },
    {
      serviceName: 'Lehenga',
      price: 150,
      fabricsAvailable: ['Silk', 'Georgette', 'Chiffon']
    },
    {
      serviceName: 'Blouse',
      price: 40,
      fabricsAvailable: ['Cotton', 'Silk', 'Satin']
    }
  ];

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Tailoring Services</h3>
      <div className="row">
        {tailoringServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default TailorShop;

