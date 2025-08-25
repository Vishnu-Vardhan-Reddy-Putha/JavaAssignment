import React, { Component } from 'react';

// Functional Component
// Receives television models as props and displays them in a list
const TelevisionList = (props) => {
  return (
    <div>
      <h3>Television Models List</h3>
      <ul>
        {/* Map through the televisionModels array and display each model */}
        {props.televisionModels.map((model, index) => (
          <li key={index}>{model}</li>
        ))}
      </ul>
    </div>
  );
};

// Class Component
class TelevisionManager extends Component {
  constructor(props) {
    super(props);
    // Initial state with some default television models and an empty input field
    this.state = {
      televisionModels: ['Samsung QLED', 'LG OLED', 'Sony Bravia'],
      newModel: ''
    };
  }

  // Handles input change and updates newModel in state
  handleInputChange = (event) => {
    this.setState({ newModel: event.target.value });
  };

  // Adds a new model to the televisionModels array using spread operator
  addModel = () => {
    const { newModel, televisionModels } = this.state;
    if (newModel.trim() !== '') {
      this.setState({
        televisionModels: [...televisionModels, newModel], // Spread operator used here
        newModel: '' // Clear input after adding
      });
    }
  };

  // Renders input, button, and passes data to TelevisionList component
  render() {
    return (
      <div>
        <h2>Television Manager</h2>

        {/* Input to enter new television model */}
        <input
          type="text"
          value={this.state.newModel}
          onChange={this.handleInputChange}
        />

        {/* Button to add new television model */}
        <button onClick={this.addModel}>Add</button>

        {/* Passing televisionModels array to child component */}
        <TelevisionList televisionModels={this.state.televisionModels} />
      </div>
    );
  }
}

// Export the class component as default
export default TelevisionManager;
