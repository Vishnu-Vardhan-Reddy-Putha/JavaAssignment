import React, { useState } from 'react';

const Phone = () => {
  const [price, setPrice] = useState(79999); // initial price

  const brand = "Apple";
  const model = "iPhone 15";

  const increasePrice = () => {
    setPrice(price + 1000); // Increase by ₹1000
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h2>📱 Phone Details</h2>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Model:</strong> {model}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <button 
        onClick={increasePrice}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          marginTop: "20px",
          cursor: "pointer"
        }}
      >
        Increase Price
      </button>
    </div>
  );
};

export default Phone;
