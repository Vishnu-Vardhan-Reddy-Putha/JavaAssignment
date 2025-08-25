import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const getAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const formik = useFormik({
    initialValues: {
      playerName: '',
      dob: '',
      gender: '',
      fideId: '',
      rating: '',
      email: '',
      mobile: '',
      country: '',
      category: '',
      parentContact: '',
      paymentConfirmed: false,
      terms: false,
    },
    validationSchema: Yup.object({
      playerName: Yup.string().min(3).required('Player name is required'),
      dob: Yup.string()
        .required('Date of Birth is required')
        .test('age', 'Age must be between 5 and 90 years', (value) => {
          const age = getAge(value);
          return age >= 5 && age <= 90;
        }),
      gender: Yup.string().required('Gender is required'),
      fideId: Yup.string()
        .matches(/^\d{8}$/, 'FIDE ID must be exactly 8 digits')
        .required('FIDE ID is required'),
      rating: Yup.number()
        .min(100, 'Minimum rating is 100')
        .max(3000, 'Maximum rating is 3000')
        .required('Rating is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      mobile: Yup.string()
        .matches(/^[6-9]\d{9}$/, 'Must be 10 digits starting with 6-9')
        .required('Mobile is required'),
      country: Yup.string().required('Country is required'),
      category: Yup.string().required('Category is required'),
      parentContact: Yup.string().when('category', (category, schema) =>
        category === 'U-12'
          ? schema
              .matches(/^\d{10}$/, 'Must be a valid 10-digit number')
              .required('Parent contact required for U-12')
          : schema.notRequired()
      ),
      paymentConfirmed: Yup.bool().oneOf([true], 'Payment must be confirmed'),
      terms: Yup.bool().oneOf([true], 'You must accept the terms'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Registration Data:', values);
      setSubmittedData([...submittedData, values]);
      resetForm();
    },
  });

  return (
    <div className="container mt-5">
      <h2>Chess Tournament Registration Form</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Text Fields */}
        {[
          { name: 'playerName', label: 'Player Name', type: 'text' },
          { name: 'dob', label: 'Date of Birth', type: 'date' },
          { name: 'fideId', label: 'FIDE ID', type: 'text' },
          { name: 'rating', label: 'Rating', type: 'number' },
          { name: 'email', label: 'Email', type: 'email' },
          { name: 'mobile', label: 'Mobile', type: 'text' },
          { name: 'country', label: 'Country', type: 'text' },
        ].map((field) => (
          <div className="mb-3" key={field.name}>
            <label className="form-label">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              className={`form-control ${
                formik.touched[field.name] && formik.errors[field.name] ? 'is-invalid' : ''
              }`}
              {...formik.getFieldProps(field.name)}
            />
            {formik.touched[field.name] && formik.errors[field.name] && (
              <div className="text-danger">{formik.errors[field.name]}</div>
            )}
          </div>
        ))}

        {/* Gender Select */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            name="gender"
            className={`form-select ${formik.touched.gender && formik.errors.gender ? 'is-invalid' : ''}`}
            {...formik.getFieldProps('gender')}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {formik.touched.gender && formik.errors.gender && (
            <div className="text-danger">{formik.errors.gender}</div>
          )}
        </div>

        {/* Category Select */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            name="category"
            className={`form-select ${formik.touched.category && formik.errors.category ? 'is-invalid' : ''}`}
            {...formik.getFieldProps('category')}
          >
            <option value="">Select</option>
            <option value="U-12">Under 12</option>
            <option value="U-18">Under 18</option>
            <option value="Open">Open</option>
          </select>
          {formik.touched.category && formik.errors.category && (
            <div className="text-danger">{formik.errors.category}</div>
          )}
        </div>

        {/* Conditional Parent Contact */}
        {formik.values.category === 'U-12' && (
          <div className="mb-3">
            <label className="form-label">Parent Contact</label>
            <input
              name="parentContact"
              type="text"
              className={`form-control ${
                formik.touched.parentContact && formik.errors.parentContact ? 'is-invalid' : ''
              }`}
              {...formik.getFieldProps('parentContact')}
            />
            {formik.touched.parentContact && formik.errors.parentContact && (
              <div className="text-danger">{formik.errors.parentContact}</div>
            )}
          </div>
        )}

        {/* Payment and Terms Checkboxes */}
        <div className="form-check mb-2">
          <input
            type="checkbox"
            name="paymentConfirmed"
            className="form-check-input"
            checked={formik.values.paymentConfirmed}
            onChange={formik.handleChange}
          />
          <label className="form-check-label">Payment Confirmed</label>
          {formik.touched.paymentConfirmed && formik.errors.paymentConfirmed && (
            <div className="text-danger">{formik.errors.paymentConfirmed}</div>
          )}
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="terms"
            className="form-check-input"
            checked={formik.values.terms}
            onChange={formik.handleChange}
          />
          <label className="form-check-label">Accept Terms & Conditions</label>
          {formik.touched.terms && formik.errors.terms && (
            <div className="text-danger">{formik.errors.terms}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Display Submitted Data */}
      {submittedData.length > 0 && (
        <div className="mt-5">
          <h4>Submitted Entries</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Player</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>FIDE ID</th>
                <th>Rating</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Country</th>
                <th>Category</th>
                <th>Parent Contact</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.playerName}</td>
                  <td>{data.dob}</td>
                  <td>{data.gender}</td>
                  <td>{data.fideId}</td>
                  <td>{data.rating}</td>
                  <td>{data.email}</td>
                  <td>{data.mobile}</td>
                  <td>{data.country}</td>
                  <td>{data.category}</td>
                  <td>{data.parentContact || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
