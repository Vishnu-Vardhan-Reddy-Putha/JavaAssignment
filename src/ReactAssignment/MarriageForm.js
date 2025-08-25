import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class MarriageForm extends Component {
  constructor(props) {
    super(props);

    // Initialize state to hold form input and submitted data
    this.state = {
      brideName: '',
      groomName: '',
      date: '',
      venue: '',
      submitted: false // Flag to show details after submission
    };
  }

  // Handle input change for all fields
  handleChange = (event) => {
    const { name, value } = event.target;

    // Update the corresponding state field
    this.setState({
      [name]: value
    });
  }

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    this.setState({ submitted: true }); // Show submitted data
  }

  render() {
    const { brideName, groomName, date, venue, submitted } = this.state;

    return (
      <div className="container mt-5">
        <div className="card p-4">
          <h3 className="text-center mb-4">Marriage Form</h3>
          
          {/* Form Section */}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group mb-3">
              <label>Bride Name</label>
              <input 
                type="text" 
                name="brideName" 
                className="form-control" 
                value={brideName} 
                onChange={this.handleChange} 
              />
            </div>

            <div className="form-group mb-3">
              <label>Groom Name</label>
              <input 
                type="text" 
                name="groomName" 
                className="form-control" 
                value={groomName} 
                onChange={this.handleChange} 
              />
            </div>

            <div className="form-group mb-3">
              <label>Marriage Date</label>
              <input 
                type="date" 
                name="date" 
                className="form-control" 
                value={date} 
                onChange={this.handleChange} 
              />
            </div>

            <div className="form-group mb-3">
              <label>Venue</label>
              <input 
                type="text" 
                name="venue" 
                className="form-control" 
                value={venue} 
                onChange={this.handleChange} 
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>

        {/* Show Submitted Marriage Details */}
        {submitted && (
          <div className="card mt-4 p-4">
            <h4 className="text-center mb-3">Marriage Details</h4>
            <p><strong>Bride Name:</strong> {brideName}</p>
            <p><strong>Groom Name:</strong> {groomName}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Venue:</strong> {venue}</p>
          </div>
        )}
      </div>
    );
  }
}

export default MarriageForm;
