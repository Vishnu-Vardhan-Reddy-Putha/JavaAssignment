import React, { Component } from 'react';

// Functional Component to display the list of fruits
const FruitList = (props) => {
  return (
    <div>
      <h3>FruitList</h3>
      <ul>
        {/* Loop through the fruits array passed via props and display each fruit in a list item */}
        {props.fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

// Class Component that manages the fruit list and user input
class Fruits extends Component {
  constructor(props) {
    super(props);
    // Initialize state with a default list of fruits and an empty newFruit input value
    this.state = {
      fruits: ['Apple', 'Banana', 'orange'],
      newFruit: ''
    };
  }

  // Handles changes in the input field and updates the newFruit value in state
  handleChange = (event) => {
    this.setState({ newFruit: event.target.value });
  };

  // Adds the new fruit to the list if input is not empty
  addFruit = () => {
    if (this.state.newFruit.trim() !== '') {
      this.setState((prevState) => ({
        // Add the new fruit to the existing fruits array
        fruits: [...prevState.fruits, prevState.newFruit],
        // Clear the input field
        newFruit: ''
      }));
    }
  };

  // Renders the input, button, and passes the fruits to the FruitList component
  render() {
    return (
      <div>
        <h2>Fruits</h2>
        
        {/* Input field to type a new fruit name */}
        <input
          type="text"
          value={this.state.newFruit}
          onChange={this.handleChange}
        />
        
        {/* Button to trigger addFruit function */}
        <button onClick={this.addFruit}>Add</button>
        
        {/* Pass the fruits array to the functional component as props */}
        <FruitList fruits={this.state.fruits} />
      </div>
    );
  }
}

// Export the class component as default so it can be used in other files like App.js
export default Fruits;
