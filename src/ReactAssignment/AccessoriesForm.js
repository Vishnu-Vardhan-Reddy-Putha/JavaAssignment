import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class AccessoriesForm extends Component {
  constructor(props) {
    super(props);
    // Initialize state to store form fields and submission flag
    this.state = {
      name: '',
      description: '',
      category: 'Mobile',
      brand: 'Apple',
      inStock: false,
      warranty: '',
      submitted: false
    };
  }

  // Handle changes in input fields
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Checkbox requires checking 'checked' instead of 'value'
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    this.setState({ submitted: true });
  };

  render() {
    const { name, description, category, brand, inStock, warranty, submitted } = this.state;

    return (
      <div className="container mt-5">
        <div className="card p-4">
          <h3 className="text-center">Accessories Form</h3>
          <form onSubmit={this.handleSubmit}>
            {/* Text Input */}
            <div className="form-group mb-3">
              <label>Accessory Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={name}
                onChange={this.handleChange}
              />
            </div>

            {/* Textarea Input */}
            <div className="form-group mb-3">
              <label>Description</label>
              <textarea
                name="description"
                className="form-control"
                value={description}
                onChange={this.handleChange}
              />
            </div>

            {/* Select Dropdown */}
            <div className="form-group mb-3">
              <label>Category</label>
              <select
                name="category"
                className="form-control"
                value={category}
                onChange={this.handleChange}
              >
                <option>Mobile</option>
                <option>Laptop</option>
                <option>Tablet</option>
              </select>
            </div>

            {/* Radio Buttons */}
            <div className="form-group mb-3">
              <label>Brand</label><br />
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="brand"
                  value="Apple"
                  checked={brand === 'Apple'}
                  onChange={this.handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label">Apple</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="brand"
                  value="Samsung"
                  checked={brand === 'Samsung'}
                  onChange={this.handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label">Samsung</label>
              </div>
            </div>

            {/* Checkbox */}
            <div className="form-group mb-3 form-check">
              <input
                type="checkbox"
                name="inStock"
                checked={inStock}
                onChange={this.handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Available in Stock</label>
            </div>

            {/* Number Input */}
            <div className="form-group mb-3">
              <label>Warranty (Years)</label>
              <input
                type="number"
                name="warranty"
                className="form-control"
                value={warranty}
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>

        {/* Submitted Data Table */}
        {submitted && (
          <div className="card mt-4 p-4">
            <h4 className="text-center">Submitted Accessory Details</h4>
            <table className="table table-bordered">
              <tbody>
                <tr><th>Accessory Name</th><td>{name}</td></tr>
                <tr><th>Description</th><td>{description}</td></tr>
                <tr><th>Category</th><td>{category}</td></tr>
                <tr><th>Brand</th><td>{brand}</td></tr>
                <tr><th>Available in Stock</th><td>{inStock ? 'Yes' : 'No'}</td></tr>
                <tr><th>Warranty</th><td>{warranty} Year(s)</td></tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default AccessoriesForm;
