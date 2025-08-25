// FruitCommunication.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FruitCommunication() {
  const [fruits, setFruits] = useState(['Apple', 'Mango']); // Initial fruit list
  const [selectedFruit, setSelectedFruit] = useState('');   // For showing in Child C

  // Function to add a fruit from Child B
  const addFruit = (newFruit) => {
    if (!fruits.includes(newFruit)) {
      setFruits([...fruits, newFruit]);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h3>React – Parent / Child / Sibling Communication</h3>

      {/* Child A */}
      <ChildA fruits={fruits} onSelect={setSelectedFruit} />

      <div className="row mt-4 justify-content-center">
        {/* Child B */}
        <div className="col-4">
          <ChildB onSendFruit={() => addFruit('Orange')} />
        </div>

        {/* Child C */}
        <div className="col-4">
          <ChildC selectedFruit={selectedFruit} />
        </div>
      </div>
    </div>
  );
}

// Child A – Displays fruit list and lets user select
function ChildA({ fruits, onSelect }) {
  return (
    <div className="mt-4">
      <h5>Fruit List</h5>
      <ul className="list-group w-25 mx-auto">
        {fruits.map((fruit, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => onSelect(fruit)}
            style={{ cursor: 'pointer' }}
          >
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Child B – Sends new fruit to Parent
function ChildB({ onSendFruit }) {
  return (
    <div>
      <h5>Sender</h5>
      <button className="btn btn-primary" onClick={onSendFruit}>
        Send Fruit
      </button>
    </div>
  );
}

// Child C – Displays selected fruit
function ChildC({ selectedFruit }) {
  return (
    <div>
      <h5>Selected Fruit</h5>
      <div className="border p-2">
        {selectedFruit || 'None'}
      </div>
    </div>
  );
}

export default FruitCommunication;
