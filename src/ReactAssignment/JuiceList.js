import React from 'react';

// Juice component to display a single juice item
const Juice = ({ id, name, price }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>₹{price}</td>
    </tr>
  );
};

// JuiceList component to display list of juices inside a table
const JuiceList = () => {
  const juices = [
    { id: 1, name: 'Orange Juice', price: 80 },
    { id: 2, name: 'Apple Juice', price: 100 },
    { id: 3, name: 'Mango Juice', price: 120 },
  ];

  return (
    <div>
      <h2>🥤 Juice Menu</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Juice Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {juices.map(juice => (
            <Juice key={juice.id} id={juice.id} name={juice.name} price={juice.price} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JuiceList;
