import React from 'react';

// Child component
const CanteenItem = ({ name, price, category, available }) => {
  return (
    <li>
      <strong>{name}</strong> - Price: ₹{price} - Category: {category} - {available === "Yes" ? "Available" : "Not Available"}
    </li>
  );
};

// Parent component
const CanteenMenu = () => {
  // Sample items data
  const items = [
    { id: 1, name: "Idli", price: 30, category: "Breakfast", available: "Yes" },
    { id: 2, name: "Dosa", price: 5, category: "Breakfast", available: "Yes" },
    { id: 3, name: "Vada", price: 2, category: "Snack", available: "No" },
    { id: 4, name: "Poori", price: 40, category: "Breakfast", available: "Yes" },
    { id: 5, name: "Meals", price: 120, category: "Lunch", available: "Yes" }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h2>Canteen Name: Campus Food Court</h2>
      <p><strong>Location:</strong> Block A, Ground Floor</p>
      <p><strong>Open Hours:</strong> 8:00 AM - 8:00 PM</p>
      <h3>Canteen Menu:</h3>
      <ul>
        {items.map(item => (
          <CanteenItem
            key={item.id}
            name={item.name}
            price={item.price}
            category={item.category}
            available={item.available}
          />
        ))}
      </ul>
    </div>
  );
};

export default CanteenMenu;
