import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BakingForm() {
  // Form state (single object)
  const [formData, setFormData] = useState({
    itemName: '',
    quantity: '',
    ingredients: '',
    time: '',
    category: 'Cake'
  });

  // All submitted baking items
  const [bakingItems, setBakingItems] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add current form data to the list
    setBakingItems([...bakingItems, formData]);

    // Clear form
    setFormData({
      itemName: '',
      quantity: '',
      ingredients: '',
      time: '',
      category: 'Cake'
    });
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h3 className="mb-3"> Baking Items Form</h3>
        <form onSubmit={handleSubmit}>
          {/* Item Name */}
          <div className="form-group mb-2">
            <label>Item Name</label>
            <input
              type="text"
              name="itemName"
              className="form-control"
              value={formData.itemName}
              onChange={handleChange}
            />
          </div>

          {/* Quantity */}
          <div className="form-group mb-2">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              className="form-control"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          {/* Ingredients */}
          <div className="form-group mb-2">
            <label>Ingredients</label>
            <textarea
              name="ingredients"
              className="form-control"
              value={formData.ingredients}
              onChange={handleChange}
            />
          </div>

          {/* Baking Time */}
          <div className="form-group mb-2">
            <label>Baking Time (minutes)</label>
            <input
              type="text"
              name="time"
              className="form-control"
              value={formData.time}
              onChange={handleChange}
            />
          </div>

          {/* Category Dropdown */}
          <div className="form-group mb-3">
            <label>Category</label>
            <select
              name="category"
              className="form-control"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Cake">Cake</option>
              <option value="Bread">Bread</option>
              <option value="Pastry">Pastry</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success">
            Add Baking Item
          </button>
        </form>
      </div>

      {/* Table Display */}
      {bakingItems.length > 0 && (
        <div className="mt-4">
          <h4>Baking Items List</h4>
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Ingredients</th>
                <th>Baking Time</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {bakingItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.ingredients}</td>
                  <td>{item.time}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BakingForm;
