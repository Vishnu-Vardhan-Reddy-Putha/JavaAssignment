import React from 'react';

function GroceryList({ items }) {
  const handleClick = () => {
    alert("Groceries Added to Cart!");
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h2>Groceries List:</h2>
      <ul style={{ listStyleType: "disc", display: "inline-block", textAlign: "left" }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <br />
      <button onClick={handleClick} style={{ marginTop: "10px", padding: "8px 16px", fontSize: "16px" }}>
        Add to Cart
      </button>
    </div>
  );
}

export default GroceryList;
