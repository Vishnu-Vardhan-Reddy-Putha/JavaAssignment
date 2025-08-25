import React, { useState } from 'react';

const Electronics = () => {
  const [name, setName] = useState("Laptop");
  const [brand, setBrand] = useState("Dell");
  const [price, setPrice] = useState(5500);

  const changeBrand = () => {
    setBrand("HP");
  };

  const increasePrice = () => {
    setPrice(price + 500);
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h2>⚡ Electronic Item Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Price:</strong> ₹{price}</p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={changeBrand}
          style={{
            padding: "10px 15px",
            marginRight: "10px",
            fontSize: "16px",
            backgroundColor: "#e0e0e0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Change Brand
        </button>

        <button
          onClick={increasePrice}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Increase Price
        </button>
      </div>
    </div>
  );
};

export default Electronics;
