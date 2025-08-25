import React, { useEffect, useState } from 'react';

function RestaurantForm() {
  // Form state
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    email: '',
    contact: '',
    address: '',
    cuisineType: '',
    openingHours: ''
  });

  // Submitted data state
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  // 1️⃣ Run on every render
  useEffect(() => {
    console.log('RestaurantForm component rendered');
  });

  // 2️⃣ Run only once on mount
  useEffect(() => {
    alert('Welcome to Restaurant Registration 🍴');
  }, []);

  // 3️⃣ Run when form data changes
  useEffect(() => {
    console.log('Form data changed:', formData);
  }, [formData]);

  // 4️⃣ Auto-save every 5 seconds (cleanup required)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Auto-saving form data...', formData);
    }, 5000);

    return () => clearInterval(interval); // Clean up
  }, [formData]);

  return (
    <div className="container mt-5">
      <h2>🍴 Restaurant Registration Form</h2>
      <p>Welcome to Restaurant Registration 🏢</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="restaurantName"
          placeholder="Restaurant Name"
          className="form-control my-2"
          value={formData.restaurantName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Owner Name"
          className="form-control my-2"
          value={formData.ownerName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control my-2"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          className="form-control my-2"
          value={formData.contact}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="form-control my-2"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cuisineType"
          placeholder="Cuisine Type"
          className="form-control my-2"
          value={formData.cuisineType}
          onChange={handleChange}
        />
        <input
          type="text"
          name="openingHours"
          placeholder="Opening Hours"
          className="form-control my-2"
          value={formData.openingHours}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>

      {/* Display Submitted Data as JSON */}
      {submittedData && (
        <div className="mt-4">
          <h5>📂 Submitted Data (JSON)</h5>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default RestaurantForm;
