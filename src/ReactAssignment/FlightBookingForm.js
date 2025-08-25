import React, { Component, createRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class FlightBookingForm extends Component {
  constructor(props) {
    super(props);

    // Controlled form state
    this.state = {
      name: '',
      email: '',
      gender: '',
      meal: '',
      request: '',
      controlledSubmitted: false,
      uncontrolledSubmitted: false,
      uncontrolledData: {}
    };

    // Refs for uncontrolled form
    this.flightNoRef = createRef();
    this.sourceRef = createRef();
    this.destinationRef = createRef();
    this.dateRef = createRef();
    this.termsRef = createRef();
  }

  // Controlled form input change handler
  handleControlledChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Controlled form submit handler
  handleControlledSubmit = (e) => {
    e.preventDefault();
    this.setState({ controlledSubmitted: true });
  };

  // Uncontrolled form submit handler
  handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    const uncontrolledData = {
      flightNo: this.flightNoRef.current.value,
      source: this.sourceRef.current.value,
      destination: this.destinationRef.current.value,
      date: this.dateRef.current.value,
      termsAccepted: this.termsRef.current.checked,
    };
    this.setState({ uncontrolledData, uncontrolledSubmitted: true });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">

          {/* Controlled Flight Booking Form */}
          <div className="col-md-6">
            <h4>Controlled Flight Booking Form</h4>
            <form onSubmit={this.handleControlledSubmit}>

              {/* Passenger Name */}
              <div className="mb-2">
                <label>Passenger Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleControlledChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-2">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleControlledChange}
                  required
                />
              </div>

              {/* Gender */}
              <div className="mb-2">
                <label>Gender</label><br />
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={this.state.gender === 'Male'}
                    onChange={this.handleControlledChange}
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={this.state.gender === 'Female'}
                    onChange={this.handleControlledChange}
                    className="form-check-input"
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>

              {/* Meal Preference */}
              <div className="mb-2">
                <label>Meal Preference</label>
                <select
                  name="meal"
                  className="form-control"
                  value={this.state.meal}
                  onChange={this.handleControlledChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non-Veg</option>
                </select>
              </div>

              {/* Special Request */}
              <div className="mb-2">
                <label>Special Request</label>
                <textarea
                  name="request"
                  className="form-control"
                  value={this.state.request}
                  onChange={this.handleControlledChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {/* Controlled Form Submitted Data Table */}
            {this.state.controlledSubmitted && (
              <table className="table table-bordered mt-3">
                <thead>
                  <tr>
                    <th>Passenger Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Meal Preference</th>
                    <th>Special Request</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.name}</td>
                    <td>{this.state.email}</td>
                    <td>{this.state.gender}</td>
                    <td>{this.state.meal}</td>
                    <td>{this.state.request}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          {/* Uncontrolled Flight Booking Form */}
          <div className="col-md-6">
            <h4>Uncontrolled Flight Booking Form</h4>
            <form onSubmit={this.handleUncontrolledSubmit}>

              {/* Flight Number */}
              <div className="mb-2">
                <label>Flight Number</label>
                <input
                  type="text"
                  className="form-control"
                  ref={this.flightNoRef}
                  required
                />
              </div>

              {/* Source */}
              <div className="mb-2">
                <label>Source</label>
                <input
                  type="text"
                  className="form-control"
                  ref={this.sourceRef}
                  required
                />
              </div>

              {/* Destination */}
              <div className="mb-2">
                <label>Destination</label>
                <input
                  type="text"
                  className="form-control"
                  ref={this.destinationRef}
                  required
                />
              </div>

              {/* Travel Date */}
              <div className="mb-2">
                <label>Travel Date</label>
                <input
                  type="date"
                  className="form-control"
                  ref={this.dateRef}
                  required
                />
              </div>

              {/* Terms Accepted */}
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  ref={this.termsRef}
                  required
                />
                <label className="form-check-label">Terms Accepted</label>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {/* Uncontrolled Form Submitted Data Card */}
            {this.state.uncontrolledSubmitted && (
              <div className="card mt-3 p-3">
                <h5>Flight Details</h5>
                <p><strong>Flight Number:</strong> {this.state.uncontrolledData.flightNo}</p>
                <p><strong>Source:</strong> {this.state.uncontrolledData.source}</p>
                <p><strong>Destination:</strong> {this.state.uncontrolledData.destination}</p>
                <p><strong>Date:</strong> {this.state.uncontrolledData.date}</p>
                <p><strong>Terms Accepted:</strong> {this.state.uncontrolledData.termsAccepted ? 'Yes' : 'No'}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    );
  }
}

export default FlightBookingForm;
