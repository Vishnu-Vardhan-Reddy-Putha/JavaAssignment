import React from "react";

// ServiceCard Component inside the same file
const ServiceCard = ({ service }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{service.serviceName}</h5>
        <h6 className="card-subtitle mb-2 text-primary">Price: ${service.price}</h6>
        <p className="card-text">Fabrics:</p>
        <ul>
          {service.fabricsAvailable.map((fabric, index) => (
            <li key={index}>{fabric}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// TailorShop Component
const TailorShop = () => {
  const services = [
    {
      serviceName: "Shirt",
      price: 20,
      fabricsAvailable: ["Cotton", "Linen", "Polyester"],
    },
    {
      serviceName: "Pants",
      price: 30,
      fabricsAvailable: ["Denim", "Wool", "Chino"],
    },
    {
      serviceName: "Lehenga",
      price: 150,
      fabricsAvailable: ["Silk", "Georgette", "Chiffon"],
    },
    {
      serviceName: "Blouse",
      price: 40,
      fabricsAvailable: ["Cotton", "Silk", "Satin"],
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Tailoring Services</h2>
      <div className="row">
        {services.map((service, idx) => (
          <div key={idx} className="col-md-4">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TailorShop;
